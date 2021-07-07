import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import BlogContent from "./components/BlogContent";
import Game from "./components/Game";
import GameResult from "./components/GameResult";
function App() {
  let topics = [
    {
      topicName: "CSS Grid",
      id: 1,
      description: "lorem ipsum",
      content: [
        {
          title: "Row and Columns in Grid",
          id: "css1",
          description: "lorem ipsum en",
        },
        {
          title: "Borders",
          id: "css2",
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
          id: "js1",
          description: "lorem ipsum en",
        },
      ],
    },

    {
      topicName: "React Routing",
      id: 3,
      description: "lorem ipsum",
      content: [
        {
          title: "URL PArams",
          id: "route",
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

          <Route path="/contact" component={Contact} />

          <Route path="/articles">
            <Blog topics={topics} />
          </Route>
          <Route path="/game" component={Game} />
          <Route path="/result" component={GameResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
