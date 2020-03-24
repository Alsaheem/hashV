from django.contrib import admin

# Register your models here.
from .models import Like,Post,Category


admin.site.register(Like)
admin.site.register(Post)
admin.site.register(Category)
