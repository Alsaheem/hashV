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