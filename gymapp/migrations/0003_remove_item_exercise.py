# Generated by Django 2.2.5 on 2019-09-04 21:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gymapp', '0002_auto_20190904_2150'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='exercise',
        ),
    ]
