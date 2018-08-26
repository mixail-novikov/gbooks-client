import * as React from "react";
import { Book } from "../../components/Book";
import { BooksQuery, IBooksItem, query } from "./BooksQuery";

export { IBooksItem };

export interface IBooksListProps {
  q: string;
}

export const BooksList: React.SFC<IBooksListProps> = ({ q }) => (
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
        data.volumes.items.map((props: IBooksItem) => (
          <Book key={props.id} {...props} />
        ))
      );
    }}
  </BooksQuery>
);
