# Generated by Django 2.2.5 on 2019-09-04 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gymapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='day',
            field=models.CharField(max_length=20),
        ),
    ]
