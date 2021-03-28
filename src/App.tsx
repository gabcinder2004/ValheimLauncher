import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/Logo_valheim.png';
import './App.global.css';
import {launchGame} from './launchGame';


const Hello = () => {
  return (
    <div className="centered">
      <div className="Hello">
        <img width="550px" alt="icon" src={icon} />
      </div>
      <h1>Server: Dragonball </h1>
      <div className="Hello">
          <button type="button" onClick={launchGame}>
            <span role="img" aria-label="books">
              
            </span>
            Launch Game
          </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
