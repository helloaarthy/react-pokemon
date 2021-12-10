import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [pokemon, setPokemon] = useState(0);
  const [pokemonType, setPokemonType] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const random = Math.floor(Math.random() * 151);
  console.log(random);

  const fetchPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + random)
      .then((response) => {
        setPokemon(response.data);
        setPokemonType(response.data.types[0].type);
      });
  };

  return (
    <div>
      <div className={`background-${pokemonType.name}`}>
        <p className="text">
          Here is your pokemon{' '}
          <em>
            <b> {pokemon.name} </b>
          </em>
        </p>
        <img
          id="pokemonImg"
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          width="300"
          height="300"
        />
        <span id="ability"> {pokemonType.name} </span>
        <button id="clickMe" onClick={fetchPokemon}>
          Click Me!
        </button>
      </div>
    </div>
  );
}
