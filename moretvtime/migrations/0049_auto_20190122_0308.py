# Generated by Django 2.0 on 2019-01-21 21:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0048_provider_ip_limit'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Captcha',
            new_name='MCaptcha',
        ),
    ]