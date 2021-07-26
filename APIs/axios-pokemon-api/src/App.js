import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const handleClick =
      () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => setPokemon(response.data.results)
        )
      }
  
  return (
    <div>
      <button onClick={handleClick}>Fetch Pokemon</button>
      {
        pokemon.length > 0 && pokemon.map(
          (value, index) => <p key={index}>{value.name}</p>
        )
      }
    </div>
  )
}

export default App
