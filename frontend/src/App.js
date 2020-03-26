import React, { createContext } from "react";
import { Query } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ME_QUERY } from "./graphql/queries";

import Loading from "./shared/Loading";
import Error from "./shared/Error";
import Home from "./pages/Home";

export const UserContext = createContext();

const App = () => (
  <Query query={ME_QUERY} fetchPolicy="cache-and-network">
    {/* this tells apollo to check the cache and also make a network call */}
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <Error error={error} />;
      const currentUser = data.me;
      console.log(currentUser);

      return (
        <Router>
          <UserContext.Provider value={currentUser}>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </UserContext.Provider>
        </Router>
      );
    }}
  </Query>
);

export default App;
