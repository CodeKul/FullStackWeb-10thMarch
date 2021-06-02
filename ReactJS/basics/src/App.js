import logo from "./logo.svg";
import "./App.css";
import MyComponent from './Components-Class/MyComponent'
import AnotherComponent from './Components-Class/AnotherComponent'
import ProductTable from "./Components-Class/ProductTable";
import ProductFunction from "./Components-Function/ProductFunction";
function App() {
  
  return (
    // jsx
    <div>
      <h1>Hello React</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea est pariatur reiciendis sit error, at temporibus numquam harum ipsum eveniet quaerat impedit officia iure aspernatur tenetur, in enim omnis commodi et! Error dolorum ut maiores, repellendus amet aut reiciendis odio commodi tempore molestiae quae cum magnam modi, harum nam aliquid?</p>
      {/* <MyComponent/>
      <AnotherComponent/> */}

      <ProductTable/>
      <ProductFunction/>
    </div>
  );
}

export default App;
