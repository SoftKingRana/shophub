# Generated by Django 4.0.1 on 2022-01-26 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_remove_shippingaddress_phone_no'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='cashOnDelivery',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='order',
            name='paymentMethod',
            field=models.BooleanField(default=False),
        ),
    ]