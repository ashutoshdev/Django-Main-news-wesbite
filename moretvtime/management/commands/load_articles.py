import re
import requests
from bs4 import BeautifulSoup
from django.core.management.base import BaseCommand
from django.utils import timezone

from moretvtime.models import Article, Category


class Command(BaseCommand):
    help = u'Retrieving arkadiumarena statistics and items'

    def add_arguments(self, parser):
        parser.add_argument('proxy', type=str, default=0, nargs='?')

    def handle(self, *args, **options):
        print('[Articles] Start: ' + str(options))

        server = 'http://127.0.0.1:5000'

        # categories = requests.get('http://moretvtime.com').text
        categories = requests.get(server).text
        soup = BeautifulSoup(categories, "html.parser")
        for category in soup.findAll('div', {'class': 'carousel-slider'}):
            cat = category.find('a', {'rel': 'category tag'})
            c_name = cat.text
            c_url = str.split(cat.attrs.get('href'), '/')[2]
            cat, _ = Category.objects.get_or_create(
                name=c_name,
                url=c_url
            )

            for article in category.findAll('div', {'class', 'item'}):
                a_text = article.find('h3', {'class': 'entry-title'}).find('a')
                a_title = a_text.attrs.get('title')
                a_href = a_text.attrs.get('href')
                a_url = str.split(a_href, '/')
                a_url = a_url[len(a_url) - 2]

                a_img = article.find('img')
                a_img_url = str.split(a_img.attrs.get('srcset'), ',')
                a_img_url = a_img_url[len(a_img_url) - 1]
                a_img_url = str.split(str.lstrip(a_img_url, ' '), ' ')[0]

                r = requests.get(server + a_img_url, allow_redirects=True)
                filename = a_url + '.jpg'
                open('moretvtime/static/images/articles/' + filename, 'wb').write(r.content)

                article, _ = Article.objects.get_or_create(
                    url=a_url,
                    title=a_title,
                    thumbnail=filename,
                    category=cat
                )

                a_data = BeautifulSoup(requests.get(server + a_href).text, "html.parser")
                article.article_html = str(a_data.find('article'))
                article_text = a_data.find(id="article-content")
                article.article_text = article_text.text if article_text else article_text
                article.video = a_data.find('div', {'class': 'video_cover'}).findChild().attrs.get('id')

                article.save()


def do_soup(soup, tag, cls):
    sp = soup.find(tag, cls)
    if sp:
        return sp.prettify(formatter='html')
    else:
        return ''


def get_filename_from_cd(cd):
    """
    Get filename from content-disposition
    """
    if not cd:
        return None
    fname = re.findall('filename=(.+)', cd)
    if len(fname) == 0:
        return None
    return fname[0]

