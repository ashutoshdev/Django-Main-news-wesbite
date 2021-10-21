# Generated by Django 2.1.3 on 2018-12-02 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0030_bannerplaceholder_is_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='BannerButton',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(default='', verbose_name='name')),
                ('text', models.TextField(default='', verbose_name='text')),
                ('type', models.TextField(choices=[('button', 'button'), ('redirect', 'redirect'), ('final', 'final')], default='button', verbose_name='action type')),
            ],
        ),
        migrations.AddField(
            model_name='bannerplaceholder',
            name='banner_button',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='banner_button', to='moretvtime.BannerButton', verbose_name='banner button'),
        ),
    ]
