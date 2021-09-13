import React, { Suspense, lazy } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
// import Home from "./Home";
// import Results from "./Results";
// import Detail from "./Detail";

const Home = lazy(() => import("./Home"));
const Results = lazy(() => import("./Results"));
const Detail = lazy(() => import("./Detail"));

function App() {
  return (
    <Switch>
      <Suspense fallback={<p>loading......</p>}>
        {/* <Route path="/" component={Results} exact /> */}
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Results} />
        <Route path="/courses" component={Detail} />
        <Route component={NotFound} />
      </Suspense>
    </Switch>
  );
}

function NotFound() {
  return <h1>OOPS</h1>;
}

export default App;
