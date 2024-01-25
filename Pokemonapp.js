import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './Pokemon.css';
function PokemonApp() {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchPokemonData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const res = await data.json();

    const promises = res.results.map(async (item) => {
      const data = await fetch(item.url);
      const response = await data.json();
      return {
        name: response.name,
        height: response.height,
        weight:response.weight,
        image: response.sprites.other.dream_world.front_default,
        abilities: response.abilities,
        types: response.types,
      };
    });

    const pokemonDetails = await Promise.all(promises);
    setPokemonData(pokemonDetails);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div className="pokemon-app">
      <h1 >Pokemon App</h1>
      <div className="pokemon-container">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonApp;
