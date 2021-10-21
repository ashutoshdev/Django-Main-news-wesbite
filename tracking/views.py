import hashlib
import logging
import re
from datetime import timedelta

from django.contrib.auth.models import AnonymousUser
from django.db.utils import DatabaseError
from django.http import HttpResponse
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from django_server.utils import get_client_ip, get_client_country, is_bot
from tracking import settings
from tracking.models import Visitor, ReferrerCompany, ReferrerCountry, AllVisitor

log = logging.getLogger('tracking.views')

title_re = re.compile('<title>(.*?)</title>')

##
# Prepare static restrictions before start server
#
restricted_prefixes = settings.NO_TRACKING_PREFIXES
if settings.MEDIA_URL and settings.MEDIA_URL != '/':
    restricted_prefixes.append(settings.MEDIA_URL)
if settings.STATIC_URL and settings.STATIC_URL != '/':
    restricted_prefixes.append(settings.STATIC_URL)


@csrf_exempt
@api_view(['POST'])
def update_view(request):
    request.path = request.data.get('pth')
    n_provider = request.data.get('native_p')
    offerwall_referrer = request.data.get('oref')
    user_agent = request.META.get('HTTP_USER_AGENT', '')

    # Important checks
    if is_bot(request) or is_restricted_path(request.path):
        return HttpResponse()

    ip_address = get_client_ip(request)
    country = get_client_country(request)
    session_key = get_session_key(request, user_agent)

    # if we get here, the URL needs to be tracked
    now = timezone.now()
    twenty_four_ago = now - timedelta(hours=24)

    visitor = Visitor()
    if n_provider:
        visitor.session_key = session_key
        visitor.ip_address = ip_address
        visitor.referrer = n_provider
    if offerwall_referrer:
        visitor.offerwall_referrer = offerwall_referrer
        visitor.session_key = session_key
        visitor.ip_address = ip_address
    else:
        visitors = Visitor.objects.filter(
            session_key=session_key,
            ip_address=ip_address
        ).order_by('-id').first()

        if visitors:
            v = visitors
            visitor.session_key = v.session_key
            visitor.ip_address = v.ip_address
            visitor.referrer = v.referrer
            visitor.offerwall_referrer = v.offerwall_referrer


    user = request.user
    if isinstance(user, AnonymousUser):
        user = None

    visitor.page_views = 1
    visitor.user = user
    visitor.user_agent = user_agent
    visitor.session_start = now
    visitor.url = request.path
    visitor.country = country
    visitor.last_update = now

    if visitor.referrer:
        vstr = Visitor.objects.filter(
            session_key=session_key,
            ip_address=ip_address,
            url=request.path,
            referrer=visitor.referrer
        ).order_by('-id').first()

        if not vstr or vstr.last_update <= twenty_four_ago:
            update_company_and_country(request, visitor)
            visitor.save()

    elif visitor.offerwall_referrer:
        vstr = Visitor.objects.filter(
            session_key=session_key,
            ip_address=ip_address,
            url=request.path,
            offerwall_referrer=visitor.referrer
        ).order_by('-id').first()

        if not vstr or vstr.last_update <= twenty_four_ago:
            visitor.save()

    return HttpResponse("done")


@csrf_exempt
@api_view(['POST'])
def allupdate_view(request):
    n_provider = request.data.get('native_p')
    request.path = request.data.get('pth', None)
    user_agent = request.META.get('HTTP_USER_AGENT', '')

    # Important checks
    if is_bot(request) or is_restricted_path(request.path):
        return HttpResponse()

    ip_address = get_client_ip(request)
    country = get_client_country(request)
    session_key = get_session_key(request, user_agent)

    # if we get here, the URL needs to be tracked
    now = timezone.now()
    try:
        allvisitor = AllVisitor.objects.get(
            session_key=session_key,
            ip_address=ip_address
        )
        if n_provider:
            allvisitor.referrer = n_provider
            allvisitor.page_views = 0
            allvisitor.session_start = now
        else:
            allvisitor.page_views += 1

    except AllVisitor.DoesNotExist:
        allvisitor = AllVisitor()
        allvisitor.session_key = session_key
        allvisitor.ip_address = ip_address
        allvisitor.referrer = n_provider
        allvisitor.page_views = 0
        allvisitor.session_start = now

    except:
        return HttpResponse("does not track")

    # determine whether or not the user is logged in
    user = request.user
    if isinstance(user, AnonymousUser):
        user = None

    # update the tracking information
    allvisitor.user = user
    allvisitor.user_agent = user_agent
    allvisitor.url = request.path
    allvisitor.country = country
    allvisitor.last_update = now

    try:
        allvisitor.save()

    except DatabaseError as e:
        log.error('Problem when saving visitor')

    return HttpResponse("done")


# ensure that the request.path does not begin with any of the restricted prefixes
def is_restricted_path(path):
    if not path:
        return False
    if path == '/':
        return True
    for prefix in restricted_prefixes:
        if path.startswith(prefix):
            log.debug('Not tracking request to: %s' % path)
            return True
    return False


# Create or generate user sesion key
def get_session_key(request, user_agent):
    if hasattr(request, 'session') and request.session.session_key:
        # use the current session key if we can
        return request.session.session_key
    else:
        # otherwise just fake a session key
        return hashlib.sha256(str(user_agent[:255]).encode('utf-8')).hexdigest()


# Update information in reffered company and country
def update_company_and_country(request, visitor):
    referrercompany,_ = ReferrerCompany.objects.get_or_create(
        companyname=visitor.referrer
    )

    if request.path != '/':
        referrercompany.totalview += 1
        referrercompany.save()

    referrercountry,_ = ReferrerCountry.objects.get_or_create(
        country=visitor.country,
        referrercompany=referrercompany
    )

    if request.path != '/':
        referrercountry.totalview += 1
        referrercountry.save()


@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def sticky_impression(request):
    referrer = request.data.get('referrer', None)
    cnt = request.data.get('cnt', None)
    referrercompany, created = ReferrerCompany.objects.get_or_create(
        companyname=referrer
    )
    if referrercompany:
        referrercompany.bannerloads += cnt
        referrercompany.save()

    return HttpResponse("done")

@csrf_exempt
@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def clicks_impression(request):
    referrer = request.data.get('referrer', None)
    referrercompany, created = ReferrerCompany.objects.get_or_create(
        companyname=referrer
    )
    if referrercompany:
        referrercompany.clicks += 1
        referrercompany.save()

    return HttpResponse("done")




