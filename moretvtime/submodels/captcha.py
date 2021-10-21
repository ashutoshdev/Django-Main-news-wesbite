import base64
import logging
import random
import uuid
from datetime import timedelta

from captcha.image import ImageCaptcha
from django.db.models import *
from django.utils import timezone

logger = logging.getLogger(__name__)

secure_random = random.SystemRandom()


class Captcha(Model):
    ip = TextField(default='')
    uuid = TextField(default='')
    value = TextField(default='')
    solved = BooleanField(default=False)
    created = DateTimeField(auto_now_add=True)
    solved_date = DateTimeField(default=None, null=True, blank=True)

    def __str__(self):
        return self.value

    @staticmethod
    def get_image(ip):
        image = ImageCaptcha()

        val1 = secure_random.choice(range(0, 20))
        val2 = secure_random.choice(range(0, 20))
        value = val1 + val2
        str_value = '{0}+{1}'.format(val1, val2)
        captcha_uuid = uuid.uuid4()

        Captcha(
            ip=ip,
            value=str(value),
            uuid=captcha_uuid
        ).save()

        data = image.generate(str_value)
        return captcha_uuid, base64.b64encode(data.getvalue()).decode()

    @staticmethod
    def solve(uuid='', solution='', ip=''):

        captcha = Captcha.objects.filter(uuid=uuid).first()
        solved = False

        if captcha:
            if ip == captcha.ip and \
                    timezone.now() - captcha.created < timedelta(minutes=15) and \
                    captcha.value == solution:
                CaptchaTrigger.reset_counter(ip)
                solved = True
                logger.info('[Show Captcha] ip: ' + ip + ' RESOLVED')
            captcha.delete()

        return solved


class CaptchaTrigger(Model):
    TRIGGER_COUNT = 10

    ip = TextField(default='', null=False, blank=False)
    counter = IntegerField(default=0)
    last_trigger_date = DateTimeField(default=None, null=True, blank=True)

    class Meta:
        indexes = [
            Index(fields=['ip', 'last_trigger_date'])
        ]

    @staticmethod
    def show_captcha(ip):
        trigger,_ = CaptchaTrigger.objects.get_or_create(ip=ip)

        # if else - condition for speed optimisation,
        # to do not update DB if it already gained trigger level
        if trigger.counter > CaptchaTrigger.TRIGGER_COUNT:
            logger.info('[Show Captcha] ip: ' + ip)
            return True
        else:
            trigger.counter = trigger.counter + 1
            trigger.save()
            return False

    @staticmethod
    def reset_counter(ip):
        trigger = CaptchaTrigger.objects.filter(ip=ip).first()
        trigger.counter = 0
        trigger.save()