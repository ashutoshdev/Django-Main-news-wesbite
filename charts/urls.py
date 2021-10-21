from django.urls import path

from charts.views import IndexView, providers

app_name='charts'

urlpatterns = [
    path('', IndexView.as_view(),  name='index'),

    path('providers/', providers, name='providers'),
]