from django.db.models import *
from django.contrib.auth.models import User

priority = [
    ('Normal', 'Normal'),
    ('High', 'High'),
    ('Urgent', 'Urgent'),
    ('Immediate', 'Immediate'),
]

payment_status = [
    ('Waiting For Payment', 'Waiting For Payment'),
    ('Paid', 'Paid'),
    ('Payment Canceled', 'Payment Canceled'),
    ('In Progress', 'In Progress'),
]

site_status = [
    ('Under Review', 'Under Review'),
    ('Approved', 'Approved'),
    ('Declined', 'Declined'),
]

addedby = [
    ('Admin', 'Admin'),
    ('User', 'User')
]


class Page(Model):
    title = TextField(default='', blank=False, null=False, verbose_name='title')
    pagerole = TextField(default='', blank=False, null=False, verbose_name='pagerole')
    description = TextField(default='', blank=True, null=True, verbose_name='description')
    created = DateTimeField(auto_now_add=True)


class Site(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    name = TextField(default='', blank=False, null=False, verbose_name='name')
    webaddress = TextField(default='', blank=False, null=False, verbose_name='webaddress')
    websitelanguage = TextField(default='', blank=False, null=False, verbose_name='websitelanguage')
    websitetraffic = TextField(default='', blank=True, null=True, verbose_name='websitetraffic')
    site_status = TextField(default='', choices=site_status, blank=False, null=False, verbose_name='site_status')
    created = DateTimeField(auto_now_add=True)


class Widget(Model):
    site = ForeignKey('Site', related_name='widgets', on_delete=CASCADE, null=True)
    name = TextField(default='', blank=False, null=False, verbose_name='name')
    widgettitle = TextField(default='', blank=False, null=False, verbose_name='widgettitle')
    type = TextField(default='', blank=False, null=False, verbose_name='type')
    subtype = TextField(default='', blank=True, null=True, verbose_name='subtype')
    column = TextField(default='', blank=True, null=True, verbose_name='column')
    rows = TextField(default='', blank=True, null=True, verbose_name='rows')
    wid = TextField(default='', blank=True, null=True, verbose_name='subtype')
    css = TextField(default='', blank=True, null=True, verbose_name='css')
    created = DateTimeField(auto_now_add=True)


class Support(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    subject = TextField(default='', blank=False, null=False, verbose_name='subject')
    priority = TextField(default='', choices=priority, blank=False, null=False, verbose_name='priority')
    status = TextField(default='', blank=False, null=False, choices=site_status, verbose_name='site_status')
    created = DateTimeField(auto_now_add=True)


class Message(Model):
    support = ForeignKey('Support', related_name='messages', on_delete=CASCADE, null=True)
    text = TextField(default='', blank=False, null=False, verbose_name='text')
    addedby = TextField(default='', choices=addedby,blank=False, null=False, verbose_name='addedby')
    created = DateTimeField(auto_now_add=True)


class Payment(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    total = TextField(default='', blank=False, null=False, verbose_name='total')
    payment_status = TextField(default='', choices=payment_status, blank=False, null=False,
                               verbose_name='payment_status')
    created = DateTimeField(auto_now_add=True)


class Paypal(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    type = TextField(default='', blank=False, null=False, verbose_name='type')
    currency = TextField(default='', blank=False, null=False, verbose_name='currency')
    country = TextField(default='', blank=False, null=False, verbose_name='country')
    paymentthreshold = TextField(default='', blank=False, null=False, verbose_name='paymentthreshold')
    payeename = TextField(default='', blank=False, null=False, verbose_name='payeename')
    paypalemail = TextField(default='', blank=False, null=False, verbose_name='paypalemail')
    payeephone = TextField(default='', blank=False, null=False, verbose_name='payeephone')
    payeeaddress = TextField(default='', blank=False, null=False, verbose_name='payeeaddress')
    created = DateTimeField(auto_now_add=True)


class Epayment(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    type = TextField(default='', blank=False, null=False, verbose_name='type')
    paymentthreshold = TextField(default='', blank=False, null=False, verbose_name='paymentthreshold')
    ewallet = TextField(default='', blank=False, null=False, verbose_name='ewallet')
    created = DateTimeField(auto_now_add=True)


class Payoneer(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    type = TextField(default='', blank=False, null=False, verbose_name='type')
    paymentthreshold = TextField(default='', blank=False, null=False, verbose_name='paymentthreshold')
    payeename = TextField(default='', blank=False, null=False, verbose_name='payeename')
    country = TextField(default='', blank=False, null=False, verbose_name='country')
    paypalemail = TextField(default='', blank=False, null=False, verbose_name='paypalemail')
    created = DateTimeField(auto_now_add=True)


class Webmoney(Model):
    user = ForeignKey(User, on_delete=CASCADE, default=None)
    type = TextField(default='', blank=False, null=False, verbose_name='type')
    currency = TextField(default='', blank=False, null=False, verbose_name='currency')
    paymentthreshold = TextField(default='', blank=False, null=False, verbose_name='paymentthreshold')
    wmz = TextField(default='', blank=False, null=False, verbose_name='wmz')
    created = DateTimeField(auto_now_add=True)


class RfCompany(Model):
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    bannerloads = PositiveIntegerField(default=0)
    clicks = PositiveIntegerField(default=0)
    date = DateField(auto_now_add=True)
    time = TimeField(auto_now_add=True)
    created = DateTimeField(auto_now_add=True)


class DashboardCompany(Model):
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    bannerloads = PositiveIntegerField(default=0)
    clicks = PositiveIntegerField(default=0)
    date = DateField(auto_now_add=True)
    time = TimeField(auto_now_add=True)
    created = DateTimeField(auto_now_add=True)

class Revenue(Model):
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    date = DateField(auto_now_add=True)
    time = TimeField(auto_now_add=True)
    totalmoney = PositiveIntegerField(default=0)
    created = DateTimeField(auto_now_add=True)
