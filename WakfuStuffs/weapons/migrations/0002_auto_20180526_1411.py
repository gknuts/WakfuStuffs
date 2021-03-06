# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-05-26 12:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('weapons', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='weapontag',
            name='tag',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tag', to='weapons.Tag'),
        ),
        migrations.AlterField(
            model_name='weapontag',
            name='weapon',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='weapon', to='weapons.Weapon'),
        ),
    ]
