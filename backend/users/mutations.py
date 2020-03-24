import graphene
from graphql import GraphQLError

from django.contrib.auth.models import User
from graphene_django import DjangoObjectType

from .queries import  UserType

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self,info,username,email,password):
        user = User(username=username,password=password,email=email)
        user.set_password(password)
        user.save()
        return CreateUser(user=user)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
