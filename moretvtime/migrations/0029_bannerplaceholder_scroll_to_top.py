# Generated by Django 2.0.6 on 2018-11-27 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0028_banner_autoremove'),
    ]

    operations = [
        migrations.AddField(
            model_name='bannerplaceholder',
            name='scroll_to_top',
            field=models.BooleanField(default=False, verbose_name='scroll button to top'),
        ),
    ]
