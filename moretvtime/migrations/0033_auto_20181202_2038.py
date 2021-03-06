# Generated by Django 2.1.3 on 2018-12-02 20:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0032_auto_20181202_1707'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bannerplaceholder',
            name='banner_button',
        ),
        migrations.AddField(
            model_name='bannerplaceholder',
            name='button',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='button', to='moretvtime.BannerButton', verbose_name='banner button'),
        ),
        migrations.AlterField(
            model_name='bannerbutton',
            name='type',
            field=models.TextField(choices=[('button', 'button'), ('iframe', 'iframe'), ('redirect', 'redirect'), ('final', 'final')], default='button', verbose_name='action type'),
        ),
    ]
