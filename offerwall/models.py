import binascii
from django.db.models import *


class OfferwallTracking(Model):
    provider = TextField('offerwall provider', default='', blank=False, null=False)
    sub_id = TextField('provider`s user sub_id', default='', blank=False, null=False)
    ref_id = TextField('uniq ref_id of user', default='', blank=False, null=False)


class TiniURL(Model):
    url = TextField('real url', default='', blank=False, null=False)
    turl = TextField('tiny url', default='', blank=False, null=False)
    created = DateTimeField(auto_now_add=True)

    @staticmethod
    def get(url):
        model, created = TiniURL.objects.get_or_create(
            url=url
        )
        if created:
            turl = hex(binascii.hexlify(binascii.crc32(url.encode('utf8'))))
            model.turl=turl
            model.save()

        return model