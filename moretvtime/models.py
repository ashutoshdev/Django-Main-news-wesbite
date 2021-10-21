import logging
from datetime import timedelta

from django.db.models import *
from django.utils import timezone
from django_countries.fields import CountryField
from djrichtextfield.models import RichTextField
import re

from django_server.utils import is_mobile
from moretvtime import db

special_cat = [33, 34]

logger = logging.getLogger(__name__)

applications = [
    ('moretvtime', 'moretvtime.com'),
    ('youlovepranks', 'youlovepranks.com'),
    ('pranksforu', 'pranksforu.com'),
    ('funnypranks', 'funnypranks.me'),
]

DAILY_LIMIT = 150
VIEWS_TO_SHOW_CAPTCHA = 10


class Article(Model):
    category = ForeignKey('Category', related_name='articles', on_delete=CASCADE, null=True)
    url = TextField(default='', blank=True, null=True, verbose_name='url')
    title = TextField(default='', blank=True, null=True, verbose_name='title')
    thumbnail = FileField(upload_to='article_images', default='', blank=False, null=False)
    thumbnail_url = TextField(default='', blank=True, null=True, verbose_name='thumbnail_url')
    keywords = TextField(default='', blank=True, null=True, verbose_name='keywords')
    article_html = RichTextField(default='', blank=True, null=True, verbose_name='article_html')
    article_text = RichTextField(default='', blank=True, null=True, verbose_name='article_text')
    video = RichTextField(default='', blank=True, null=True, verbose_name='video')
    video_html = RichTextField(default='', blank=True, null=True, verbose_name='video html')
    application = TextField(default='', choices=applications, blank=True, null=True, verbose_name='application')
    order = IntegerField(default=0, verbose_name='article_order')
    created = DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def clean(self):
        myurl = self.url
        myurl = myurl.replace(' ', '-')
        myurl = re.sub(r"[-()\"#/@;:<>{}`+=~|.!?,]", "-", myurl)
        myurl = re.sub(r"[^a-zA-Z0-9 ]", "-", myurl)
        self.url = myurl.lower()
        return self.url

    def ref_link(self):
        return "https://moretvtime.com/{0}/{1}/{2}".format(self.category.id, self.category.url, self.url)

    @staticmethod
    def get_all_links():
        links = db.fetch_all_flat('''
            select cat.id || '/' || cat.url || '/' || art.url as article
              from moretvtime_category as cat
              join moretvtime_article as art on art.category_id = cat.id
             order by cat.order, cat.id, art.order, art.id;
        ''')
        return [row[0] for row in links]

    def get_all_public_links():
        links = db.fetch_all_flat('''
            select cat.id || '/' || cat.url || '/' || art.url as article
              from moretvtime_category as cat
              join moretvtime_article as art on art.category_id = cat.id
              WHERE cat.id IN (33, 34)
             order by cat.order, cat.id, art.order, art.id;
        ''')
        return [row[0] for row in links]

    @staticmethod
    def get_count_by_category():
        data = db.fetch_all('select category_id, count(id) article_id from moretvtime_article group by category_id;')
        links = {}
        for row in data:
            links[str(row['category_id'])] = row['article_id']
        return links

    def get_count_by_public_category():
        data = db.fetch_all(
            'select category_id, count(id) article_id from moretvtime_article where category_id IN (33,34) group by category_id;')
        links = {}
        for row in data:
            links[str(row['category_id'])] = row['article_id']
        return links


class Category(Model):
    parent = ForeignKey('self', blank=True, null=True, on_delete=CASCADE, related_name='children')
    url = TextField(default='', blank=True, null=True, verbose_name='url')
    name = TextField(default='', blank=True, null=True, verbose_name='name')
    application = TextField(default='', choices=applications, blank=True, null=True, verbose_name='application')
    order = IntegerField(default=0, verbose_name='category_order')
    enabled = BooleanField('enabled', default=True)
    created = DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def clean(self):
        myurl = self.url
        myurl = myurl.replace(' ', '-')
        myurl = re.sub(r"[-()\"#/@;:<>{}`+=~|.!?,]", "-", myurl)
        myurl = re.sub(r"[^a-zA-Z0-9 ]", "-", myurl)
        self.url = myurl.lower()
        return self.url;

    class Meta:
        unique_together = ('url', 'parent',)
        verbose_name_plural = "categories"

    def __str__(self):
        full_path = [self.name]
        k = self.parent
        while k is not None:
            full_path.append(k.name)
            k = k.parent

        return ' -> '.join(full_path[::-1])


class Tracking(Model):
    date = DateTimeField('date', default=timezone.now)
    provider = TextField(default='', blank=True, null=True, verbose_name='provider')
    sub_id = TextField(default='', blank=True, null=True, verbose_name='sub_id')
    compaign = TextField(default='', blank=True, null=True, verbose_name='compaign')
    ip = TextField(default='', blank=True, null=True, verbose_name='ip')
    country = CountryField('country', default='')
    sent = BooleanField('sent', default=False)
    sign = TextField(default='', blank=True, null=True, verbose_name='sign')
    extra1 = TextField(default='', blank=True, null=True, verbose_name='extra1')
    extra2 = TextField(default='', blank=True, null=True, verbose_name='extra2')
    extra3 = TextField(default='', blank=True, null=True, verbose_name='extra3')
    extra4 = TextField(default='', blank=True, null=True, verbose_name='extra4')
    extra5 = TextField(default='', blank=True, null=True, verbose_name='extra5')

    views = IntegerField('views', default=0)
    views_limit = IntegerField('views_limit', default=0)
    turn_views = IntegerField('turn_views', default=0)
    turn_views_limit = IntegerField('turn_views_limit', default=3)

    last_view_date = DateTimeField('last_view_date', default=timezone.now)
    last_mc_view_date = DateTimeField('last_mc_view_date', blank=True, null=True, default=None)
    last_popunder_view_date = DateTimeField('last_mc_view_date', blank=True, null=True, default=None)
    prev_sign = TextField(default='', blank=True, null=True, verbose_name='prev_sign')

    captcha_solved = BooleanField('captcha_solved', default=False)
    btc_wallet = TextField(default='', blank=True, null=True, verbose_name='btc_wallet')
    btc_paid = BooleanField('sent', default=False)

    class Meta:
        ordering = ['-date']
        indexes = [
            Index(fields=['sub_id', '-date']),
            Index(fields=['ip', '-date']),
            Index(fields=['sign', '-date']),
        ]

    def __str__(self):
        return '{0} - {1} - {2} - {3} - {4}'.format(self.sign, self.provider, self.sub_id, self.date, self.btc_wallet)

    def user_reached_daily_limit(self):
        views = Tracking.objects.filter(sent=True, ip=self.ip,
                                        last_view_date__gte=timezone.now() - timedelta(days=1)).count()
        return views >= DAILY_LIMIT

    def last_btc_payout_transaction(self):
        return self.objects.filter(btc_wallet=self.btc_wallet).order_by('-date').first()

    @staticmethod
    def get_tracker(request):
        COOKIE_NAME = 'mtt_session'
        sign = request.COOKIES.get(COOKIE_NAME)
        if sign:
            return Tracking.objects.filter(sign=sign).first()

    @staticmethod
    def get_mc_session(request):
        COOKIE_NAME = 'mcuuid'
        return request.COOKIES.get(COOKIE_NAME)

    @staticmethod
    def is_often_send_postback(ip, provider=None):
        provider = Provider.objects.filter(name=provider).first()
        min_seconds_on_page = 20
        last_postback_delta = (provider.views_per_impression if provider else 3) * min_seconds_on_page
        is_often = Tracking.objects.filter(ip=ip,
                                           last_view_date__gte=timezone.now() - timedelta(seconds=last_postback_delta),
                                           sent=True).count()

        logger.info('last pb delta: {0}, is_often: {1}, delta time:'.format(last_postback_delta, is_often,
                                                                            timezone.now() - timedelta(
                                                                                seconds=last_postback_delta)))

        return is_often


class TrackingSummary(Tracking):
    class Meta:
        proxy = True
        verbose_name = 'TrackingSummary'
        verbose_name_plural = 'Tracking Summary'


class Provider(Model):
    name = TextField('name', default='', blank=False, null=False)
    postback_url = TextField('postback url', default='', blank=True, null=True,
                             help_text='Possible variables: {sub_id}, {ip}, {country}, {id}, {sign}, {compaign}, {price}, {extra1}, {extra2}, {extra3}, {extra4}, {extra5}')
    impression_limit = IntegerField('page limit', default=50)
    views_per_impression = IntegerField('pages per cycle', default=3)
    impression_price = FloatField('cycle price', default=0.001, blank=True, null=True)
    postback_after_all_impressions = BooleanField('do postback after limit', default=False)


class Banner(Model):
    name = TextField('name', default='', blank=False, null=False)
    code = TextField('code', default='', blank=False, null=False)
    is_static = BooleanField('is static', default=False)
    is_public = BooleanField('is public', default=False)
    is_mobile = BooleanField('is mobile', default=False)
    autoremove = BooleanField('autoremove banner', default=False)
    public_order = IntegerField('order', default=0)

    def __str__(self):
        return self.name


ACTION_START = 'start'
ACTION_FINAL = 'final'
ACTION_BUTTON = 'button'
ACTION_REDIRECT = 'redirect'
ACTION_IFRAME = 'iframe'
ACTION_CAPTCHA = 'captcha'
ACTION_AUTOSCROLL = 'autoscroll'
ACTION_TYPES = [
    (ACTION_BUTTON, ACTION_BUTTON),
    (ACTION_IFRAME, ACTION_IFRAME),
    (ACTION_REDIRECT, ACTION_REDIRECT),
    (ACTION_CAPTCHA, ACTION_CAPTCHA),
    (ACTION_AUTOSCROLL, ACTION_AUTOSCROLL),
    (ACTION_START, ACTION_START),
    (ACTION_FINAL, ACTION_FINAL)
]


class BannerButton(Model):
    name = TextField('name', default='', blank=False, null=False)
    text = TextField('text', default='', blank=False, null=False)
    type = TextField('action type', choices=ACTION_TYPES, default=ACTION_BUTTON, blank=False, null=False)

    def __str__(self):
        return '{0}-{1}'.format(self.type, self.name)


APPLICATION_MORETVTIME_DESKTOP = 'mtt_desktop'
APPLICATION_MORETVTIME_MOBILE = 'mtt_mobile'
APPLICATION_MORETVTIME_SPECIAL_DESKTOP = 'mtt_special_desktop'
APPLICATION_MORETVTIME_SPECIAL_MOBILE = 'mtt_special_mobile'

APPLICATIONS = [
    (APPLICATION_MORETVTIME_DESKTOP, APPLICATION_MORETVTIME_DESKTOP),
    (APPLICATION_MORETVTIME_MOBILE, APPLICATION_MORETVTIME_MOBILE),
    (APPLICATION_MORETVTIME_SPECIAL_DESKTOP, APPLICATION_MORETVTIME_SPECIAL_DESKTOP),
    (APPLICATION_MORETVTIME_SPECIAL_MOBILE, APPLICATION_MORETVTIME_SPECIAL_MOBILE),
]


class BannerPlaceholder(Model):
    paragraph_number = IntegerField('paragraph number', default=1)
    timeout = IntegerField('timeout to wait', default=10)
    banner_above_button_1 = ForeignKey('Banner', related_name='banner_above_button_1',
                                       verbose_name='banner above button 1', on_delete=CASCADE, null=True, blank=True)
    banner_above_button_2 = ForeignKey('Banner', related_name='banner_above_button_2',
                                       verbose_name='banner above button 2', on_delete=CASCADE, null=True, blank=True)
    button = ForeignKey('BannerButton', related_name='button', verbose_name='banner button', on_delete=CASCADE,
                        null=True, blank=True)
    banner_below_button_1 = ForeignKey('Banner', related_name='banner_below_button_1',
                                       verbose_name='banner below button 1', on_delete=CASCADE, null=True, blank=True)
    banner_below_button_2 = ForeignKey('Banner', related_name='banner_below_button_2',
                                       verbose_name='banner below button 2', on_delete=CASCADE, null=True, blank=True)
    selector = TextField('css selector', default='', blank=True, null=True)
    insert_before = BooleanField('insert before paragraph', default=True)
    order = IntegerField('order', default=0)
    scroll_to_top = BooleanField('scroll button to top', default=False)
    is_test = BooleanField('is test', default=False)
    application = TextField('application', choices=APPLICATIONS, default=APPLICATION_MORETVTIME_DESKTOP, blank=False,
                            null=False)

    class Meta:
        ordering = ['is_test', 'order']

    @staticmethod
    def get_placeholders(request, tracker):
        is_test = False
        application = ''
        if tracker:
            is_test = tracker.sub_id == 'test'
            application = APPLICATION_MORETVTIME_MOBILE if is_mobile(request) else APPLICATION_MORETVTIME_DESKTOP
            # if request.path == "/34/6-different-celebs-who-have-done-breast-surgeries-to-improve-their-look/6-different-celebs-who-have-done-breast-surgeries-to-improve-their-look/" or request.path == "/33/breast-surgery-and-how-it-gave-these-women-a-new-look/breast-surgery-and-how-it-gave-these-women-a-new-look/":
            # application = APPLICATION_MORETVTIME_SPECIAL_MOBILE if is_mobile(request) else APPLICATION_MORETVTIME_SPECIAL_DESKTOP
            # else:
            # application = APPLICATION_MORETVTIME_MOBILE if is_mobile(request) else APPLICATION_MORETVTIME_DESKTOP

        return BannerPlaceholder.objects.filter(is_test=is_test, application=application)


class Image(Model):
    title = TextField(default='', blank=False, null=False, verbose_name='title')
    thumbnail = FileField(upload_to='article_images', default='', blank=False, null=False)
    created = DateTimeField(auto_now_add=True)


class Page(Model):
    title = TextField(default='', blank=False, null=False, verbose_name='title')
    pagerole = TextField(default='', blank=False, null=False, verbose_name='pagerole')
    description = RichTextField(default='', blank=True, null=True, verbose_name='description')
    created = DateTimeField(auto_now_add=True)


class Vpn(Model):
    ip = TextField(default='', blank=False, null=False, verbose_name='ip')
    is_vpn = BooleanField(default=False)
    created = DateTimeField(auto_now_add=True)


class Country(Model):
    price = TextField(default='', blank=False, null=False, verbose_name='price')
    country = CountryField('country', default="")
    created = DateTimeField(auto_now_add=True)


compantoption = [
    ('crypto-provider', 'crypto-provider'),
    ('crypto-advertising', 'crypto-advertising')
]


class SendMoney(Model):
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    toaddress = TextField(default='', blank=True, null=True, verbose_name='toaddress', help_text='BTC Address')
    companyamount = FloatField(default=0.0, null=True, verbose_name='companyamount')
    useramount = FloatField(default=0.0, null=True, blank=True, verbose_name='useramount')
    compantoption = TextField(default='', choices=compantoption, blank=True, null=True, verbose_name='compantoption')
    limit = TextField(default='', blank=False, null=False, verbose_name='limit', help_text='Article Limit')
    created = DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Add Crypto Company'


class Santoshi(Model):
    title = TextField(default='', blank=False, null=False, verbose_name='title')
    created = DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Santoshi Converter'


class Faucethub(Model):
    payout_id = TextField(default='', blank=False, null=False, verbose_name='payout_id')
    payout_user_hash = TextField(default='', blank=False, null=False, verbose_name='payout_user_hash')
    status = TextField(default='', blank=False, null=False, verbose_name='status')
    ip = TextField(default='', blank=False, null=False, verbose_name='ip')
    toaddress = TextField(default='', blank=False, null=False, verbose_name='to')
    amount = FloatField(default='', blank=False, null=False, verbose_name='amount')
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    created = DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'All Crypto Transaction'


class PayLatterFaucetHub(Model):
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    sub_id = TextField(default='', blank=False, null=False, verbose_name='sub_id')
    ip = TextField(default='', blank=False, null=False, verbose_name='ip')
    sent = BooleanField('sent', default=False)
    created = DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'All Pay Latter Facuet Hub'
