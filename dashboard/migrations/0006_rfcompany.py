# Generated by Django 2.0 on 2019-02-11 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0005_auto_20190210_2111'),
    ]

    operations = [
        migrations.CreateModel(
            name='RfCompany',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companyname', models.TextField(default='', verbose_name='companyname')),
                ('bannerloads', models.PositiveIntegerField(default=0)),
                ('clicks', models.PositiveIntegerField(default=0)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
