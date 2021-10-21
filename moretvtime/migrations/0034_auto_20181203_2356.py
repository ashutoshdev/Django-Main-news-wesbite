# Generated by Django 2.0.6 on 2018-12-03 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0033_auto_20181202_2038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bannerbutton',
            name='type',
            field=models.TextField(choices=[('button', 'button'), ('iframe', 'iframe'), ('redirect', 'redirect'), ('captcha', 'captcha'), ('final', 'final')], default='button', verbose_name='action type'),
        ),
    ]