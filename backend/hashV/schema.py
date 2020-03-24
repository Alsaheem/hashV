import graphene
import graphql_jwt
import users.mutations
import users.queries
import blog.queries
import blog.mutations

class Query(blog.queries.Query,users.queries.Query, graphene.ObjectType):
  pass

class Mutation(blog.mutations.Mutation, users.mutations.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query,mutation=Mutation)
