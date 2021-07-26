import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Home from './components/Home';
import HandleNumbers from './components/HandleNumbers';
import HandleThreeWords from './components/HandleThreeWords';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <HandleNumbers path="/:number"/>
        <HandleThreeWords path="/:word/:wc/:bc"/>
      </Router>
    </div>
  )
}

export default App
