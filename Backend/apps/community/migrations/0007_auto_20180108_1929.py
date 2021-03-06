# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-01-08 19:29
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('community', '0006_auto_20180108_1859'),
    ]

    operations = [
        migrations.CreateModel(
            name='usuarios',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('sexo', models.CharField(max_length=1)),
                ('telefono', models.CharField(max_length=8)),
                ('direccion', models.CharField(max_length=60)),
                ('foto', models.ImageField(upload_to='foto_usuarios')),
                ('usuario', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='like',
            name='id_like',
        ),
        migrations.RemoveField(
            model_name='proyecto',
            name='id_categoria',
        ),
        migrations.RemoveField(
            model_name='publicacion',
            name='id_publicacion',
        ),
        migrations.AddField(
            model_name='proyecto',
            name='categoria',
            field=models.CharField(default='', max_length=20),
        ),
    ]
