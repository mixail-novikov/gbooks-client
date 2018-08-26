import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  Books,
  Books_volumes_items,
  BooksVariables
} from "./__generated__/Books";

type IBooksVariables = Partial<BooksVariables>;

export {
  Books_volumes_items as IBooksItem,
  Books as IBooksData,
  IBooksVariables
};

export class BooksQuery extends Query<Books, IBooksVariables> {}

export const query = gql`
  query Books($q: String!) {
    volumes(q: $q) {
      items {
        title
        id
        date(format: "YYYY")
      }
    }
  }
`;
