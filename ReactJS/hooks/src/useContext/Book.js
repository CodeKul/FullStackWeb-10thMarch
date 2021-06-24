import React from "react";

function Book(props) {
  return (
    <div>
      <li>
        {props.bookName}
        {props.price}
      </li>
    </div>
  );
}

export default Book;
