# Generated by Django 2.0 on 2019-01-29 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracking', '0003_auto_20190126_1537'),
    ]

    operations = [
        migrations.AlterField(
            model_name='allvisitor',
            name='ip_address',
            field=models.CharField(max_length=39),
        ),
        migrations.AlterField(
            model_name='allvisitor',
            name='referrer',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='allvisitor',
            name='session_key',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='allvisitor',
            name='url',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='allvisitor',
            name='user_agent',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='ip_address',
            field=models.CharField(max_length=39),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='referrer',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='session_key',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='url',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='user_agent',
            field=models.TextField(default=''),
        ),
    ]
