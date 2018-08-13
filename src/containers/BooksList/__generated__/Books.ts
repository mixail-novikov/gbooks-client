/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Books
// ====================================================

export interface Books_volumes_items {
  title: string | null;
  id: string;
}

export interface Books_volumes {
  items: (Books_volumes_items | null)[] | null;
}

export interface Books {
  volumes: Books_volumes | null;
}

export interface BooksVariables {
  q: string;
}
