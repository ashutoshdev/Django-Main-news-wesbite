# Generated by Django 2.0.6 on 2018-11-18 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0017_auto_20181111_2202'),
    ]

    operations = [
        migrations.AddField(
            model_name='tracking',
            name='last_popunder_view_date',
            field=models.DateTimeField(blank=True, default=None, null=True, verbose_name='last_mc_view_date'),
        ),
    ]