# Generated by Django 2.0.6 on 2018-11-21 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0024_auto_20181121_2126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bannerplaceholder',
            name='order',
            field=models.IntegerField(default=0, verbose_name='order'),
        ),
    ]
