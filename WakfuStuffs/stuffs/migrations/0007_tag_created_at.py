# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-05-16 20:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('stuffs', '0006_tag'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
