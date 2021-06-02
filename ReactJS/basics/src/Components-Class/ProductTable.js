import React from "react";

class ProductTable extends React.Component {
  render() {
    let value = 100;
    let products = [
      {
        productName: "Mouse",
        productQty: 3,
        productPrice: 800,
      },
      {
        productName: "Keyboard",
        productQty: 5,
        productPrice: 1300,
      },
      {
        productName: "Stylus",
        productQty: 2,
        productPrice: 1000,
      },
      {
        productName: "Charger",
        productQty: 7,
        productPrice: 1800,
      },
    ];

    const person={
        firstName:"abc",
        lastName:"xyz"
    }

    function displayPerson(){
        return person.firstName + person.lastName
    }

    const viewFullName = (
        <h1>Full Name:{displayPerson()}</h1>
    )
    return (
      <div>
        <h1>{value}</h1>
        {`Hello World ${value}`}
        <p>Person - first name : {person.firstName} last name: {person.lastName}</p>
        <p>{displayPerson()}</p>
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th>Product Name</th>
            <th>Product Qty</th>
            <th>Product Price</th>
          </tr>

          {products.map((item) => (
            <tr>
              <td>{item.productName}</td>
              <td>{item.productQty}</td>
              <td>{item.productPrice}</td>
            </tr>
          ))}
        </table>
         
         {viewFullName}
      </div>
    );
  }
}

export default ProductTable;
