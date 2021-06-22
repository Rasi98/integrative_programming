import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";
import Dashboard from './components/Dashboard/dashboard.component';


function App() {
  return (
    <Router>
      <Route path = "/dashboard" exact component = {Dashboard}/>
    </Router>
  );
}

export default App;
