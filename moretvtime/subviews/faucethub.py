import logging
from datetime import datetime, timedelta, time

import requests
from django.core import serializers
from django.db import DatabaseError
from django.http import HttpResponse, JsonResponse
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django_server.utils import get_client_ip

from django_server.settings import BTC_TOKEN
from django_server.utils import is_mobile
from moretvtime.models import Article, Tracking, Faucethub, \
    SendMoney, Santoshi, Banner

faucethub_api_key = 'e41259731de9789e6866b8c64c58fabd'
faucethub_url = 'https://faucethub.io/api/v1/'
faucethub_currency = 'BTC'
santoshi_url = 'http://codacoin.com/api/public.php?request=convert&type=btctofiat&input=1&symbol=enabled&decimal=8&exchange=average&currency=USD&denom=satoshi'
logger = logging.getLogger(__name__)


# faucethub all api

@csrf_protect
@csrf_exempt
@api_view(['POST'])
def FaucethubCheckBalance(request):
    # if request.method == 'POST':
    url = faucethub_url + 'balance'
    data = {'api_key': faucethub_api_key, 'currency': faucethub_currency}
    r = requests.post(url, data=data)
    # else:
    #     r = 'ERROR'
    return HttpResponse(r)


@csrf_protect
@csrf_exempt
@api_view(['POST'])
def FaucethubCheckAddress(request):
    if request.method == 'POST':
        address = request.POST.get('address', None)
        url = faucethub_url + 'checkaddress'
        data = {'api_key': faucethub_api_key, 'address': address, 'currency': faucethub_currency}
        r = requests.post(url, data=data)
    else:
        r = 'ERROR'
    return HttpResponse(r)


@csrf_protect
@csrf_exempt
@api_view(['POST'])
def FaucethubCheckSend(request):
    r = ''
    if request.method == 'POST':
        zedoamount = 0.0
        to = request.POST.get('to', '')
        companyname = request.POST.get('companyname', '')
        todat_data = today_tomorrow_date()
        Faucethubcnt = Faucethub.objects.filter(created__lte=todat_data[1], created__gte=todat_data[0])
        chkcompany = SendMoney.objects.filter(companyname=companyname)[:1]
        fhcnt = Santoshi.objects.filter(created__lte=todat_data[1], created__gte=todat_data[0])
        if chkcompany.count() != 0:
            if Faucethubcnt.count() <= 50:
                ip = get_client_ip(request) or ''
                amount = float(chkcompany[0].useramount) / float(fhcnt[0].title) or float(zedoamount)
                c_amount = float(chkcompany[0].companyamount) / float(fhcnt[0].title) or float(zedoamount)
                c_to = chkcompany[0].toaddress
                if amount > 0.0:
                    r = send_money_request(amount, to, ip)
                    if r.json()['status'] == 200:
                        save_sendmoney_data(r, to, companyname, amount, ip)
                        r = int(amount)
                    else:
                        logger.error('Problem when saving santoshi')
                        r = 'error'

                if c_amount > 0.0:
                    r_company = send_money_request(c_amount, c_to, ip)
                    if chkcompany[0].compantoption == 'crypto-provider':
                        if r_company.json()['status'] == 200:
                            save_sendmoney_data(r_company, c_to, companyname, c_amount, ip)
                        else:
                            logger.error('Problem when saving santoshi')
                            r = 'error'
            else:
                logger.error('Problem when saving santoshi')
                r = 'error'
        else:
            logger.error('company does not registered in django')
            r = 'error'
    else:
        logger.error('Problem when post data')
        r = 'error'

    return HttpResponse(r)


def send_money_request(amount, to, ip):
    url = faucethub_url + 'send'
    data = {'api_key': faucethub_api_key, 'to': to, 'amount': int(amount),
            'currency': faucethub_currency, 'ip_address': ip}
    r = requests.post(url, data=data)
    return r


def today_tomorrow_date():
    today = datetime.now().date()
    tomorrow = today + timedelta(1)
    today_start = datetime.combine(today, time())
    today_end = datetime.combine(tomorrow, time())
    return today_start, today_end


def save_sendmoney_data(r, to, companyname, amount, ip):
    faucethub = Faucethub()
    faucethub.payout_id = r.json()['payout_id']
    faucethub.payout_user_hash = r.json()['payout_user_hash']
    faucethub.status = r.json()['status']
    faucethub.amount = int(amount)
    faucethub.toaddress = to
    faucethub.companyname = companyname
    faucethub.ip = ip
    faucethub.save()


@csrf_protect
@csrf_exempt
@api_view(['POST'])
def FaucethubCheckCompany(request):
    context = {}
    if request.method == 'POST':
        company = request.POST.get('company', None)
        chkcompany = SendMoney.objects.filter(companyname=company).first()
        if chkcompany:
            todat_data = today_tomorrow_date()
            fhcnt = Santoshi.objects.filter(created__lte=todat_data[1], created__gte=todat_data[0]).first()
            context['limit'] = chkcompany.limit
            if not fhcnt:
                r = requests.get(santoshi_url)
                asd = r.text.split('$')
                santoshi = Santoshi()
                santoshi.title = asd[1]
                try:
                    santoshi.save()
                except DatabaseError:
                    logger.error('Problem when saving santoshi')
                context['res'] = int(float(chkcompany.useramount) / float(asd[1]))
                context['wallet'] = chkcompany.toaddress
            else:
                asd = fhcnt.title
                context['res'] = int(float(chkcompany.useramount) / float(asd))
                context['wallet'] = chkcompany.toaddress

        else:
            context['res'] = 'error'
            logger.error('Problem when chkcompany')

    else:
        context['res'] = 'error'
        logger.error('Problem when post data')
    return JsonResponse(context, safe=False)


@csrf_exempt
@api_view(['POST'])
def FaucethubRestArtcicle(request):
    cat_id = request.POST.get('cat_id', None)
    article_url = request.POST.get('article_url', None)
    data = {
        'articles': serializers.serialize('json', list(
            Article.objects.filter(category_id=cat_id).exclude(url=article_url).order_by('order'))),
        'banners': serializers.serialize('json', list(
            Banner.objects.filter(is_public=True).exclude(is_mobile=not is_mobile(request)).order_by('public_order')))
    }

    return JsonResponse(data, safe=False)


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def payout(request):
    tracker = Tracking.get_tracker(request)

    if not tracker:
        return JsonResponse({'success': False})

    if (timezone.now() - tracker.date) < timedelta(seconds=30):
        return JsonResponse({'success': False})

    last_txn = tracker.last_btc_payout_transaction()
    if (last_txn.date - tracker.date) < timedelta(seconds=30):
        return JsonResponse({'success': False})

    amount = 500
    address = request.data.get('wallet')
    response = requests.get(
        'https://faucethub.io/api/v1/send?api_key={0}&currency=BTC&amount={1}&to={2}'.format(BTC_TOKEN, amount,
                                                                                             address)).json()
    return JsonResponse({
        'success': response.get('status') == 200
    })
