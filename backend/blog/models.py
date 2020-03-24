from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
      return '{}'.format(self.name)


class Post(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category,related_name='posts',on_delete=models.CASCADE)
    post_image_url = models.URLField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(User,on_delete=models.CASCADE,null=True)

    def __str__(self):
      return '{} - {}'.format(self.title,self.posted_by.username)

    @property
    def likes_count(self):
        return self.likes.count()


class Like(models.Model):
      post = models.ForeignKey(Post,related_name='likes',on_delete=models.CASCADE)
      user = models.ForeignKey(User,on_delete=models.CASCADE)

      def __str__(self):
        return '{} - {}'.format(self.post.title,self.user.username)
