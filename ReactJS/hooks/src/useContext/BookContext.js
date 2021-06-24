import { createContext, useState } from "react";
export const BookContext = createContext();
export function BookProvider(props) {
  const [books, setBooks] = useState([
    {
      bookName: "BAC",
      price: 199,
    },
    {
      bookName: "fjv",
      price: 299,
    },
  ]);
  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  );
}
