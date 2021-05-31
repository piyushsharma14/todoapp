import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Status from "./component/TODO/App";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import PrivateRoute from "./privaterouter";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/todoist" component={Login} />
        <Route exact path="/todoist/register" component={Register} />
        <PrivateRoute exact path='/todoist/status' component={Status} />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
