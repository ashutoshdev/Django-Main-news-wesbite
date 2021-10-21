from django.conf import settings
from django.conf import global_settings
        
TRACKING_TIMEOUT = getattr(settings, 'TRACKING_TIMEOUT', '10')
USE_GEOIP = getattr(settings, 'TRACKING_USE_GEOIP', False)
CACHE_TYPE = getattr(settings, 'GEOIP_CACHE_TYPE', 4)
STATIC_URL = getattr(settings, 'STATIC_URL', global_settings.STATIC_URL)
MEDIA_URL = getattr(settings, 'MEDIA_URL', global_settings.MEDIA_URL)
NO_TRACKING_PREFIXES = getattr(settings, 'NO_TRACKING_PREFIXES', [])