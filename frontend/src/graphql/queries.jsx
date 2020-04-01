import { gql } from "apollo-boost";

export const ME_QUERY = gql`
query {
  me{
    id
    username
    profile{
      id
      url
      profilePic
    }
  }
}
`;


export const GET_POSTS_QUERY = gql`
{
  posts{
    edges{
      node{
        id
        title
        createdAt
        postImageUrl
        category{
          name
        }
        postedBy{
          id
          username
        }
        title
        description
        likesCount
      }
    }
  }
}
`;