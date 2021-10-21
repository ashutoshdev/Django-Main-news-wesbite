import logging
from django.views.generic import TemplateView
from dashboard.models import Page
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from dashboard.forms import SignUpForm
from django.shortcuts import render
from moretvtime.models import Article, Category
from tracking.models import ReferrerCompany, ReferrerCountry
from dashboard.models import Widget, Site, Support, Message, Paypal, Epayment, Payoneer, Webmoney, RfCompany, \
    DashboardCompany, Revenue
from django.core import serializers
import hashlib
import random
import string
from django.contrib.auth.models import User
import uuid
from django.contrib.auth import authenticate, login
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from datetime import datetime, timedelta, time
from django.db import models
from django.db.models import Func
from django.db.models import Sum
from django.contrib.auth import logout

logger = logging.getLogger(__name__)


def logredirect():
    login_url = 'login'
    redirect_field_name = 'login'


class IndexView(TemplateView):
    template_name = 'dashboard/index.html'


class AboutView(TemplateView):
    template_name = 'dashboard/pages/about.html'

    def get_context_data(self):
        context = super(AboutView, self).get_context_data()
        page = Page.objects.filter(pagerole='about').values()
        logger.info('[AboutView] Request - {0}'.format(str('page')))
        if page:
            context['PageData'] = page
        else:
            logger.error('[AboutView] no pages')

        return context


class FaqView(TemplateView):
    template_name = 'dashboard/pages/faq.html'

    def get_context_data(self):
        context = super(FaqView, self).get_context_data()
        page = Page.objects.filter(pagerole='faq').values()
        logger.info('[FaqView] Request - {0}'.format(str('page')))
        if page:
            context['PageData'] = page
        else:
            logger.error('[FaqView] no pages')
        return context


def register(request):
    register = False
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            r = form.save()
            User.objects.filter(id=r.id).update(username=uuid.uuid4().hex[:30])
            logger.info('[register] Request - {0}'.format(str('register')))
            register = True
    else:
        form = SignUpForm()
    return render(request, 'dashboard/pages/signup.html', {'form': form, 'register': register})


def signin(request):
    template_name = 'dashboard/pages/signin.html'
    context = {}
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        usr = User.objects.filter(email=email).first()
        if usr:
            user = authenticate(username=usr.username, password=password)
            if not user:
                context['error'] = "Wrong Username && Password"

            else:
                if user is not None:
                    if user.is_active:
                        login(request, user)
                        return HttpResponseRedirect('members')
        else:
            context['error'] = "Wrong Username && Password"

    else:
        logger.error('[Signin ] Wrong request method')

    return render(request, template_name, context)


class ForgotPasswordView(TemplateView):
    template_name = 'dashboard/pages/forgotpassword.html'


class MembersView(LoginRequiredMixin, TemplateView):
    logredirect()
    template_name = 'dashboard/members_index.html'

    def get_context_data(self):
        request = self.request
        context = super(MembersView, self).get_context_data()
        today = datetime.now().date()
        yesterday = datetime.now().date() - timedelta(1)
        site = Site.objects.filter(user=request.user)
        all_sites = [y.id for y in site]
        if site:
            widget = Widget.objects.filter(site__in=all_sites)
            all_widget = [y.wid for y in widget]
            rfcompany_today = DashboardCompany.objects.filter(companyname__in=all_widget, date=today) \
                .annotate(m=Month('date')) \
                .values('m') \
                .annotate(total=Sum('bannerloads')) \
                .order_by()
            rfcompany_yesterday = DashboardCompany.objects.filter(companyname__in=all_widget, date=yesterday) \
                .annotate(m=Month('date')) \
                .values('m') \
                .annotate(total=Sum('bannerloads')) \
                .order_by()

            revenu_today = Revenue.objects.filter(companyname__in=all_widget, date=today) \
                .values('date') \
                .annotate(totalmoney=Sum('totalmoney')) \
                .order_by('-date')

            revenu_yesterday = Revenue.objects.filter(companyname__in=all_widget, date=yesterday) \
                .values('date') \
                .annotate(totalmoney=Sum('totalmoney')) \
                .order_by('-date')

            if rfcompany_today:
                for s in rfcompany_today:
                    context['today'] = s['total']
            else:
                context['today'] = 0

            if rfcompany_yesterday:
                for s in rfcompany_yesterday:
                    context['yesterday'] = s['total']
            else:
                context['yesterday'] = 0

            if revenu_today:
                for s in revenu_today:
                    context['r_today'] = s['totalmoney']
            else:
                context['r_today'] = 0

            if revenu_yesterday:
                for s in revenu_yesterday:
                    context['r_yesterday'] = s['totalmoney']
            else:
                context['r_yesterday'] = 0

            return context


class AddSiteView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/addsite.html'

    def post(self, request, *args, **kwargs):
        Site(
            name=request.POST['name'],
            webaddress=request.POST['webaddress'],
            websitelanguage=request.POST['websitelanguage'],
            websitetraffic=request.POST['websitetraffic'],
            site_status='Approved',
            user=request.user
        ).save()
        logger.info('[AddSiteView] Request - {0}'.format(str('site')))
        return HttpResponseRedirect('sites')


class PaymentView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/payment.html'


class SupportView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/support.html'

    def get_context_data(self):
        request = self.request
        context = super(SupportView, self).get_context_data()
        support = Support.objects.filter(user=request.user).values()
        logger.info('[SitesSupportViewView] Request - {0}'.format(str('support')))
        if support:
            context['SupportView'] = support
        else:
            logger.error('[SupportView] no data')

        return context


class SitesView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/sites.html'

    def get_context_data(self):
        request = self.request
        context = super(SitesView, self).get_context_data()
        site = Site.objects.filter(user=request.user).values()
        logger.info('[SitesView] Request - {0}'.format(str('site')))
        if site:
            context['SiteData'] = site
        else:
            logger.error('[SiteData] no data')

        return context


def remove_items(request):
    if request.method == 'POST':
        item_id = int(request.POST.get('item_id'))
        if item_id:
            item = Site.objects.get(id=item_id)
            item.delete()
            logger.info('have item id' + str(item_id))
            return HttpResponseRedirect('sites')
        else:
            logger.error('does have item id')
    else:
        logger.error('Problem when post data')


class StatisticsView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/statistics.html'

    def get_context_data(self):
        request = self.request
        context = super(StatisticsView, self).get_context_data()
        site = Site.objects.filter(user=request.user)
        # print(site)
        if site:
            all_sites = [y.id for y in site]
            widget = Widget.objects.filter(site__in=all_sites)
            all_widget = [y.wid for y in widget]
            referrercompany = RfCompany.objects.filter(companyname__in=all_widget) \
                .values('date') \
                .annotate(bannerloads=Sum('bannerloads'), clicks=Sum('clicks')) \
                .order_by('-date')
            rfcompany_total = RfCompany.objects.filter(companyname__in=all_widget) \
                .aggregate(bannerloads=Sum('bannerloads'), clicks=Sum('clicks'))

            # print(rfcompany_total)

            if rfcompany_total:
                context['totaldata'] = rfcompany_total

            revenu_total_t = Revenue.objects.filter(companyname__in=all_widget) \
                .aggregate(totalmoney=Sum('totalmoney'))

            revenu_total = Revenue.objects.filter(companyname__in=all_widget) \
                .values('date') \
                .annotate(totalmoney=Sum('totalmoney')) \
                .order_by('-date')

            for idx, item in enumerate(referrercompany):
                revenu_total = revenu_total.filter(date__contains=item['date'])
                if not revenu_total:
                    referrercompany[idx]['totalmoney'] = 0
                else:
                    referrercompany[idx]['totalmoney'] = revenu_total[0]['totalmoney']

            # print (revenu_total)
            # print (referrercompany)

            # print(rfcompany_total)
            context['rdata'] = referrercompany
            context['revenu'] = revenu_total

            context['totalmoney'] = revenu_total_t
            context['from'] = datetime.now().date().strftime("%d.%m.%Y")
            context['widget'] = widget
            context['allsite'] = site
            context['till'] = (datetime.now().date() - timedelta(2)).strftime("%d.%m.%Y")
            logger.info('[StatisticsView] Request - {0}'.format(str('referrercompany')))

        return context

    def post(self, request, *args, **kwargs):
        context = {}
        site_p = request.POST.get('site')
        widget_p = request.POST.get('widget')
        frm = request.POST.get('from')
        till = request.POST.get('till')
        if frm:
            format_str = '%d.%m.%Y'  # The format
            datetime_frm = datetime.strptime(frm, format_str)
            frm_qs = datetime_frm.date()
        else:
            frm_qs = datetime.now().date().strftime("%d.%m.%Y")

        if till:
            format_str = '%d.%m.%Y'  # The format
            datetime_till = datetime.strptime(till, format_str)
            till_qs = datetime_till.date()
        else:
            till_qs = (datetime.now().date() - timedelta(2)).strftime("%d.%m.%Y")

        # print(widget_p)
        # created__lte=today_end, created__gte=today_start,
        if site_p == "0":
            site = Site.objects.filter(user=request.user)

        else:
            site = Site.objects.filter(id=int(site_p))

        all_sites = [y.id for y in site]
        if site:
            if widget_p == "0":
                widget = Widget.objects.filter(site__in=all_sites)
            else:
                widget = Widget.objects.filter(wid=widget_p)

            all_widget = [y.wid for y in widget]

            # print(all_widget)
            referrercompany = RfCompany.objects.filter(companyname__in=all_widget, created__lte=till_qs,
                                                       created__gte=frm_qs) \
                .values('date') \
                .annotate(bannerloads=Sum('bannerloads'), clicks=Sum('clicks')) \
                .order_by('-date')

            rfcompany_total = RfCompany.objects.filter(companyname__in=all_widget, created__lte=till_qs,
                                                       created__gte=frm_qs) \
                .aggregate(bannerloads=Sum('bannerloads'), clicks=Sum('clicks'))

            if rfcompany_total:
                context['totaldata'] = rfcompany_total

            revenu_total_t = Revenue.objects.filter(companyname__in=all_widget, created__lte=till_qs,
                                                    created__gte=frm_qs) \
                .aggregate(totalmoney=Sum('totalmoney'))

            revenu_total = Revenue.objects.filter(companyname__in=all_widget, created__lte=till_qs, created__gte=frm_qs) \
                .values('date') \
                .annotate(totalmoney=Sum('totalmoney')) \
                .order_by('-date')

            for idx, item in enumerate(referrercompany):
                revenu_total = revenu_total.filter(date__contains=item['date'])
                if not revenu_total:
                    referrercompany[idx]['totalmoney'] = 0
                else:
                    referrercompany[idx]['totalmoney'] = revenu_total[0]['totalmoney']
            # print(referrercompany)
            # print(rfcompany_total)
            context['revenu'] = revenu_total
            context['totalmoney'] = revenu_total_t
            context['rdata'] = referrercompany

            context['from'] = datetime.now().date().strftime("%d.%m.%Y")
            s_p = Site.objects.filter(user=request.user)
            all_sites = [y.id for y in s_p]
            w_p = Widget.objects.filter(site__in=all_sites)
            context['allsite'] = s_p
            context['widget'] = w_p
            context['till'] = (datetime.now().date() - timedelta(2)).strftime("%d.%m.%Y")
            logger.info('[StatisticsView] Request - {0}'.format(str('referrercompany')))

        return render(request, self.template_name, context)


class WidgetsView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/widgets.html'

    def get_context_data(self, id):
        context = super(WidgetsView, self).get_context_data()
        widget = Widget.objects.filter(site=id).values()
        logger.info('[AddWidgetView] Request - {0}'.format(str('widget')))
        context['WidgetID'] = id
        if widget:
            context['WidgetData'] = widget

        else:
            logger.error('[WidgetData] no data')

        return context


class AddWidgetView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/addwidget.html'

    def get_context_data(self, id, wid):
        context = super(AddWidgetView, self).get_context_data()
        logger.info('[AddWidgetView] Request - {0}'.format(str('context')))
        if id and wid:
            context['SiteID'] = id
            context['WidgetID'] = wid
        else:
            logger.error('[AddWidgetView] no data')

        return context


class EditWidgetView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/addwidget.html'

    def get_context_data(self, id, wid):
        context = super(EditWidgetView, self).get_context_data()
        logger.info('[EditWidgetView] Request - {0}'.format(str('context')))
        if id and wid:
            context['SiteID'] = id
            context['WidgetID'] = wid
        else:
            logger.error('[EditWidgetView] no data')

        return context


def remove_widget_items(request):
    if request.method == 'POST':
        w_id = int(request.POST.get('wid_id'))
        item_id = int(request.POST.get('item_id'))
        if w_id and item_id:
            item = Widget.objects.get(id=item_id)
            item.delete()
            logger.info('[Widget] removed ' + str(item_id))
            return HttpResponseRedirect('widgets/' + str(w_id))
        else:
            logger.error('not w_id and item_id')

    else:
        logger.error('Problem when post data')


@csrf_exempt
@api_view(['POST'])
def widget_view(request):
    res = {}
    if request.method == 'POST':
        limit = request.POST.get('limit', None)
        # print(limit)
        category = Category.objects.filter(order=1).first()
        parent = Category.objects.filter(parent=category.id)
        all_child = [y.id for y in parent]
        articleData = Article.objects.filter(category_id__in=all_child).select_related('category')[:int(limit)]
        # print(articleData)
        if articleData.count() != 0:
            res = articleData
        else:
            logger.error('[WidgetView] no article')
    else:
        logger.error('[WidgetView] Wrong request method')

    posts_serialized = serializers.serialize('json', res)
    return JsonResponse(posts_serialized, safe=False)


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def widget_view_client(request):
    response = {}
    if request.method == 'POST':
        provider = request.data.get('provider', None)
        widget = Widget.objects.filter(wid=provider).first()
        limit = int(widget.rows) * int(widget.column)
        category = Category.objects.filter(order=1).first()
        parent = Category.objects.filter(parent=category.id)
        all_child = [y.id for y in parent]
        articleData = Article.objects.filter(category_id__in=all_child).select_related('category')[:int(limit)]
        if articleData.count() != 0:
            response = articleData
        else:
            logger.error('[widget_view_client] no article')
    else:
        logger.error('[widget_view_client] Wrong request method')

    posts_serialized = serializers.serialize('json', response)
    return JsonResponse(posts_serialized, safe=False)


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def widget_view_loads(request):
    response = {}
    if request.method == 'POST':
        provider = request.data.get('provider', None)
        widget = Widget.objects.filter(wid=provider)
        if widget:
            response = widget
        else:
            logger.error('[widget_view_loads] no article')
    else:
        logger.error('[widget_view_loads] Wrong request method')

    posts_serialized = serializers.serialize('json', response)
    return JsonResponse(posts_serialized, safe=False)


@csrf_exempt
def add_widget_data_view(request):
    if request.method == 'POST':
        wid = request.POST.get('wid', None)
        widget, _ = Widget.objects.get_or_create(
            wid=wid
        )
        widget.name = request.POST.get('name', None)
        widget.widgettitle = request.POST.get('widgettitle', None)
        widget.type = request.POST.get('type', None)
        widget.subtype = request.POST.get('subtype', None)
        widget.column = request.POST.get('column', None)
        widget.rows = request.POST.get('rows', None)
        widget.css = request.POST.get('css', None)
        widget.site_id = request.POST.get('sid', None)
        if wid == 'wid':
            widget.wid = hashlib.sha256(str(widget.widgettitle + widget.name + widget.css + random.choice(
                string.ascii_uppercase + string.digits)).encode('utf-8')).hexdigest()
            widget_unqId = widget.wid
        else:
            widget_unqId = wid

        if widget:
            widget.save()
            res = widget_unqId
            logger.info('[addWidgetDataView] {0} Request - {1}'.format(widget, str('widget')))
        else:
            logger.error('[addWidgetDataView] no widget')
    else:
        logger.error('[addWidgetDataView] Wrong request method')

    return JsonResponse(res, safe=False)


class ContactManagerView(LoginRequiredMixin, TemplateView):
    logredirect()
    template_name = 'dashboard/members/contactmanager.html'

    def post(self, request, *args, **kwargs):
        support = Support.objects.create(
            priority=request.POST['priority_id'],
            subject=request.POST['subject'],
            status='Under Review',
            user=request.user,
        )
        support.save()
        if support:
            Message(
                support=support,
                text=request.POST['text'],

            ).save()
        logger.info('[ContactManagerView] Request - {0}'.format(str('site')))
        return HttpResponseRedirect('support')


class MessageView(LoginRequiredMixin, TemplateView):
    template_name = 'dashboard/members/message.html'

    def get_context_data(self, id):
        context = super(MessageView, self).get_context_data()
        support = Message.objects.filter(support=id).values()
        logger.info('[MessageView] Request - {0}'.format(str('support')))
        if support:
            context['MessageView'] = support
            context['Supportid'] = id
        else:
            logger.error('[MessageView] no data')

        return context

    def post(self, request, *args, **kwargs):
        sid = request.POST['sid']
        Message(
            support_id=sid,
            addedby='User',
            text=request.POST['text'],

        ).save()
        logger.info('[MessageView] Request - {0}'.format(str('message')))
        return HttpResponseRedirect('/dashboard/message/' + sid)


class ProfileView(LoginRequiredMixin, TemplateView):
    logredirect()
    template_name = 'dashboard/members/profile.html'

    def post(self, request, *args, **kwargs):
        context = {}
        email = request.user.email
        password = request.POST.get('password')
        usr = User.objects.filter(email=email).first()
        user = authenticate(username=usr.username, password=password)
        if not user:
            context['status'] = "Wrong Password"
        else:
            if user is not None:
                if user.is_active:
                    type = request.POST.get('type')
                    if type == 'paypal':
                        Paypal(
                            type=request.POST.get('type'),
                            currency=request.POST.get('currency'),
                            country=request.POST.get('country'),
                            paymentthreshold=request.POST.get('paymentthreshold'),
                            payeename=request.POST.get('payeename'),
                            paypalemail=request.POST.get('paypalemail'),
                            payeephone=request.POST.get('payeephone'),
                            payeeaddress=request.POST.get('payeeaddress'),
                            user=request.user,
                        ).save()
                        context['status'] = "Paypal Informtion updated"
                        logger.info('[ProfileView] Request - {0}'.format(str('paypal')))
                    elif type == 'webmoney':
                        Webmoney(
                            type=request.POST.get('type'),
                            currency=request.POST.get('currency'),
                            paymentthreshold=request.POST.get('paymentthreshold'),
                            wmz=request.POST.get('wmz'),
                            user=request.user,
                        ).save()
                        context['status'] = "Webmoney Informtion updated"
                        logger.info('[ProfileView] Request - {0}'.format(str('webmoney')))

                    elif type == 'Epayment':
                        Epayment(
                            type=request.POST.get('type'),
                            paymentthreshold=request.POST.get('paymentthreshold'),
                            ewallet=request.POST.get('ewallet'),
                            user=request.user,
                        ).save()
                        context['status'] = "Epayment Informtion updated"
                        logger.info('[ProfileView] Request - {0}'.format(str('Payoneer')))

                    elif type == 'Payoneer':
                        Payoneer(
                            type=request.POST.get('type'),
                            paymentthreshold=request.POST.get('paymentthreshold'),
                            payeename=request.POST.get('payeename'),
                            country=request.POST.get('country'),
                            paypalemail=request.POST.get('paypalemail'),
                            user=request.user,
                        ).save()
                        context['status'] = "Payoneer Informtion updated"
                        logger.info('[ProfileView] Request - {0}'.format(str('Payoneer')))

        return render(request, self.template_name, context)


@login_required
def change_password(request):
    template_name = 'dashboard/members/profile.html'
    context = {}
    if request.method == 'POST':
        password = request.POST.get('password')
        cpassword = request.POST.get('cpassword')
        if password != cpassword:
            context['password'] = "Password and Confirm Password did match"
        else:
            old_password = request.POST.get('old_password')
            usr = User.objects.filter(email=request.user.email).first()
            user = authenticate(username=usr.username, password=old_password)
            if not user:
                context['password'] = "Wrong Old password"

            else:
                if user is not None:
                    if user.is_active:
                        u = User.objects.get(username=usr.username)
                        u.set_password(password)
                        u.save()
                        context['password'] = "New password updated"

    return render(request, template_name, context)


@csrf_exempt
def getarticle(request):
    if request.method == 'POST':
        res = {}
        wid = request.POST.get('wid', None)
        support = Widget.objects.filter(wid=wid)
        if support:
            res = support
        logger.error('[addWidgetDataView] no widget')
    else:
        logger.error('[addWidgetDataView] Wrong request method')

    posts_serialized = serializers.serialize('json', res)
    return JsonResponse(posts_serialized, safe=False)


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def sticky_impression(request):
    referrer = request.data.get('referrer', None)
    cnt = request.data.get('cnt', None)
    referrercompany, _ = ReferrerCompany.objects.get_or_create(
        companyname=referrer
    )
    today = datetime.now().date()
    tomorrow = today + timedelta(1)
    today_start = datetime.combine(today, time())
    today_end = datetime.combine(tomorrow, time())
    rfcompany = RfCompany.objects.filter(created__lte=today_end, created__gte=today_start,
                                         companyname=referrer).order_by('-id')[:1]
    if rfcompany.count() != 0:
        rfcompany = rfcompany[0]
        rfcompany.bannerloads += cnt
        rfcompany.companyname = referrer
        rfcompany.save()
    else:
        rfcompany = RfCompany()
        rfcompany.bannerloads += cnt
        rfcompany.companyname = referrer
        rfcompany.save()

    if referrercompany:
        referrercompany.bannerloads += cnt
        referrercompany.save()
        dashboardcompany = DashboardCompany()
        dashboardcompany.bannerloads += cnt
        dashboardcompany.companyname = referrer
        dashboardcompany.save()
    return HttpResponse("done")


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def clicks_impression(request):
    referrer = request.data.get('referrer', None)
    referrercompany, created = ReferrerCompany.objects.get_or_create(
        companyname=referrer
    )

    today = datetime.now().date()
    tomorrow = today + timedelta(1)
    today_start = datetime.combine(today, time())
    today_end = datetime.combine(tomorrow, time())
    rfcompany = RfCompany.objects.filter(created__lte=today_end, created__gte=today_start,
                                         companyname=referrer).order_by('-id')[:1]
    if rfcompany.count() != 0:
        rfcompany = rfcompany[0]
        rfcompany.clicks += 1
        rfcompany.companyname = referrer
        rfcompany.save()
    else:
        rfcompany = RfCompany()
        rfcompany.clicks += 1
        rfcompany.companyname = referrer
        rfcompany.save()

    if referrercompany:
        referrercompany.clicks += 1
        referrercompany.save()
        dashboardcompany = DashboardCompany()
        dashboardcompany.clicks += 1
        dashboardcompany.companyname = referrer
        dashboardcompany.save()

    return HttpResponse("done")


class Month(Func):
    function = 'EXTRACT'
    template = '%(function)s(MONTH from %(expressions)s)'
    output_field = models.IntegerField()


# cronjob
# http://127.0.0.1/dashboard/widget/income_update
@csrf_exempt
@permission_classes([])
@authentication_classes([])
def income_update(request):
    try:
        referrercompany = ReferrerCompany.objects.values()
        if referrercompany:
            allcalc = 0
            today = datetime.now().date()
            for data in referrercompany:

                rc = ReferrerCountry.objects.filter(referrercompany_id=data['id'], created=today)
                if rc.count() != 0:
                    for q_rc in rc:
                        qs_country = Country.objects.filter(country=q_rc.country)[:1]
                        if qs_country.count() != 0:
                            a_price = [x.price for x in qs_country]
                            allcalc += float(float(q_rc.totalview) * float(a_price[0]))

                revenue, created = Revenue.objects.get_or_create(
                    date=today,
                    companyname=data['companyname']
                )
                if revenue:
                    revenue.totalmoney = allcalc
                    revenue.save()

                # print (allcalc)

    except ReferrerCompany.DoesNotExist:
        logger.error('error')

    return HttpResponse("done")


@csrf_exempt
def dashboard_api(request):
    if request.method == 'GET':
        res = {}
        site = Site.objects.filter(user=request.user)
        all_sites = [y.id for y in site]
        if site:
            widget = Widget.objects.filter(site__in=all_sites)
            all_widget = [y.wid for y in widget]
            # print (all_widget)
            rfcompany_total = Revenue.objects.filter(companyname__in=all_widget) \
                .annotate(m=Month('date')) \
                .values('m') \
                .annotate(total=Sum('totalmoney')) \
                .order_by()

            if rfcompany_total:
                res = [entry for entry in rfcompany_total]

            # print (res)

    return JsonResponse(res, safe=False)


def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/dashboard')
