import hashlib
import json
import logging
import random
from datetime import timedelta

import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from django_server.utils import get_client_ip, get_client_country, is_mobile, check_signature
from moretvtime.models import Article, Category, Tracking, BannerPlaceholder, Provider, Page, Banner, SendMoney, \
    PayLatterFaucetHub
from moretvtime.serializers import TrackingSerializer, BannerPlaceholderSerializer
from moretvtime.submodels.captcha import Captcha, CaptchaTrigger
from moretvtime.vendor.libsolvemedia import SolveMedia

logger = logging.getLogger(__name__)

COOKIE_NAME = 'mtt_session'
COOKIE_HASH = 'HpBs82mPs7x!s0pF'

secure_random = random.SystemRandom()

solve_media = SolveMedia('GAwjlHkso7wlmpljdyUDZ8rRKdw0SbVJ', 'Qr6Ct97b7gkfiHRJMTPHpv8dyqqx3EGo',
                         'KK2N.iyVYUWjG88q5Y0bJHZwaTgQaSW')

##
# Pre-Cache list of all articles
#
ALL_ARTICLES = Article.get_all_links()
ALL_ARTICLES_COUNT = len(ALL_ARTICLES)
ALL_ARTICLES_COUNT_BY_CATEGORY = Article.get_count_by_category()
RECOMMENDED_ARTICLE = Article.objects.filter(order=1).select_related('category').order_by('-created')[:4]
special_cat = [33, 34]

##
# Pre-Cache list of all public articles
# _PUBLIC_
ALL_PUBLIC_ARTICLES = Article.get_all_public_links()
ALL_PUBLIC_ARTICLES_COUNT = len(ALL_PUBLIC_ARTICLES)
ALL_PUBLIC_ARTICLES_COUNT_BY_CATEGORY = Article.get_count_by_public_category()
RECOMMENDED_PUBLIC_ARTICLE = Article.objects.filter(order=1, category_id__in=special_cat).select_related( \
    'category').order_by('-created')[:4]


@method_decorator(csrf_exempt, name='dispatch')
class IndexView(TemplateView):
    permission_classes = []
    authentication_classes = []
    # template_name = 'moretvtime/index.html'
    template_name = 'moretvtime/pages/article_tag.html'

    def get_context_data(self):
        request = self.request
        context = super(IndexView, self).get_context_data()
        country = get_client_country(request)
        category = Category.objects.filter(order=1).first()
        sign = request.COOKIES.get(COOKIE_NAME)
        tracker = Tracking.objects.filter(sign=sign).first()
        if tracker != None:
            parents = special_cat
        else:
            parents = Category.objects.filter(parent=category.id)

        category_articles = Article.objects.filter(category__in=parents, order=1).order_by('-created')
        first_article = category_articles.select_related('category').first()

        context['category'] = category
        context['aData'] = category_articles.exclude(id=first_article.id)
        context['first_article'] = first_article
        context['country'] = country

        if request.POST and check_signature(request):
            track = Tracking.get_tracker(request)

            # Magic that allow to get last call for popup and swagbucks postMessage api
            if track and track.turn_views + 1 >= track.turn_views_limit:
                logger.info('{0} - {1} - {2}'.format(track.provider, track.sub_id, track.views))
                context['submit_success'] = True

        if request.GET and request.GET.get('is_vpn'):
            context['is_vpn'] = True

        get_client_country(self.request)
        return context

    def get(self, request, *args, **kwargs):
        response = super(IndexView, self).get(request, *args, **kwargs)

        # Tracking
        subid = request.GET.get('subid')
        sub_id = request.GET.get('sub_id')
        p_name = request.GET.get('provider')
        crypto_provider = request.GET.get('crypto-provider')
        native_provider = request.GET.get('native-provider')
        crypto_advertising = request.GET.get('crypto-advertising')
        provider_name = crypto_provider or crypto_advertising or p_name or native_provider

        if crypto_advertising or crypto_provider:
            request.session['redirect_message'] = 'cryptoprovider'
            request.session['provider_value'] = provider_name

        provider_name_crypto = ''
        if crypto_provider:
            provider_name_crypto = "crypto-provider"
            request.session['provider_name'] = provider_name_crypto

        if crypto_advertising:
            provider_name_crypto = "crypto-advertising"
            request.session['provider_name'] = provider_name_crypto

        compaign = request.GET.get('compaign') or request.GET.get('tid')
        count = request.GET.get('count') or 50

        if provider_name and not sub_id:
            users_count = Tracking.objects.all().count()
            sub_id = hashlib.sha256(str(users_count).encode('utf-8')).hexdigest()

        if subid or sub_id:
            turn_views_limit = 5
            provider = Provider.objects.filter(name=provider_name).first()
            if provider:
                count = provider.impression_limit
                turn_views_limit = provider.views_per_impression

            track = Tracking(
                date=timezone.now(),
                provider=provider_name,
                sub_id=subid or sub_id,
                compaign=compaign,
                ip=get_client_ip(request),
                views_limit=count,
                turn_views_limit=turn_views_limit,
                country=get_client_country(request),
                extra1=request.GET.get('extra1') or provider_name_crypto,
                extra2=request.GET.get('extra2') or '',
                extra3=request.GET.get('extra3') or '',
                extra4=request.GET.get('extra4') or '',
                extra5=request.GET.get('extra5') or ''
            )

            track_json = json.dumps(TrackingSerializer(track).data)
            track.sign = hashlib.sha256((str(track_json) + COOKIE_HASH).encode('utf-8')).hexdigest()
            track.save()

            # Hack to translate any redirect messages instead of URL query

            response = HttpResponseRedirect('/')

            response.set_cookie(COOKIE_NAME, track.sign, httponly=True)

        return response


@method_decorator(csrf_exempt, name='dispatch')
class LoginView(TemplateView):
    permission_classes = []
    authentication_classes = []
    template_name = 'moretvtime/pages/login.html'

    def get_context_data(self):
        context = super(LoginView, self).get_context_data()
        request = self.request

        if request.method != 'POST':
            return context

        login = str.split(request.POST.get('login', ''), ':')

        if len(login) < 2:
            context['error'] = 'Wrong login provided'
            return context

        provider = Provider.objects.filter(name=login[0]).first()

        if not provider:
            context['error'] = 'Wrong login provided'
            return context

    def post(self, request, *args, **kwargs):
        response = super(LoginView, self).get(request, *args, **kwargs)

        login = str.split(request.POST.get('login', ''), ':')

        if len(login) < 2:
            return response

        provider = Provider.objects.filter(name=login[0]).first()

        if not provider:
            return response

        sub_id = login[1]
        return HttpResponseRedirect('/?provider={0}&sub_id={1}'.format(provider, sub_id))


class ArticletagView(TemplateView):
    template_name = 'moretvtime/pages/article_tag.html'

    def get_context_data(self, category_id, article_url):
        context = super(ArticletagView, self).get_context_data()
        category = Category.objects.filter(id=category_id).first()
        ip = get_client_ip(self.request)
        country = get_client_country(self.request)
        logger.info('[ArticletagView] {0} Request - {1}'.format(ip, str('category')))

        sign = self.request.COOKIES.get(COOKIE_NAME)
        tracker = Tracking.objects.filter(sign=sign).first()

        if category:
            parent = Category.objects.filter(parent=category.parent.id)
            all_child = [y.id for y in parent]
            if tracker:
                all_child = [33, 34]

            articleData = Article.objects.filter(category_id__in=all_child, order=1).exclude(
                url=article_url).select_related('category')
            first_article = Article.objects.filter(url=article_url).select_related('category').first()


            context['aData'] = articleData
            context['first_article'] = first_article
            context['category'] = category.parent
            context['country'] = country


        else:
            context['redirect'] = '/'

        return context


@method_decorator(csrf_exempt, name='dispatch')
class SubmitView(TemplateView):
    permission_classes = []
    authentication_classes = []
    template_name = 'moretvtime/index.html'

    @csrf_exempt
    def post(self, request, *args, **kwargs):

        category_queryset = list(Category.objects.filter(order=1))

        next_article_a = str("/")
        if category_queryset:
            all_slugs = [x.id for x in category_queryset]
            parent = Category.objects.filter(parent=all_slugs[0])
            all_child = [y.id for y in parent]
            articleData = {}
            j = 0
            for z in range(len(all_child)):
                articleData = Article.objects.filter(category_id=all_child[z], order=1).select_related('category')[:1]

                next_article_a = str(all_child[z]) + '/' + articleData[0].category.url + '/' + articleData[0].url

        next_article = next_article_a
        # logger.info('next article: ' + str(next_article))
        response = HttpResponseRedirect(next_article)

        if check_signature(request):
            logger.info('[POST Tracking] DONE ' + str(request.POST))

            userNextUrl = request.POST.get('nextUrl')
            if userNextUrl:
                response = HttpResponseRedirect(userNextUrl)

            track = Tracking.get_tracker(request)
            if track.turn_views + 1 < track.turn_views_limit:
                track.turn_views = track.turn_views + 1
                track.save()
                logger.info('[POST Tracking] TURN VIEWS UPDATE {0} - {1}'.format(track.sub_id, track.turn_views))
                return response

            ip = get_client_ip(request)
            if Tracking.is_often_send_postback(ip, provider=track.provider):
                return HttpResponseRedirect((userNextUrl or next_article) + '?ot=true')

            new_sign = submit(request, track=track)
            if new_sign:
                # if track.provider == 'swagbucks':
                # response = super(IndexView, self).get(request, *args, **kwargs)
                if track.extra1 == 'crypto-provider' or track.extra1 == 'crypto-advertising':
                    response = HttpResponseRedirect((userNextUrl or next_article))
                else:
                    response = HttpResponseRedirect((userNextUrl or next_article) + '?submit_success=true')

                response.set_cookie(COOKIE_NAME, new_sign.sign, httponly=True)
                logger.info('[POST Tracking] SET NEW SIGN' + str(request.POST))
            else:
                logger.error('[POST Tracking] WRONG SIGN {0} - {1} - {2}'.format(request.POST.get('token'),
                                                                                 request.POST.get('uuid'),
                                                                                 request.POST.get('provider')))
        else:
            logger.error(
                '[POST Tracking] ERROR {0} - {1} - {2}'.format(request.POST.get('token'), request.POST.get('uuid'),
                                                               request.POST.get('provider')))

        logger.info('[POST Tracking] REDIRECT TO ' + str(next_article))
        return response


def submit(request, app=None, track=None):
    resp = None
    sign = request.COOKIES.get(COOKIE_NAME)
    logger.info('[Submit Tracking] {0} -- {1}'.format(sign, request))

    track = track or Tracking.objects.filter(sign=sign).order_by('-date').first()
    new_track = None

    if track and track.sent:
        logger.error('[Submit Tracking] ALREADY SENT {0} -- {1}'.format(sign, request))
        return generate_new_track(track, request)

    if track and not track.sent \
            and (timezone.now() > (track.date + timedelta(seconds=20))) \
            and (timezone.now() > (track.last_view_date + timedelta(seconds=20))):

        # Up counter
        track.views = track.views + 1
        track.turn_views = track.turn_views + 1
        track.last_view_date = timezone.now()
        track.save()

        if track.user_reached_daily_limit():
            logger.info('[user_reached_daily_limit] ip:{0} sub_id:{1} provider:{2}'.format(track.ip, track.sub_id,
                                                                                           track.provider))

        elif can_track(track.views, track.views_limit):

            provider = Provider.objects.filter(name=track.provider).first()

            if provider:
                # Some providers has postback only after last impression
                if provider.postback_after_all_impressions and track.views < provider.impression_limit:
                    logger.info('[POSTBACK] postback_after_limit {0} - {1}'.format(track, provider))
                    pass
                else:
                    # Some providers have postback made right from JS code
                    if provider.postback_url:
                        data = track.__dict__
                        price = provider.impression_price
                        data['price'] = price

                        if provider.name == 'test':
                            logger.info('[Tracking] TEST - postback sent')
                            resp = True
                        else:
                            logger.info(
                                ('[Tracking] pre_sent {provider} -- ' + provider.postback_url.format(**data)).format(
                                    provider=provider.name))
                            resp = requests.get(provider.postback_url.format(**data))
                            logger.info('[Tracking] sent {0} {1}'.format(track.provider, str(resp)))
                    # After each impression creating new session
                    new_track = generate_new_track(track, request)

                chkcompany = SendMoney.objects.filter(companyname=track.provider).first()
                if chkcompany:
                    faucethubpostback(track.provider, track.sub_id, track.ip)
                    logger.info('[faucethubpostback] - postback sent')


    else:
        logger.error('[Submit Tracking] WRONG DATE {0} -- {1}'.format(sign, request))

    if resp:
        logger.info('[Tracking] sent {country} {provider} -- {sub_id} - #{views} - -- {date}'.format(**track.__dict__))

        track.sent = True
        track.save()

    return new_track


def can_track(views, limit):
    if limit > 1:
        return views <= limit
    return True


def generate_new_track(track, request):
    new_track = Tracking(
        date=timezone.now(),
        provider=track.provider,
        sub_id=track.sub_id,
        ip=get_client_ip(request),
        views=track.views,
        views_limit=track.views_limit,
        turn_views_limit=track.turn_views_limit,
        prev_sign=track.sign,
        extra1=track.extra1
    )
    track_json = json.dumps(TrackingSerializer(new_track).data)
    new_track.sign = hashlib.sha256((str(track_json) + COOKIE_HASH).encode('utf-8')).hexdigest()
    new_track.save()
    return new_track


# paylatter for facuethub
def faucethubpostback(provider, sub_id, ip):
    pl_faucethub = PayLatterFaucetHub()
    pl_faucethub.companyname = provider
    pl_faucethub.sub_id = sub_id
    pl_faucethub.ip = ip
    try:
        pl_faucethub.save()

    except DatabaseError as e:
        log.error('Problem when saving PayLatterFaucetHub')


class CategoryView(TemplateView):
    template_name = 'moretvtime/pages/category.html'

    def get_context_data(self, category):
        context = super(CategoryView, self).get_context_data()
        category = Category.objects.filter(url=str.replace(category, '/', '')).first()
        ip = get_client_ip(self.request)

        logger.info('[CategoryView] {0} Request - {1}'.format(ip, str('category')))

        if category:
            parent = Category.objects.filter(parent=category.id)
            all_child = [y.id for y in parent]
            articleData = Article.objects.filter(category_id__in=all_child, order=1).select_related('category')
            context['aData'] = articleData
            context['category'] = category

        else:
            context['redirect'] = '/'

        return context


class Popunder(TemplateView):
    template_name = 'ads/popunder/popunder.html'

    def get_context_data(self):
        context = super(Popunder, self).get_context_data()

        tracker = Tracking.get_tracker(self.request)

        context['popunder'] = Popunder.get_popunder(self.request, tracker)
        return context

    @classmethod
    def get_popunder(cls, request=None, tracker=None):
        show_mc = False
        show_popunder = True

        sites = [
            'https://eecd179r3b.com/c8yubbig1?key=38fa438bfa8e39d8bbbda5223568081b',
            # 'https://rotumal.com/4/2139625/',
            # 'http://xml.ezmob.com/redirect?feed=103302&auth=eyc19g',
            # 'http://www.theadgateway.com/jump/next.php?r=2199711',
        ]
        mc_site = 'https://minglecash.com'

        if tracker:
            if not tracker.last_mc_view_date or (tracker.last_mc_view_date < timezone.now() - timedelta(hours=1)):
                tracker.last_mc_view_date = timezone.now()
                tracker.save()
                show_mc = True
                logger.info('[Popunder] show MC for ' + str(tracker.sub_id))

            if is_mobile(request):
                if tracker.last_popunder_view_date:
                    show_popunder = False

        site = mc_site if show_mc else secure_random.choice(sites)

        return site if show_popunder else None


@api_view(['POST'])
def popunder_seen(request):
    tracker = Tracking.get_tracker(request)
    if tracker:
        logger.info('[Popunder] user seen mobile popunder ' + str(tracker.sub_id))
        tracker.last_popunder_view_date = timezone.now()
        tracker.save()
    return HttpResponse()


@api_view(['GET'])
def analytics(request):
    return JsonResponse({})


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def solvemedia_solve(request):
    solved = solve_media.check_answer(get_client_ip(request), request.data.get('challenge'),
                                      request.data.get('response'))
    return JsonResponse({
        'success': solved
    })


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def solvemedia_solve(request):
    solved = solve_media.check_answer(get_client_ip(request), request.data.get('challenge'),
                                      request.data.get('response'))
    return JsonResponse({
        'success': solved
    })


class ArticleTemplateResponse(TemplateResponse):
    PLACEHOLDER_TEMPLATE = '''
        <div id="ph-{0}">
            <div id="ph-{0}-ba1" class="mtt-placeholder">{1}</div>
            <div id="ph-{0}-ba2" class="mtt-placeholder">{2}</div>
            <div id="ph-{0}-bt"></div>
            <div id="ph-{0}-bb1" class="mtt-placeholder">{3}</div>
            <div id="ph-{0}-bb2" class="mtt-placeholder">{4}</div>
        </div>
        '''

    @property
    def rendered_content(self):
        template = self.resolve_template(self.template_name)
        context = self.resolve_context(self.context_data)
        content = template.render(context, self._request)

        request = self._request
        article = context.get('article')
        tracker = Tracking.get_tracker(request)

        # In Article DOM injecting (for providers that can't be async injected)
        if article and tracker or Tracking.get_mc_session(request):
            bs_content = BeautifulSoup(content)
            placeholders = BannerPlaceholder.get_placeholders(request, tracker)

            js_placeholders = []
            for ph in placeholders:
                bs_content, inserted = self.insert_to_article(
                    bs_content,
                    ph.paragraph_number,
                    ph.selector,
                    ph.insert_before,
                    self.PLACEHOLDER_TEMPLATE.format(
                        ph.order,
                        self.insert_banner(ph.banner_above_button_1),
                        self.insert_banner(ph.banner_above_button_2),
                        self.insert_banner(ph.banner_below_button_1),
                        self.insert_banner(ph.banner_below_button_2)
                    ))
                if inserted:
                    js_placeholders.append(ph)
            content = str(bs_content)

        return content

    def insert_banner(self, banner):
        return banner.code if (banner and banner.is_static) else ''

    def insert_to_article(self, article, position, selector, insert_before, html):
        if selector:
            placement = article.select(selector)
            if len(placement):
                if insert_before:
                    placement[0].insert_before(BeautifulSoup(html, 'html.parser'))
                else:
                    placement[0].append(BeautifulSoup(html, 'html.parser'))
                return article, True
        else:
            all_p = article.select('article')
            all_p = all_p[0].find_all('p') if all_p else article.find_all('p')
            if position < len(all_p):
                if insert_before:
                    all_p[position].insert_before(BeautifulSoup(html, 'html.parser'))
                else:
                    all_p[position].append(BeautifulSoup(html, 'html.parser'))
                return article, True
        return article, False


class ArticleView(TemplateView):
    template_name = 'moretvtime/pages/article.html'

    response_class = ArticleTemplateResponse

    def get_context_data(self, category_id, category_name, url):
        context = super(ArticleView, self).get_context_data()
        request = self.request
        article_url = '{0}/{1}/{2}'.format(category_id, category_name, url)
        ip = get_client_ip(self.request)
        tracker = Tracking.get_tracker(self.request)
        all_article = ALL_PUBLIC_ARTICLES if tracker else ALL_ARTICLES
        recomended_article = RECOMMENDED_PUBLIC_ARTICLE if tracker else RECOMMENDED_ARTICLE
        all_article_count = ALL_PUBLIC_ARTICLES_COUNT if tracker else ALL_ARTICLES_COUNT
        all_article_count_category = ALL_PUBLIC_ARTICLES_COUNT_BY_CATEGORY if tracker else ALL_ARTICLES_COUNT_BY_CATEGORY

        if article_url not in all_article:
            return HttpResponseRedirect('/')

        # Check captcha conditions
        if tracker and CaptchaTrigger.show_captcha(ip):
            solved = True
            if self.request.method == 'POST':
                solved = Captcha.solve(request.POST.get('uuid'), request.POST.get('solution'), ip)

                if solved:
                    tracker.captcha_solved = True
                    tracker.save()
                else:
                    context['captcha_wrong'] = True
            else:
                solved = False

            if not solved:
                uuid, image = Captcha.get_image(ip)
                context['captcha_uuid'] = uuid
                context['captcha_image'] = image
                context['article_url'] = article_url
                self.template_name = 'moretvtime/pages/captcha.html'
                return context

        # Current Article
        articleData = Article.objects.filter(url=url, category_id=category_id).select_related('category').first()

        context['Recomendedarticle'] = recomended_article

        # Article navigation buttons
        article_index = all_article.index(article_url)

        if article_index == all_article_count - 1:
            article_index = -1

        if article_index or article_index == 0:
            context['prev_url'] = all_article[article_index - 1]
        if article_index or article_index == 0:
            context['next_url'] = all_article[article_index + 1]

        context['data'] = articleData
        context['article'] = articleData
        context['all_article_count'] = all_article_count_category.get(category_id, 0)
        context['rest_of_article'] = Article.objects.filter(category_id=category_id).exclude(
            url=articleData.url).order_by('order')

        # Banners
        banners = {}
        for banner in Banner.objects.filter(
                name__in=['bottom', 'bottomiframe', 'middle', 'side', 'bottomvideobanner', 'Video-player - mobile']):
            banners[banner.name] = banner.code
        context['banners'] = banners

        if not tracker:
            public_banner = Banner.objects.filter(is_public=True).exclude(is_mobile=not is_mobile(request)).order_by(
                'public_order')
            if public_banner:
                context['public_banners'] = public_banner

        return context

    def post(self, request, *args, **kwargs):
        return super(ArticleView, self).get(request, *args, **kwargs)


class TrackerJsView(TemplateView):
    template_name = 'moretvtime/js/tracker.js'

    def get_context_data(self):
        context = super(TrackerJsView, self).get_context_data()

        tracker = Tracking.get_tracker(self.request)
        context['placeholders'] = json.dumps(
            BannerPlaceholderSerializer(BannerPlaceholder.get_placeholders(self.request, tracker), many=True).data)
        return context

    def get(self, request, *args, **kwargs):
        response = super(TrackerJsView, self).get(request, *args, **kwargs)
        response['Content-type'] = 'text/javascript;charset=UTF-8'
        return response


@api_view(['GET'])
def banner_placeholders(request):
    tracker = Tracking.get_tracker(request)

    if tracker or Tracking.get_mc_session(request):
        data = BannerPlaceholderSerializer(BannerPlaceholder.get_placeholders(request, tracker), many=True).data
        print(data)
        return JsonResponse(data, safe=False)
    return JsonResponse({})


@csrf_exempt
def about(request):
    context = {}
    page = Page.objects.filter(pagerole='about')
    if page.count() != 0:
        context['page'] = page
    return render(request, 'moretvtime/pages/pages.html', context)


@csrf_exempt
def term(request):
    context = {}
    page = Page.objects.filter(pagerole='term')
    if page.count() != 0:
        context['page'] = page
    return render(request, 'moretvtime/pages/pages.html', context)


@csrf_exempt
def privacy(request):
    context = {}
    page = Page.objects.filter(pagerole='privacy')
    if page.count() != 0:
        context['page'] = page
    return render(request, 'moretvtime/pages/pages.html', context)


@csrf_exempt
def contact(request):
    context = {}
    page = Page.objects.filter(pagerole='contact')
    if page.count() != 0:
        context['page'] = page
    return render(request, 'moretvtime/pages/pages.html', context)


@csrf_exempt
def VideoTestView(request):
    context = {}
    return render(request, 'moretvtime/pages/video-test.html', context)
