import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { App } from "./app";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <div>
          this is page1. <Link to="/page2">go to page2</Link>
        </div>
        <App></App>
      </Route>
      <Route path="/page2" exact>
        <div>
          this is page2. <Link to="/">go to page1</Link>
        </div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
