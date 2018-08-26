import * as React from "react";
import { Book } from "../../components/Book";
import { Books } from "../../generated-models";

export interface IBooksListProps {
  q: string;
}

export const BooksList: React.SFC<IBooksListProps> = ({ q }) => (
  <Books.Component variables={{ q }}>
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
        data.volumes.items.map((props: Books.Items) => <Book key={props.id} {...props} />)
      );
    }}
  </Books.Component>
);
