# Generated by Django 3.1 on 2020-08-06 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_note_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='image',
            field=models.ImageField(default='img/pass.png', upload_to='img'),
        ),
    ]
