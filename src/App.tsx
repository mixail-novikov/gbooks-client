import * as React from "react";
import { AppProvider } from "./AppProvider";
import "./index.css";
import Pages from "./pages";

export default class App extends React.Component {
  public render() {
    return (
      <AppProvider>
        <Pages />
      </AppProvider>
    );
  }
}
