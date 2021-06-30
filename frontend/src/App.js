import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard.component";
import SignIn from "./components/SignIn/signin.component";

function App() {
  return (
    <Router>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/" exact component={SignIn} />
    </Router>
  );
}
//hi
export default App;
