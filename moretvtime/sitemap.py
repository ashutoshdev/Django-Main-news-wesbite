from django.contrib.sitemaps import Sitemap

from moretvtime.models import Article


class MoretvtimeSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return Article.objects.all()

    def location(self, obj):
        return '/{0}/{1}/{2}/'.format(obj.category_id , obj.category.url , obj.url)

    def lastmod(self, obj):
        return obj.created