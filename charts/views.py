import logging
from datetime import timedelta

from django.contrib.admin.views.decorators import staff_member_required
from django.http import JsonResponse
from django.utils import timezone
from django.views.generic import TemplateView
from rest_framework.decorators import api_view

from moretvtime.db import fetch_all
from moretvtime.models import Provider

logger = logging.getLogger(__name__)

FORMATS = {
    'month': 'YYYY-MM',
    'date': 'YYYY-MM-dd',
    'hours': 'YYYY-MM-dd HH24',
    'minutes': 'YYYY-MM-dd HH24:MI',
}

class IndexView(TemplateView):
    template_name = 'charts/index.html'

    def get_context_data(self, **kwargs):
        return {
            'providers': Provider.objects.values_list('name', flat=True).order_by('name'),
            'from_date': timezone.now() - timedelta(days=1)
        }


@api_view(['POST'])
@staff_member_required
def providers(request):
    return JsonResponse(
        fetch_all('''
            with
              data as (
                select TO_CHAR(date, %s) as trdate,
                       case
                         when sent = true then 1
                         else 0 end                        as impression,
                       turn_views,
                       provider
                from moretvtime_tracking
                where date >= %s and date <= %s),
              aggregation as (
                  select trdate as date, provider, sum(impression) as impressions, sum(turn_views) as pages
                  from data
                  group by trdate, provider
                  order by trdate, impressions desc
              )
            select date, provider, impressions, pages, prv.impression_price,
                case
                    when provider = 'swagbucks'
                    then (pages * prv.impression_price)::NUMERIC(8,5)
                    else (impressions * prv.impression_price)::NUMERIC(8,5)
                end
                as sum
              from aggregation agr
              join moretvtime_provider prv on agr.provider = prv.name
        ''', [
            FORMATS.get(request.data.get('format'), FORMATS.get('hours')),
            request.data.get('from') or (timezone.now() - timedelta(days=14)).strftime('dd-MM-YYYY hh:mm:ss'),
            request.data.get('to') or (timezone.now()).strftime('dd-MM-YYYY hh:mm:ss'),
    ]), safe=False)