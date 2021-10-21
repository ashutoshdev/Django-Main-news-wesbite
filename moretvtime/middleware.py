import logging
import requests
from datetime import timedelta
from django.utils import timezone
from django.http import HttpResponseRedirect
from django_server.utils import get_client_ip, is_bot
from moretvtime.models import Vpn, Tracking

logger = logging.getLogger(__name__)
COOKIE_NAME = 'mtt_session'

class IframeMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request, *args, **kwargs):
        response = self.get_response(request)
        response['X-Frame-Options'] = 'allow-from ' + (request.META.get('HTTP_REFERER') or '')
        return response

class Clearcookie_npMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request, *args, **kwargs):
        response = self.get_response(request)

        native_provider = request.GET.get('native-provider', 'unknown')
        if native_provider != 'unknown':
            try:
                if request.COOKIES.get(COOKIE_NAME):

                    response.delete_cookie(COOKIE_NAME)
                    location.reload(True)


            except Exception as e:
               logger.error('[native-provider] not here {0}'.format(e))

        return response



class CheckVpnAddressMiddleware(object):

    ip_whitelist = [
        '127.0.0.1',
        '63.143.42.249',
        '63.143.42.250'
    ]

    url_whitelist = [
        '/',
        '/vpn',
        '/sw.js',
        '/favicon.ico'
    ]

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        ip = get_client_ip(request)
        if is_bot(request):
            logger.info('[IS_VPN] Is Robot {0} - {1}'.format(ip, request.META.get('HTTP_USER_AGENT')))
            return self.get_response(request)

        if (request.path_info in self.url_whitelist) or (ip in self.ip_whitelist):
            return self.get_response(request)

        vpn = Vpn.objects.filter(ip=ip).first()

        if vpn and (vpn.created > timezone.now() - timedelta(weeks=2)):
            if vpn.is_vpn:

                logger.info('[IS_VPN] {0} - {1}'.format(ip, Tracking.get_tracker(request)))
                return HttpResponseRedirect('/vpn')
        else:
            url = 'https://www.ipqualityscore.com/api/json/ip/VloVwex6edRJfsgR41xZO6vmsIrxbqqR/' + ip
            try:
                response = requests.get(url, timeout=3)
                if response.status_code == requests.codes.ok:
                    response = response.json()

                    if response.get('success'):
                        vpn,_ = Vpn.objects.get_or_create(ip=ip)
                        vpn.is_vpn = response.get('vpn') or response.get('proxy') or response.get('tor')
                        vpn.save()

                        if vpn.is_vpn:
                            logger.info('[IS_VPN] {0} - {1} - {2}'.format(ip, response, Tracking.get_tracker(request)))
                            return HttpResponseRedirect('/vpn')
                        else:
                            logger.info('[IS_NOT_VPN] not vpn {0} - {1} - {2}'.format(ip, response, Tracking.get_tracker(request)))
                    else:
                        logger.error('[IS_VPN] something wrong {0} - {1}'.format(ip, response))
            except Exception as e:
                logger.error('[IS_VPN] request timeout {0} - {1}'.format(ip, e))
        return self.get_response(request)
