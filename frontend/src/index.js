import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import Auth from "./Auth";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  fetchOptions: {
    credentials: "include"
  },
  // to set headers for all request
  request: operation => {
    const token = localStorage.getItem("token") || "";
    operation.setContext({
      headers: {
        Authorization: `JWT ${token}`
      }
    });
  },
  // to set theclient state to logged in or logged out
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem("token")
      // returns a boolean if the user is logged in or Not
    }
  }
});


//to check if user is logged in
const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`;

console.log(IS_LOGGED_IN)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>
      {({ data }) => (data.isLoggedIn ? <App /> : <Auth />)}
    </Query>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
