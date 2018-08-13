import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { apolloClient } from "./apolloClient";

interface IAppProviderProps {
  children: JSX.Element | JSX.Element[];
}
export const AppProvider: React.SFC<IAppProviderProps> = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <React.Fragment>{children}</React.Fragment>
    </Router>
  </ApolloProvider>
);
