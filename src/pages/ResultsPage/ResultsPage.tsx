import * as React from "react";
import { BooksList } from "../../containers/BooksList";
import SearchForm from "../../containers/SearchForm";

export interface IResultsPageProps {
  q: string;
  printType?: string;
}

class ResultsPage extends React.Component<IResultsPageProps> {
  public render() {
    const { q } = this.props;

    return (
      <React.Fragment>
        <SearchForm value={q} />
        <BooksList q={q} />
      </React.Fragment>
    );
  }
}

export default ResultsPage;
