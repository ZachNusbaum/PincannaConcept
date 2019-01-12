import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { NewsPage } from "./pages/News";
import { ContactPage } from "./pages/Contact";
import { StoryPage } from "./pages/Story";

import "bootstrap/dist/css/bootstrap.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={NewsPage} />
        <Route path="/story/:id" component={StoryPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
