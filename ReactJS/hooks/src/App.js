import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/Counter";
import Effect from "./useEffect/Effect";
import CovidCount from "./useEffect/CovidCount";
import InputFocus from "./useRef/InputFocus";
import StopWatch from "./useRef/StopWatch";
import BookList from "./useContext/BookList";
import AddNewBook from "./useContext/AddNewBook";
import { useState } from "react";
import Navbar from "./useContext/Navbar";
import { BookProvider } from "./useContext/BookContext";
import Table from "./Fragment/Table";
function App() {
  return (
    <div>
      <h1>Hooks</h1>
      {/* <Counter/> */}
      {/* <Effect/> 
        <CovidCount/>*/}

      {/* <InputFocus/> */}
      {/* <StopWatch/> */}

      {/* <BookProvider>
        <Navbar />
        <AddNewBook />
        <BookList />
      </BookProvider> */}

      <Table />
    </div>
  );
}

export default App;
