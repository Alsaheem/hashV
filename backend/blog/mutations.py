import graphene
from graphql import GraphQLError
from django.contrib.auth.models import User
from graphene_django import DjangoObjectType
from .models import Category,Post,Like
from .queries import  PostType,LikeType,CategoryType
from users.queries import UserType

class CreatePost(graphene.Mutation):
    post = graphene.Field(PostType)

    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        category_id = graphene.Int(required=True)


    def mutate(self,info,title,description,category_id):
        post = Post(title=title,description=description,category_id=category_id)
        user.set_password(password)
        user.save()
        return CreateUser(user=user)


class CreateCategory(graphene.Mutation):
    category = graphene.Field(CategoryType)

    class Arguments:
        name = graphene.String(required=True)

    def mutate(self,info,name):
        if info.context.user.is_superuser:
            category = Category.objects.create(name=name)
            return CreateCategory(category=category)
        else:
            raise GraphQLError('You must be an admin to create a category')

class CreateLike(graphene.Mutation):
    user = graphene.Field(UserType)
    post = graphene.Field(PostType)

    class Arguments:
        post_id = graphene.Int(required=True)

    def mutate(self, info, post_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('You need to be logged in to like this post')
        try:
            post = Post.objects.get(id=post_id)
        except track.DoesNotExist:
            raise GraphQLError('Cannot find post with this id')
        Like.objects.create(post=post,user_id=user.id)
        return CreateLike(user=user,post=post)

class UpdatePost(graphene.Mutation):
    post = graphene.Field(PostType)

    class Arguments:
        post_id = graphene.Int(required=True)
        title = graphene.String()
        description = graphene.String()

    def mutate(self, info, post_id, title, description):
        user = info.context.user
        post = Post.objects.get(id=post_id)
        if post.posted_by != user:
            raise GraphQLError('You are Not Permitted to Update This Post')
        post.title = title
        post.description = description
        post.save()
        return UpdatePost(post=post)


class DeletePost(graphene.Mutation):
    post_id = graphene.Int()

    class Arguments:
        post_id = graphene.Int(required=True)

    def mutate(self, info, post_id):
        user = info.context.user
        post = Post.objects.get(id=post_id)
        if post.posted_by != user:
            raise GraphQLError('You are Not Permitted to Delete This post')
        post.delete()
        return DeletePost(post_id=post_id)



class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    create_category = CreateCategory.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()
    create_like = CreateLike.Field()
