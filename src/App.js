import React from 'react';
import './App.css';
// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Recent from './pages/Recent/Recent';
//  Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/recent">
            <Recent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
