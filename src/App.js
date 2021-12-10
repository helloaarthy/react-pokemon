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

  const fetchPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + random)
      .then((response) => {
        setPokemon(response.data);
        setPokemonType(response.data.types[0].type);
      });
  };

  return (
    <div className={`background-${pokemonType.name}`}>
      <p className="text">
        Here is your pokemon{' '}
        <em>
          <b class="pokemonName"> {pokemon.name} </b>
        </em>
        of type {pokemonType.name}
      </p>
      <img
        id="pokemonImg"
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        width="300"
        height="300"
      />
      <button id="clickMe" onClick={fetchPokemon}>
        Click Me!
      </button>
    </div>
  );
}
