import logging

from django.views.generic import TemplateView

from moretvtime.models import Article
from offerwall.models import TiniURL

logger = logging.getLogger(__name__)


class IndexView(TemplateView):
    template_name = 'offerwall/index.html'

    def get_context_data(self, **kwargs):

        provider = self.request.GET.get('p','')
        referrer = self.request.GET.get('r','')

        ref = ''
        if referrer and provider:
            ref = '?native-provider={0}&oref={1}'.format(provider,referrer)

        # if self.request.GET.get(''):
        #     tiniurl = TiniURL.get()

        return {
            'articles': Article.objects.all(),
            'ref': ref
        }



