import React from "react";
import ProductBody from "./ProductBody";

class MyComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ border: "2px solid green", marginBottom: "20px" }}>
        <h1>Products Component</h1>

        <table>
          <tr>
            <th>Product Name</th>
            <th>Product Qty</th>
            <th>Product price</th>
          </tr>
          <ProductBody products={this.props.products}/>
        </table>
      </div>
    );
  }
}
export default MyComponent;
