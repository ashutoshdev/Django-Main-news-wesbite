# Generated by Django 2.0.6 on 2019-02-25 05:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0013_support_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='support',
            name='subject',
        ),
    ]
