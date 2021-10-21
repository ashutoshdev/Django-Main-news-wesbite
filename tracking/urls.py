from django.urls import include, path
from django.conf.urls import url
from tracking.views import update_view, allupdate_view, sticky_impression, clicks_impression

urlpatterns = [
    url(r'^update_view/$', update_view, name='update_view'),
    url(r'^allupdate_view/$', allupdate_view, name='allupdate_view'),
    url(r'^sticky_impression/$', sticky_impression, name='sticky_impression'),
    url(r'^clicks_impression/$', clicks_impression, name='clicks_impression')
]
