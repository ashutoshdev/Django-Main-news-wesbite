# Generated by Django 2.0.6 on 2018-11-11 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0016_auto_20181111_2201'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tracking',
            name='last_mc_view_date',
            field=models.DateTimeField(blank=True, default=None, null=True, verbose_name='last_mc_view_date'),
        ),
    ]