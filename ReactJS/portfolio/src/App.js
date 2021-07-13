import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="app">
     
      <Home />
      <About />
      <Skills />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default App;
