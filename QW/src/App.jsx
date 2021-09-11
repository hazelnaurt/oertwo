import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";
import Detail from "./Detail";

function App() {
  return (
    <Switch>
      {/* <Route path="/" component={Detail} exact /> */}
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Results} />
      <Route path="/courses" component={Detail} />
      <Route component={NotFound}/>
    </Switch>
  );
}

function NotFound() {
    return (
        <h1>OOPS</h1>
    )
}

export default App;
