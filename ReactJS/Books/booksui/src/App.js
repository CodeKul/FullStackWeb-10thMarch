import "./App.css";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BooksList}></Route>
          <Route path="/addbook" component={AddBook} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
