import graphene
from graphql import GraphQLError

from django.contrib.auth.models import User
from graphene_django import DjangoObjectType
from .models import Profile

class UserType(DjangoObjectType):
    class Meta:
        model=User
        # only_fields = ('id','email','password','username')

class ProfileType(DjangoObjectType):
    class Meta:
        model=Profile

class Query(graphene.ObjectType):
    user = graphene.Field(UserType,id = graphene.Int(required=True))
    me = graphene.Field(UserType)
    users = graphene.List(UserType)

    def resolve_user(self,info,id):
        return User.objects.get(id=id)

    def resolve_users(self,info,search=None):

        if search:
            filter =  (
              Q(username__icontains=search) |
              Q(firstName__icontains=search) |
              Q(lastName__icontains=search) |
              Q(email__icontains=search)
            )
            return User.objects.filter(filter)
        return User.objects.all()

    def resolve_me(self,info):
        user = info.context.user
        if user.is_anonymous:
          raise GraphQLError('You are not Logged In')
        return user
