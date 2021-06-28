import React, { useContext, useState } from "react";
import { BookContext } from "./BookContext";

function AddNewBook() {
  const [books, setBooks] = useContext(BookContext);
  const [bookName, setbookName] = useState("");
  const [price, setPrice] = useState("");
  const addBook = () => {
    setBooks((prev) => [...prev, { bookName: bookName, price: price }]);
  };
  return (
    <div style={{ marginLeft: "50px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setbookName(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="button" onClick={addBook}>
        Add Book
      </button>
    </div>
  );
}

export default AddNewBook;
