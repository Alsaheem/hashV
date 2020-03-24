import graphene
from graphql import GraphQLError
from graphene_django import DjangoObjectType
from graphene import relay
from .models import  Post,Category,Like

class PostType(DjangoObjectType):
    likes_count = graphene.String(source='likes_count')
    class Meta:
        model=Post
        interfaces = (relay.Node, )

class PostConnection(relay.Connection):
    class Meta:
        node = PostType

class LikeType(DjangoObjectType):
    class Meta:
        model = Like

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category

class Query(graphene.ObjectType):
    post = graphene.Field(PostType, id = graphene.Int(required=True))
    category = graphene.Field(CategoryType, id = graphene.Int(required=True))
    posts = relay.ConnectionField(PostConnection)
    likes = graphene.List(LikeType)
    categories = graphene.List(CategoryType)

    def resolve_post(self,info,id):
        return Post.objects.get(id=id)

    def resolve_posts(root,info, **kwargs):
        return Post.objects.all()

    def resolve_myPosts(self,info):
        user_id = info.context.user.id
        if user.is_anonymous:
          raise GraphQLError('You are not Logged In')
        return Post.objects.filter(id=user_id)

    def resolve_userPosts(self,info,**kwargs):
        user_id = kwargs.get('id')
        if user.is_anonymous:
          raise GraphQLError('You are not Logged In')
        return Post.objects.filter(id=user_id)

    def resolve_likes(self,info):
      return Like.objects.all()

    def resolve_categories(self,info):
        return Category.objects.all()

    def resolve_categoryPosts(self,info,id):
        if id is not None:
            category = Category.objects.get(id=id)
            return Posts.objects.get(category=category)
        else:
            raise GraphQLError('No category with that id found')
