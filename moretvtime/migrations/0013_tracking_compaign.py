# Generated by Django 2.0.6 on 2018-11-07 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0012_tracking_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='tracking',
            name='compaign',
            field=models.TextField(blank=True, default='', null=True, verbose_name='compaign'),
        ),
    ]
