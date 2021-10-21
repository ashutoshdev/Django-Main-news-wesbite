# Generated by Django 2.0.6 on 2019-02-16 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracking', '0007_auto_20190203_1337'),
    ]

    operations = [
        migrations.AddField(
            model_name='visitor',
            name='offerwall_referrer',
            field=models.TextField(blank=True, default='', null=True, verbose_name='Offerwall Referrer'),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='referrer',
            field=models.TextField(blank=True, default='', null=True, verbose_name='Native Provider referrer'),
        ),
    ]