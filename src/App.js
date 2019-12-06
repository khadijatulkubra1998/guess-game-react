import React from 'react';
import Easy from './Component/Easy/Easy'
import Medium from './Component/Medium/Medium'
import Hard from './Component/Hard/Hard'
import Home from './Component/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/easy">
              <Easy />
            </Route>
            <Route path="/medium">
              <Medium />
            </Route>
            <Route path="/hard">
              <Hard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
