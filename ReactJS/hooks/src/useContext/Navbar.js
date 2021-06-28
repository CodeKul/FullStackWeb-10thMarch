import React, { useContext } from "react";
import { BookContext } from "./BookContext";

function Navbar() {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div
      style={{
        height: "40px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      Books:{books.length}
    </div>
  );
}

export default Navbar;
