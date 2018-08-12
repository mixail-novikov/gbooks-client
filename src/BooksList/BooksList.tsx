import * as React from "react";
import { BooksQuery, IBooksItem, IBooksVariables, query } from "./BooksQuery";

export { IBooksItem };

export interface IBooksListProps extends IBooksVariables {
  renderBook: (book: IBooksItem) => JSX.Element;
}

export const BooksList: React.SFC<IBooksListProps> = ({ q, renderBook }) => (
  <BooksQuery query={query} variables={{ q }}>
    {({ loading, error, data }) => {
      if (loading) {
        return "Loading...";
      }

      if (error) {
        return "Error!";
      }

      return (
        data &&
        data.volumes &&
        data.volumes.items &&
        data.volumes.items.map(renderBook)
      );
    }}
  </BooksQuery>
);
