# Generated by Django 4.0.1 on 2022-01-25 20:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_rename_userprofile_shopcreate'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='cashInDelivery',
            new_name='cashOnDelivery',
        ),
    ]
