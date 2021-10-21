# Generated by Django 2.0 on 2019-01-20 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0046_auto_20190115_0023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bannerbutton',
            name='type',
            field=models.TextField(choices=[('button', 'button'), ('iframe', 'iframe'), ('redirect', 'redirect'), ('captcha', 'captcha'), ('autoscroll', 'autoscroll'), ('final', 'final')], default='button', verbose_name='action type'),
        ),
    ]