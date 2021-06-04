import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./Components-Class/MyComponent";
import AnotherComponent from "./Components-Class/AnotherComponent";
import ProductTable from "./Components-Class/ProductTable";
import ProductFunction from "./Components-Function/ProductFunction";
import Course from "./Components-Class/Course";
import Counter from "./Components-Class/Counter";
function App() {
  let courseName = "Data Science";
  let salary = 1000;
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
  let seasons = ["Summer", "winter", "Rainy"];
  return (
    // jsx
    <div>
      <MyComponent products={products} />
      {/*<AnotherComponent/> */}

      {/* <ProductTable/>
       */}
      {/* <Course
        cName="React JS"
        duration="3months"
        salary={2000}
        seasons={["abc", "xyz"]}
      />
      <Course
        cName={courseName}
        duration="6 months"
        salary={salary}
        seasons={seasons}
      />
    <ProductFunction/> */}



    <Counter/>
    </div>
  );
}

export default App;
