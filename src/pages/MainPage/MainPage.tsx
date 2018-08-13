import * as React from "react";
import { RouteComponentProps } from "react-router";
import SearchForm from "../../containers/SearchForm";

class MainPage extends React.Component<RouteComponentProps<{}>> {
  public render() {
    return <SearchForm />;
  }
}

export default MainPage;
