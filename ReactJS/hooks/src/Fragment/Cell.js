import React from "react";

function Cell() {
  let items = [
    { name: "abc", city: "Pune" },
    { name: "def", city: "Pune" },
  ];
  return (
    <>
      {items.map((item, id) => (
        <React.Fragment key={id}>
          <td>{item.name}</td>
          <td>{item.city}</td>
        </React.Fragment>
      ))}
    </>
  );
}

export default Cell;
