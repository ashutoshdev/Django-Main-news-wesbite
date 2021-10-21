from django.urls import include, path
from django.views.generic import TemplateView
from rest_framework import routers
from moretvtime import views 
from moretvtime.subviews import faucethub
from django.conf.urls import url,include


from moretvtime.subviews.faucethub import payout
from moretvtime.views import IndexView, ArticleView, CategoryView, submit, Popunder, popunder_seen, solvemedia_solve, \
    TrackerJsView, banner_placeholders, ArticletagView, SubmitView, VideoTestView, analytics, LoginView

app_name='moretvtime' # Important

urlpatterns = [
    path('', IndexView.as_view(),  name='index'),

    path('login', LoginView.as_view(), name='login'),
    path('category/<category>', CategoryView.as_view(), name='category'),
    url(r'^(?P<category_id>[-\d]+)/(?P<category_name>[-\w]+)/(?P<url>[-\w]+)/$', ArticleView.as_view(), name='article'),
    path('articles/<category_id>/<article_url>', ArticletagView.as_view(), name='articles'),
    path('submit', SubmitView.as_view(), name='submit'),

    # Popunder init
    path('articleunder', Popunder.as_view(), name='popunder'),
    path('popunder_seen', popunder_seen, name='popunder_seen'),
    path('solvemedia/solve', solvemedia_solve, name='solvemedia_solve'),
    path('api/placeholders', banner_placeholders, name='banner_placeholders'),
    path('payout', payout, name='payout'),

    # TrackerJS
    path('js/tracker.js', TrackerJsView.as_view(), name='tracker-js'),

    path('faucethub/checkbalance', faucethub.FaucethubCheckBalance),
    path('faucethub/checkaddress', faucethub.FaucethubCheckAddress),
    path('faucethub/send', faucethub.FaucethubCheckSend),
    path('faucethub/chkcompany', faucethub.FaucethubCheckCompany),
    path('faucethub/restarticle', faucethub.FaucethubRestArtcicle),

    path('about/', views.about, name='about'),
    path('term/', views.term, name='term'),
    path('privacy/', views.privacy, name='privacy'),
    path('contact/', views.contact, name='contact'),
    path('video-test', VideoTestView, name='video-test'),
    path('analytics', analytics, name='analytics'),
    #path('chaekcronjob/', views.chaekcronjob, name='chaekcronjob'),

    path('404', TemplateView.as_view(template_name="moretvtime/404.html"), name='404'),
    path('vpn', TemplateView.as_view(template_name="moretvtime/pages/vpn.html"), name='vpn'),
]