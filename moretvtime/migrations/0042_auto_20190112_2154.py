# Generated by Django 2.0.6 on 2019-01-12 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('moretvtime', '0041_auto_20190110_0353'),
    ]

    operations = [
        migrations.AddField(
            model_name='tracking',
            name='extra1',
            field=models.TextField(blank=True, default='', null=True, verbose_name='extra1'),
        ),
        migrations.AddField(
            model_name='tracking',
            name='extra2',
            field=models.TextField(blank=True, default='', null=True, verbose_name='extra2'),
        ),
        migrations.AddField(
            model_name='tracking',
            name='extra3',
            field=models.TextField(blank=True, default='', null=True, verbose_name='extra3'),
        ),
    ]
