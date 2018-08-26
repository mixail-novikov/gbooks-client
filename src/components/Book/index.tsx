import * as React from "react";

interface IBookProps {
  title?: string | null;
  date?: string | null;
}

export const Book: React.SFC<IBookProps> = ({ title, date }) => (
  <div>
    {title && <div>Title: {title}</div>}
    {date && <div>Year: {date}</div>}
  </div>
);
