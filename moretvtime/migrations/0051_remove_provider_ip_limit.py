# Generated by Django 2.0 on 2019-01-26 10:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0050_auto_20190122_0310'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='provider',
            name='ip_limit',
        ),
    ]
