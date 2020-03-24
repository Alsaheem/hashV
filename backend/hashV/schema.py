import graphene
import graphql_jwt
import users.mutations
import users.queries
import blog.queries
import blog.mutations

class Query(blog.queries.Query,users.queries.Query, graphene.ObjectType):
  pass

class Mutation(blog.mutations.Mutation, users.mutations.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query,mutation=Mutation)
