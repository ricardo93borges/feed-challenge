import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Feed } from "./features/feed";
import { Post } from "./features/feed/components/post/Post";

function App() {
  return (
    <div>
      <header>
        <Router>
          <Switch>
            <Route path="/post/:id">
              <Post />
            </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
