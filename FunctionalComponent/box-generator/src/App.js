import './App.css';
import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxCreator from './components/BoxCreator';

function App() {
  const [color, setColor] = useState([]);

  const retrieveColor = (divColor) => setColor([...color,divColor])

  return (
    <div className="App">
      <BoxForm colorProp={retrieveColor}/>
      <div className="body-app">
        {
          color.map(
            (value, key) => <BoxCreator colorProp= {value}/>
          ) 
        }
      </div>
    </div>
  );
}

export default App;
