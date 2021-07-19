import React, { useEffect, useState } from "react";
import apicall from "../services/apicall";
function BooksList() {
  const [booksList, setBooks] = useState([]);
  useEffect(() => {
    getBooksList();
  }, []);

  const getBooksList = async () => {
    let response = await apicall.get("/books");
    // console.log(response.data)

    setBooks(response.data);
    console.log(booksList);
  };
  return (
    <div className="container">
      <table className="table table-striped">
        <tr>
          <th>Sr.No</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Rating</th>
        </tr>
        {booksList.map((book, id) => (
          <tr key={id}>
            <td>{book.id}</td>
            <td>{book.bookName}</td>
            <td>{book.authorName}</td>
            <td>{book.rating}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BooksList;
