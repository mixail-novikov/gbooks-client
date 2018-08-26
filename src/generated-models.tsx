/* tslint:disable */

export namespace Books {
  export type Variables = {
    q: string;
  };

  export type Query = {
    __typename?: "Query";
    volumes?: Volumes | null;
  };

  export type Volumes = {
    __typename?: "VolumeResponse";
    items?: (Items | null)[] | null;
  };

  export type Items = {
    __typename?: "Book";
    title?: string | null;
    id: string;
    date?: string | null;
  };
}

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

export namespace Books {
  export interface ComponentProps {
    query?: any;
    variables?: Variables;
    children: (result: ReactApollo.QueryResult<Query, Variables>) => React.ReactNode;
  }
  export class Component extends React.Component<ComponentProps> {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={gql` query Books($q: String!) {
  volumes(q: $q) {
    items {
      title
      id
      date(format: "YYYY")
    }
  }
} `}
          {...this.props}
        />
      );
    }
  }
}

export namespace Books {
  export function HOC<TProps = {}>(
    operationOptions: ReactApollo.OperationOption<TProps, Query, Variables>
  ) {
    return ReactApollo.graphql<TProps, Query, Variables>(
      gql` query Books($q: String!) {
  volumes(q: $q) {
    items {
      title
      id
      date(format: "YYYY")
    }
  }
} `,
      operationOptions
    );
  }
}
