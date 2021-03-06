# Generated by Django 2.0 on 2019-02-12 12:23

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0006_rfcompany'),
    ]

    operations = [
        migrations.CreateModel(
            name='DashboardCompany',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companyname', models.TextField(default='', verbose_name='companyname')),
                ('bannerloads', models.PositiveIntegerField(default=0)),
                ('clicks', models.PositiveIntegerField(default=0)),
                ('date', models.DateField(auto_now_add=True)),
                ('time', models.TimeField(auto_now_add=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='rfcompany',
            name='date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rfcompany',
            name='time',
            field=models.TimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
