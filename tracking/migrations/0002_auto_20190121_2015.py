# Generated by Django 2.0 on 2019-01-21 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracking', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='referrercompany',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='referrercountry',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='visitor',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
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
            field=models.CharField(max_length=65),
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
