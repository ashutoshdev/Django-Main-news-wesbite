from django.conf.urls import url
from django.urls import path
from django.views.generic import TemplateView

from dashboard import views
from dashboard.views import IndexView, AboutView, FaqView, ForgotPasswordView, MembersView, AddSiteView, SitesView, \
    PaymentView, StatisticsView, SupportView, WidgetsView, AddWidgetView, ContactManagerView, MessageView,\
    ProfileView, EditWidgetView, sticky_impression, clicks_impression

app_name = 'dashboard'

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('about', AboutView.as_view(), name='about'),
    path('faq', FaqView.as_view(), name='faq'),
    path('sign_up', views.register, name='sign_up'),
    path('signin', views.signin, name='signin'),
    path('forgotpassword', ForgotPasswordView.as_view(), name='forgotpassword'),
    path('members', MembersView.as_view(), name='members'),
    path('payment', PaymentView.as_view(), name='payment'),
    path('statistics', StatisticsView.as_view(), name='statistics'),
    path('support', SupportView.as_view(), name='support'),
    path('profile', ProfileView.as_view(), name='profile'),
    path('contactmanager', ContactManagerView.as_view(), name='contactmanager'),
    path('message/<id>', MessageView.as_view(), name='message'),
    path('sites', SitesView.as_view(), name='sites'),
    path('addsite', AddSiteView.as_view(), name='addsite'),
    path('widgets/<id>', WidgetsView.as_view(), name='widgets'),
    path('addwidget/<id>/<wid>', AddWidgetView.as_view(), name='addwidget'),
    path('editwidget/<id>/<wid>', EditWidgetView.as_view(), name='editwidget'),
    path('widget/addwidgetdata', views.add_widget_data_view),
    path('widget/allarticle', views.widget_view),
    path('widget/dashboard_api', views.dashboard_api),
    path('widget/income_update', views.income_update),
    path('widget/getarticle', views.getarticle),
    path('widget/widgetload', views.widget_view_loads),
    path('widget/artcileview', views.widget_view_client),
    url(r'^change_password$', views.change_password, name='change_password'),
    path('remove_items', views.remove_items, name="remove_sites"),
    path('remove_widget_items', views.remove_widget_items, name="remove_widget"),
    url(r'^logout/$', views.logout_view, name='logout'),
    url(r'^sticky_impression/$', sticky_impression, name='sticky_impression'),
    url(r'^clicks_impression/$', clicks_impression, name='clicks_impression'),
    # path('user_logout', name='user_logout'),

    path('404', TemplateView.as_view(template_name="dashboard/404.html"), name='404'),
]
