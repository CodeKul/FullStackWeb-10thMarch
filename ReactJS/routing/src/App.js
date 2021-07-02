import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import BlogContent from "./components/BlogContent";
function App() {
  let topics = [
    {
      topicName: "CSS Grid",
      id: 1,
      description: "lorem ipsum",
      content: [
        {
          title: "Row and Columns in Grid",
          id: "css",
          description: "lorem ipsum en",
        },
      ],
    },
    {
      topicName: "Javascript Event Propagation",
      id: 2,
      description: "lorem ipsum",
      content: [
        {
          title: "Capturing and Bubbling",
          id: "js",
          description: "lorem ipsum en",
        },
      ],
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}

          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog topics={topics} />
          </Route>
          <Route path="/blog/:topicId">
            <BlogContent topics={topics} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
