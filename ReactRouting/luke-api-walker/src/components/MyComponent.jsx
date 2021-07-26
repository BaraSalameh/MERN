import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MyComponent = (props) => {

    const [starwars, setStarwars] = useState([]);
    console.log(props.type +" "+props.id);
    useEffect(() =>{
        axios.get("https://swapi.dev/api/"+props.select+"/"+props.id+"/")
        .then(response => setStarwars(response.data))
    }, [props.select, props.id]);

    return (
        props.select === "people" ? 
            <div>
                <h1>{starwars.name}</h1>
                <h3>Height : {starwars.height}</h3>
                <h3>Mass : {starwars.mass}</h3>
                <h3>Hair Color : {starwars.hair_color}</h3>
                <h3>Skin Color : {starwars.skin_color}</h3>
            </div>
            :
            <div>
                <h1>{starwars.name}</h1>
                <h3>Climate : {starwars.climate}</h3>
                <h3>Terrain : {starwars.terrain}</h3>
                <h3>Surface Water : {starwars.surface_water}</h3>
                <h3>Population : {starwars.population}</h3>
            </div>
    )
}

export default MyComponent
