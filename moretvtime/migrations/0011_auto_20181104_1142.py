# Generated by Django 2.0.6 on 2018-11-04 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0010_article_video_html'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='video_html',
            field=models.TextField(blank=True, default='', null=True, verbose_name='video html'),
        ),
    ]
