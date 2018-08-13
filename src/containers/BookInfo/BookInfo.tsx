import * as React from "react";
import { BookQuery, IBookQueryVariables, query } from "./BookQuery";

export interface IBookInfoProps extends IBookQueryVariables {
  id: string;
}

export const BookInfo: React.SFC<IBookInfoProps> = ({ id }) => (
  <BookQuery query={query} variables={{ id }}>
    {({ data, loading, error }) => {
      if (loading) {
        return "Loading...";
      }

      if (error) {
        return "Error";
      }

      return data && data.volume && <div>{data.volume.title}</div>;
    }}
  </BookQuery>
);
