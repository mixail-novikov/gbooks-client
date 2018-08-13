import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  BookInfo,
  BookInfo_volume,
  BookInfoVariables
} from "./__generated__/BookInfo";

export {
  BookInfo as IBookQueryData,
  BookInfoVariables as IBookQueryVariables,
  BookInfo_volume as IBookQueryItem
};

export class BookQuery extends Query<BookInfo, BookInfoVariables> {}

export const query = gql`
  query BookInfo($id: String!) {
    volume(id: $id) {
      id
      title
    }
  }
`;
