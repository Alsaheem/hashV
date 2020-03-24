from django.db import models

# Create your models here.
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    bio = models.TextField(max_length=200)
    profile_pic = models.FileField(upload_to="images",null=True,blank=True)
    url = models.URLField()
