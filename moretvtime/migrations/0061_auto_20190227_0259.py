# Generated by Django 2.0.6 on 2019-02-26 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0060_auto_20190221_0137'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='captchatrigger',
            index=models.Index(fields=['ip', 'last_trigger_date'], name='moretvtime__ip_1d134c_idx'),
        ),
    ]
