import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles.css";
import List from "./components/list";
import Folder from "./components/folder";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/drive" component={() => <List />} />
        <Route exact path="/folders/:id" component={() => <Folder />} />
        <Route component={() => <List />} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
