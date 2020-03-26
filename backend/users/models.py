from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    bio = models.TextField(max_length=200)
    profile_pic = models.FileField(upload_to="images",null=True,blank=True)
    url = models.URLField()

    def __str__(self):
      return '{} - Profile'.format(self.user.username)


@receiver(post_save, sender=User)
def user_is_created(sender, instance, created, **kwargs):
    print(created)
    if created:
        Profile.objects.create(user=instance)
    else:
        instance.profile.save()


@property
def full_name(self):
    return "{} {}".format(self.first_name, self.last_name)

User.add_to_class('full_name', full_name)
