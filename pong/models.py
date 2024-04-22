from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.jpg')
    display_name = models.CharField(max_length=30, unique=True)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
