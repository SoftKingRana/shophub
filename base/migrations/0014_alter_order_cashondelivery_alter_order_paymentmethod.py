# Generated by Django 4.0.1 on 2022-01-26 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_alter_order_cashondelivery_alter_order_paymentmethod'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='cashOnDelivery',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='paymentMethod',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
