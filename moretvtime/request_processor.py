import logging

from django.contrib.sites.models import Site

from django_server.utils import is_vpn, get_client_ip, is_mobile, get_client_country, create_signature
from moretvtime.models import Category, Tracking
from dashboard.models import Widget, Site, Revenue
from moretvtime.views import COOKIE_NAME, Popunder
from django.db.models import Sum
from django.contrib.auth.models import AnonymousUser

logger = logging.getLogger(__name__)

apps = {
    'moretvtime': 'More Tv Time',
    'pranksforu': 'Pranks For You',
    'funnypranks': 'Funny Pranks',
    'youlovepranks': 'You Love Pranks',
}


def categories(request):
    # Constant info about categories for each page
    context = {

    }

    app_name = request.resolver_match.app_name
    context['app_name'] = app_name
    context['app_title'] = apps.get(app_name)
    context['server_name'] = request.META['HTTP_HOST']

    user = request.user
    if isinstance(user, AnonymousUser):
        user = None

    if user:
        site = Site.objects.filter(user=request.user)
        all_sites = [y.id for y in site]

        if site:
            widget = Widget.objects.filter(site__in=all_sites)
            all_widget = [y.wid for y in widget]
            revenu_total_t = Revenue.objects.filter(companyname__in=all_widget).aggregate(totalmoney=Sum('totalmoney'))
            context['revenu_total_t'] = revenu_total_t

    categories = Category.objects.filter(application=app_name, enabled=True, parent_id=None).order_by('order')
    context['categories'] = categories
    context['category_all'] = categories

    # Tracking
    sub_id = request.GET.get('sub_id')
    provider = request.GET.get('provider')
    count = request.GET.get('count')
    sign = request.COOKIES.get(COOKIE_NAME)

    is_using_vpn = False

    if sub_id and provider:
        context['show_tracker'] = True
        context['show_banners'] = True
        context['show_popunder'] = False
        context['provider'] = provider
    elif sign:
        tracker = Tracking.objects.filter(sign=sign).first()
        if tracker != None:

            if tracker.provider in ['mctestprovider', 'test', 'superrewards', 'offerdaddy', 'offerwall', 'acorn',
                                    'cpalead']:
                context['show_mc_popunder'] = True
                context['show_mc_banner'] = True

            if tracker.user_reached_daily_limit():
                context['daily_limit'] = True
                context['show_banners'] = True
                logger.info(
                    '[user_reached_daily_limit] ip:{0} sub_id:{1} provider:{2}'.format(tracker.ip, tracker.sub_id,
                                                                                       tracker.provider))
            else:
                left = tracker.views_limit - tracker.views - 1
                context['tracker'] = tracker
                context['views_count'] = tracker.views
                context['views_limit'] = tracker.views_limit
                context['views_left'] = left if left > 0 else 0
                context['views_count_next'] = tracker.views + 1
                if left >= 0:
                    context['show_tracker'] = True
                    context['show_banners'] = True
                    context['show_popunder'] = False
                    context['popunder'] = Popunder.get_popunder(request=request, tracker=tracker)
                    context['client_country'] = get_client_country(request)
                    context['signature'] = create_signature(tracker.sign, tracker.provider)
                else:
                    context['show_tracker'] = False
                    context['show_banners'] = False
                    context['show_popunder'] = False
                    context['daily_limit'] = True
                    context['views_limit'] = tracker.views_limit
                    logger.info(
                        '[user_reached_daily_limit] ip:{0} sub_id:{1} provider:{2}'.format(tracker.ip, tracker.sub_id,
                                                                                           tracker.provider))

                context['provider'] = tracker.provider
                context['provider_name'] = tracker.extra1

                if tracker.sub_id == 'test':
                    context['test_user'] = True

    if request.COOKIES.get('mcuuid'):
        context['show_banners'] = True

    if app_name != 'moretvtime':
        context['show_tracker'] = False
        context['show_banners'] = False
        context['show_popunder'] = False

    if is_mobile(request):
        context['is_mobile'] = True

    is_test_page = request.GET.get('is_test') == 'true'
    if is_test_page:
        context['is_test_page'] = True

    is_test_page1 = request.GET.get('is_test1') == 'true'
    if is_test_page1:
        context['is_test_page1'] = True

    is_test_page2 = request.GET.get('is_test2') == 'true'
    if is_test_page2:
        context['is_test_page2'] = True

    # Hack to translate any redirect messages instead of URL query
    redirect_message = request.session.get('redirect_message')
    provider_value = request.session.get('provider_value')
    provider_name = request.session.get('provider_name')
    if redirect_message or redirect_message:
        request.session['redirect_message'] = ''
        context['redirect_message'] = redirect_message
        context['provider_value'] = provider_value
        context['provider_name'] = provider_name
    return context
