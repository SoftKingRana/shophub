# Generated by Django 4.0.1 on 2022-01-26 01:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_alter_order_cashondelivery_alter_order_paymentmethod'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='cashOnDelivery',
        ),
    ]
