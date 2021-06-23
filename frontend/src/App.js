import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard.component";
import Addsensor from "./components/Dashboard/addsensor.component";

function App() {
  return (
    <Router>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/addsensor" exact component={Addsensor} />
    </Router>
  );
}

export default App;
