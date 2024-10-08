# Generated by Django 3.2.25 on 2024-07-21 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yekatit', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=255)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('content', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='announcements/')),
            ],
        ),
    ]
