from django.contrib.gis.geoip2 import GeoIP2
from django.core.management.base import BaseCommand

from moretvtime.models import Tracking


class Command(BaseCommand):
    help = u'Retrieving arkadiumarena statistics and items'

    def add_arguments(self, parser):
        parser.add_argument('proxy', type=str, default=0, nargs='?')

    def handle(self, *args, **options):
        print('[Articles] Start: ' + str(options))

        data = Tracking.objects.filter(country='')
        data_len = len(data)
        for i, track in enumerate(data):
            try:
                country = GeoIP2().country_code(track.ip)

                if country:
                    track.country = country
                    track.save()
            except Exception as e:
                print('ip: {0}, country not available, done {1} of {2}'.format(str(track.ip), str(i), str(data_len)))
                continue
