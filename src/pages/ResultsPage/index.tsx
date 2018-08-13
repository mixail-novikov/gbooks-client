import * as qs from "query-string";
import * as React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { branch, compose, mapProps, renderComponent } from "recompose";
import ResultsPage, { IResultsPageProps } from "./ResultsPage";

export default compose(
  mapProps<IResultsPageProps, RouteComponentProps<{}>>(({ location }) => {
    return qs.parse(location.search);
  }),
  branch(({ q }) => !q, renderComponent(() => <Redirect to="/" />))
)(ResultsPage);
