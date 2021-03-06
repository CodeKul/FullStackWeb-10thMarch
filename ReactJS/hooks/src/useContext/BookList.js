import React, { useState } from "react";
import Book from "./Book";
import { useContext } from "react";
import { BookContext } from "./BookContext";
function BookList() {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div style={{ marginLeft: "50px" }}>
      {books.map((book, id) => (
        <Book bookName={book.bookName} price={book.price} />
      ))}
    </div>
  );
}
export default BookList;
