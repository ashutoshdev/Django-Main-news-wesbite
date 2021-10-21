import binascii
import logging

from django.contrib.auth.models import User
from django.db.models import *
from django_countries.fields import CountryField

log = logging.getLogger('tracking.models')


class AllVisitor(Model):
    session_key = CharField(max_length=255, unique=False)
    ip_address = CharField(max_length=39, unique=False)
    user = ForeignKey(User, null=True, on_delete=CASCADE)
    user_agent = TextField(default='', blank=True, null=True)
    referrer = TextField(default='', blank=True, null=True)
    url = TextField(default='', blank=True, null=True)
    page_views = PositiveIntegerField(default=0)
    country = CountryField('country', default="")
    session_start = DateTimeField()
    last_update = DateTimeField()

    def __str__(self):
        return "{}/{} [{} ({})]".format(self.ip_address,
                                        self.session_key,
                                        self.url,
                                        self.page_views)

    class Meta:
        ordering = ('-last_update',)
        # unique_together = ('last_update')

        indexes = [
            Index(fields=['session_key', '-last_update']),
            Index(fields=['ip_address', '-last_update']),
        ]


class Visitor(Model):
    session_key = CharField(max_length=255, unique=False)
    ip_address = CharField(max_length=39, unique=False)
    user = ForeignKey(User, null=True, on_delete=CASCADE)
    user_agent = TextField(default='', blank=True, null=True)
    url = TextField(default='', blank=True, null=True)
    page_views = PositiveIntegerField(default=0)
    country = CountryField('country', default="")
    session_start = DateTimeField()
    last_update = DateTimeField()
    referrer = TextField('Native Provider referrer', default='', blank=True, null=True)
    offerwall_referrer = TextField('Offerwall Referrer', default='', blank=True, null=True)

    def __str__(self):
        return "{}/{} [{} ({})]".format(self.ip_address,
                                        self.session_key,
                                        self.url,
                                        self.page_views)

    class Meta:
        ordering = ('-last_update',)
        # unique_together = ('last_update')


class ReferrerCompany(Model):
    companyname = TextField(default='', blank=False, null=False, verbose_name='companyname')
    totalview = PositiveIntegerField(default=0)
    bannerloads = PositiveIntegerField(default=0)
    clicks = PositiveIntegerField(default=0)
    created = DateTimeField(auto_now_add=True)


class ReferrerCountry(Model):
    referrercompany = ForeignKey('ReferrerCompany', related_name='referrercountrys', on_delete=CASCADE,
                                        null=True)
    country = CountryField('country', default="")
    totalview = PositiveIntegerField(default=0)
    created = DateTimeField(auto_now_add=True)
