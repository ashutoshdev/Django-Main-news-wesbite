# Generated by Django 2.0 on 2019-01-27 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0051_remove_provider_ip_limit'),
    ]

    operations = [
        migrations.AddField(
            model_name='banner',
            name='is_public',
            field=models.BooleanField(default=False, verbose_name='is public banner'),
        ),
        migrations.AddField(
            model_name='banner',
            name='public_order',
            field=models.IntegerField(default=0, verbose_name='order'),
        ),
    ]
