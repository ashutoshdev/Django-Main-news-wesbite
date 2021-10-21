# Generated by Django 2.0 on 2019-02-20 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0059_auto_20190221_0136'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sendmoney',
            name='company_amount',
        ),
        migrations.RemoveField(
            model_name='sendmoney',
            name='user_amount',
        ),
        migrations.AddField(
            model_name='sendmoney',
            name='companyamount',
            field=models.FloatField(default=0.0, null=True, verbose_name='companyamount'),
        ),
        migrations.AddField(
            model_name='sendmoney',
            name='useramount',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='useramount'),
        ),
    ]
