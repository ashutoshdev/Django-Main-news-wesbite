from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path

from moretvtime.sitemap import MoretvtimeSitemap
from moretvtime.views import submit

urlpatterns = [
    path('admin/charts/', include('charts.urls')),
    path('admin/', admin.site.urls),
    path('djrichtextfield/', include('djrichtextfield.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': {
        'moretvtime': MoretvtimeSitemap
    }}, name='django.contrib.sitemaps.views.sitemap'),

    path('', include('tracking.urls')),
    path('', include('moretvtime.urls')),
    path('offerwall/', include('offerwall.urls')),
    path('dashboard/', include('dashboard.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()
