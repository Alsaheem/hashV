import { gql } from "apollo-boost";

export const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(email: $email, username: $username, password: $password) {
      user {
        username
        email
      }
    }
  }
`;


export const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;