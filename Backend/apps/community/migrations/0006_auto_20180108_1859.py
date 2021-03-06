# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-01-08 18:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0005_remove_proyecto_id_usuario'),
    ]

    operations = [
        migrations.DeleteModel(
            name='usuarios',
        ),
        migrations.RemoveField(
            model_name='comentario',
            name='fecha',
        ),
        migrations.RemoveField(
            model_name='proyecto',
            name='objetivo',
        ),
        migrations.RemoveField(
            model_name='publicacion',
            name='foto',
        ),
        migrations.AlterField(
            model_name='comentario',
            name='contenido',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='comentario',
            name='id_comentario',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AlterField(
            model_name='comentario',
            name='id_usuario',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AlterField(
            model_name='like',
            name='id_like',
            field=models.CharField(max_length=4),
        ),
        migrations.AlterField(
            model_name='like',
            name='id_proyecto',
            field=models.CharField(max_length=4),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='descripcion',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='id_categoria',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='lugar',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='nombre',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='descripcion',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='id_publicacion',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AlterField(
            model_name='publicacion',
            name='id_usuario',
            field=models.CharField(default='', max_length=4),
        ),
    ]
