import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Status from "./component/TODO/App";
import User from "./component/Login/Login";
import Register from "./component/Register/Register";
import PrivateRoute from "./privaterouter";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/todoist" component={User} />
        <PrivateRoute exact path='/status' component={Status} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
