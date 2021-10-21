from datetime import date
from django.core.management.base import BaseCommand
from django.db import DatabaseError
from django.db.models import Count
from moretvtime.models import Faucethub, PayLatterFaucetHub, SendMoney, Santoshi
import socket
import requests
import logging

logger = logging.getLogger(__name__)

faucethub_api_key = 'e41259731de9789e6866b8c64c58fabd'
faucethub_url = 'https://faucethub.io/api/v1/'
faucethub_currency = 'BTC'
santoshi_url = 'http://codacoin.com/api/public.php?request=convert&type=btctofiat&input=1&symbol=enabled&decimal=8&exchange=average&currency=USD&denom=satoshi'


class Command(BaseCommand):

    def handle(self, *args, **options):
        today = date.today()
        data = PayLatterFaucetHub.objects.filter(sent=False).values('companyname') \
            .annotate(total=Count('companyname')) \
            .order_by()
        for d in data:
            companyname = d['companyname']
            print(companyname)
            chkcompany = SendMoney.objects.filter(companyname=companyname).first()
            ip = socket.gethostbyname(socket.gethostname()) or '127.0.0.1'
            if chkcompany and chkcompany.companyamount > 0.0:
                fhcnt = Santoshi.objects.filter(created__day=today.day).first()
                if not fhcnt:
                    r = requests.get(santoshi_url)
                    asd = r.text.split('$')
                    santoshi = Santoshi()
                    santoshi.title = asd[1]
                    try:
                        santoshi.save()
                    except DatabaseError:
                        logger.error('Problem when saving santoshi')
                    amt = int(float(chkcompany.companyamount) / float(asd[1]) * int(d['total']))
                else:
                    asd = fhcnt.title
                    amt = int(float(chkcompany.companyamount) / float(asd) * int(d['total']))

                r = send_money_request_fchub(amt, chkcompany.toaddress, ip)
                try:
                    save_sendmoney_data_fh(r, chkcompany.toaddress, companyname, amt, ip)
                    PayLatterFaucetHub.objects.filter(sent=False, companyname=companyname).update(sent=True)
                except DatabaseError:
                    logger.error('Problem when saving transaction')
            else:
                logger.error('company amount is 0.0 or not available')


def send_money_request_fchub(amount, to, ip):
    url = faucethub_url + 'send'
    data = {'api_key': faucethub_api_key, 'to': to, 'amount': int(amount),
            'currency': faucethub_currency, 'ip_address': ip}
    r = requests.post(url, data=data)
    return r


def save_sendmoney_data_fh(r, to, companyname, amount, ip):
    faucethub = Faucethub()
    faucethub.payout_id = r.json()['payout_id']
    faucethub.payout_user_hash = r.json()['payout_user_hash']
    faucethub.status = r.json()['status']
    faucethub.amount = int(amount)
    faucethub.toaddress = to
    faucethub.companyname = companyname
    faucethub.ip = ip
    faucethub.save()
