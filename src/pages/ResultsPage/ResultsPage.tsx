import * as React from "react";
import { BooksList, IBooksItem } from "../../containers/BooksList";
import SearchForm from "../../containers/SearchForm";

export interface IResultsPageProps {
  q: string;
  printType?: string;
}

const renderBook = ({ title, id }: IBooksItem) => <div key={id}>{title}</div>;

class ResultsPage extends React.Component<IResultsPageProps> {
  public render() {
    const { q } = this.props;

    return (
      <React.Fragment>
        <SearchForm value={q} />
        <BooksList q={q} renderBook={renderBook} />
      </React.Fragment>
    );
  }
}

export default ResultsPage;
