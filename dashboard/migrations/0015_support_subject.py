# Generated by Django 2.0.6 on 2019-02-25 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0014_remove_support_subject'),
    ]

    operations = [
        migrations.AddField(
            model_name='support',
            name='subject',
            field=models.TextField(default='', verbose_name='subject'),
        ),
    ]
