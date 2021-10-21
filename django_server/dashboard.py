import logging

from django.contrib.auth.models import AnonymousUser
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from rest_framework.authentication import SessionAuthentication

from moretvtime.db import fetch_all

logger = logging.getLogger(__name__)


class DashboardView(TemplateView):
    template_name = 'admin/dashboard.html'
    permission_classes = []
    authentication_classes = (SessionAuthentication,)

    def get_context_data(self):
        context = super(DashboardView, self).get_context_data()
        context['tracking'] = fetch_all('''
            with data as (
                  select (DATE(TO_CHAR(date, 'YYYY-MM-dd'))) as trdate, * from moretvtime_tracking where date > current_date - 14
                )
            select trdate as date, provider, country, count(id) from data
             group by trdate, provider, country
             order by trdate desc, provider, country;
        ''')
        return context

    def get(self, request, *args, **kwargs):
        response = super(DashboardView, self).get(request, *args, **kwargs)

        if self.request.user == AnonymousUser():
            return HttpResponseRedirect('/')

        return response
