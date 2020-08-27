import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Water from "./pages/Water";
import Test from "./pages/Test";

import "./styles/sass/App.sass";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/water" exact component={Water} />
        <Route path="/test" exact component={Test} />
      </Router>
    );
  }
}

export default App;
