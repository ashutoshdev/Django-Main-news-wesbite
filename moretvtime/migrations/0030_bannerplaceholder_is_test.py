# Generated by Django 2.1.3 on 2018-12-02 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0029_bannerplaceholder_scroll_to_top'),
    ]

    operations = [
        migrations.AddField(
            model_name='bannerplaceholder',
            name='is_test',
            field=models.BooleanField(default=False, verbose_name='is test'),
        ),
    ]
