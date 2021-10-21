from django.urls import path

from offerwall.views import IndexView

app_name='charts'

urlpatterns = [
    path('', IndexView.as_view(),  name='index'),

]