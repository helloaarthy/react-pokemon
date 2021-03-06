import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [pokemon1, setPokemon1] = useState(0);
  const [pokemonType1, setPokemonType1] = useState(0);
  const [pokemon2, setPokemon2] = useState(0);
  const [pokemonType2, setPokemonType2] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const random1 = Math.floor(Math.random() * 721);
  const random2 = Math.floor(Math.random() * 721);
  const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/' + random1);
  const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/' + random2);

  const fetchPokemon = () => {
    Promise.all([promise1, promise2]).then((response) => {
      setPokemon1(response[0].data);
      setPokemonType1(response[0].data.types[0].type);
      setPokemon2(response[1].data);
      setPokemonType2(response[1].data.types[0].type);
    });
  };

  const battlePokemon = () => {
    const winners = [
      'dragon',
      'steel',
      'electric',
      'fighting',
      'fire',
      'water',
      'poison',
      'ice',
    ];
    let result = 'The result is ';
    const pokemonType1 =
      document.querySelectorAll('.pokemonTypeName1')[0].innerText;
    const pokemonType2 =
      document.querySelectorAll('.pokemonTypeName2')[0].innerText;
    const pokemonName1 =
      document.querySelectorAll('.pokemonName1')[0].innerText;
    const pokemonName2 =
      document.querySelectorAll('.pokemonName2')[0].innerText;
    if (winners.includes(pokemonType1) && winners.includes(pokemonType2)) {
      result = result.concat(`a tie!`);
    } else if (winners.includes(pokemonType1)) {
      result = result.concat(`${pokemonName1}`);
    } else if (winners.includes(pokemonType2)) {
      result = result.concat(`${pokemonName2}`);
    } else {
      result = result.concat(`both lose!`);
    }
    document.querySelectorAll('#result')[0].innerHTML = result;
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
        <button id="clickMe1" onClick={fetchPokemon}>
          Click Me!
        </button>
        <div className={`background-${pokemonType2.name}`}>
          <p className="text">
            Here is your pokemon{' '}
            <em>
              <b className="pokemonName2"> {pokemon2.name} </b>
            </em>
            of type <b className="pokemonTypeName2"> {pokemonType2.name} </b>
          </p>
          <img
            id="pokemonImg1"
            src={`https://img.pokemondb.net/artwork/large/${pokemon2.name}.jpg`}
            width="300"
            height="300"
          />
          {/* <button id="clickMe2" onClick={fetchPokemon2}>
            Click Me!
          </button> */}
          <button id="battle" onClick={battlePokemon}>
            Battle!
          </button>
          <p id="result"> </p>
        </div>
      </div>
    </div>
  );
}
