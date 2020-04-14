import graphene
from graphql import GraphQLError
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene import relay
from .models import  Post,Category,Like
from django.db.models import Q

class PostType(DjangoObjectType):
    likes_count = graphene.String(source='likes_count')
    class Meta:
        model=Post
        # Allow for some more advanced filtering here
        filter_fields = {
            'title': ['exact', 'icontains', 'istartswith'],
            'description': ['exact', 'icontains', 'istartswith'],
            'posted_by__username': ['exact', 'icontains']
        }
        interfaces = (relay.Node, )

class LikeType(DjangoObjectType):
    class Meta:
        model = Like

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category

class Query(graphene.ObjectType):
    post = graphene.Field(PostType, id = graphene.Int(required=True))
    category = graphene.Field(CategoryType, id = graphene.Int(required=True))
    posts = DjangoFilterConnectionField(PostType)
    likes = graphene.List(LikeType)
    categories = graphene.List(CategoryType)

    def resolve_post(self,info,id):
        return Post.objects.get(id=id)

    def resolve_posts(root,info,search=None, **kwargs):
        if search:
            filter =  (
              Q(title__icontains=search) |
              Q(description__icontains=search) |
              Q(posted_by__username__icontains=search)
            )
            return Post.objects.filter(filter)
        return Post.objects.all()

    def resolve_myPosts(self,info):
        user_id = info.context.user.id
        user = info.context.user
        if user.is_anonymous:
          raise GraphQLError('You are not Logged In')
        return Post.objects.filter(posted_by_id=user_id)

    def resolve_userPosts(self,info,**kwargs):
        user = info.context.user
        user_id = kwargs.get('id')
        if user.is_anonymous:
          raise GraphQLError('You are not Logged In')
        return Post.objects.filter(posted_by_id=user_id)

    def resolve_likes(self,info):
      return Like.objects.all()

    def resolve_categories(self,info):
        return Category.objects.all()

    def resolve_categoryPosts(self,info,id=None):
        if id is not None:
            category = Category.objects.get(id=id)
            return Post.objects.get(category=category)
        else:
            raise GraphQLError('No category with that id found')
