import React, {useState} from 'react'
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const handleClick = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=807&limit=311")
    .then( response => response.json())
    .then((response) => setPokemon(response.results))
      
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon</button>
        {
          pokemon.map(
            (value, key) => 
              <p key={key}>{value.name}</p>
            
          )
        }
    </div>
  );
}

export default App;
