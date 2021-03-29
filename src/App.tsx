import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/Logo_valheim.png';
import './App.global.css';
import {getSteamPath, launchGame} from './launchGame';

export const onLaunchButtonPressed = () => {
  // Check for launcher updates??

  // Check for mod updates

  // Launch game
  getSteamPath()
    .then((path) => {
      return launchGame(path);
    })
    .then((status) => {
      console.log(status);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Hello = () => {
  return (
    <div className="centered">
      <div className="Hello">
        <img width="550px" alt="icon" src={icon} />
      </div>
      <h1>By Gab </h1>
      <div className="Hello">
          <button type="button" onClick={onLaunchButtonPressed}>
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
