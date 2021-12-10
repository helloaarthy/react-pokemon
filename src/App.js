import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [pokemon1, setPokemon1] = useState(0);
  const [pokemonType1, setPokemonType1] = useState(0);
  const [pokemon2, setPokemon2] = useState(0);
  const [pokemonType2, setPokemonType2] = useState(0);

  useEffect(() => {
    fetchPokemon1();
  }, []);

  useEffect(() => {
    fetchPokemon2();
  }, []);

  const random1 = Math.floor(Math.random() * 721);
  const random2 = Math.floor(Math.random() * 721);

  const fetchPokemon1 = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + random1)
      .then((response) => {
        setPokemon1(response.data);
        setPokemonType1(response.data.types[0].type);
      });
  };

  const fetchPokemon2 = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + random2)
      .then((response) => {
        setPokemon2(response.data);
        setPokemonType2(response.data.types[0].type);
      });
  };

  return (
    <div>
      <div className={`background-${pokemonType1.name}`}>
        <p className="text">
          Here is your pokemon{' '}
          <em>
            <b className="pokemonName1"> {pokemon1.name} </b>
          </em>
          of type <b className="pokemonTypeName1"> {pokemonType1.name} </b>
        </p>
        <img
          id="pokemonImg1"
          src={`https://img.pokemondb.net/artwork/large/${pokemon1.name}.jpg`}
          width="300"
          height="300"
        />
        <div className={`background-${pokemonType2.name}`}>
          <p className="text">
            Here is your pokemon{' '}
            <em>
              <b className="pokemonName1"> {pokemon2.name} </b>
            </em>
            of type <b className="pokemonTypeName1"> {pokemonType2.name} </b>
          </p>
          <img
            id="pokemonImg1"
            src={`https://img.pokemondb.net/artwork/large/${pokemon2.name}.jpg`}
            width="300"
            height="300"
          />
          <button id="clickMe" onClick={(fetchPokemon1, fetchPokemon2)}>
            Click Me!
          </button>
        </div>
      </div>
    </div>
  );
}
