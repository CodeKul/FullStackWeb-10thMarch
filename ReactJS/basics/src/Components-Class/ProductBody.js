import React from "react";
class ProductBody extends React.Component {
  render() {
    return (
      <>
        {this.props.products.map((item) => (
          <tr>
            <td>{item.productName}</td>
            <td>{item.productQty}</td>
            <td>{item.productPrice}</td>
          </tr>
        ))}
      </>
    );
  }
}
export default ProductBody;
