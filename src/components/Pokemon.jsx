import * as React from "react";
import {createPortal} from 'react-dom'
import { useState, useEffect } from "react";
import Card from "./Card";
import PokemonModal from "./PokemonModal";
import styles from '../style/Shadow.module.css'

export default function Pokemon({shadowTheme}) {
  const [pokeData, setPokeData] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`;

  const fetchPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const pokemons = await getPokemons(data.results);
  };

  async function getPokemons(items) {
    const data = await Promise.all(
      items.map(async (item) => {
        const response = await fetch(item.url);
        return response.json();
      })
    );
    setPokeData([...data]);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className={`pt-12 px-12 grid grid-cols-4 gap-8 ${shadowTheme ? styles.shadowPokemonSection : ''}`}>
      {pokeData.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          stats={pokemon.stats}
          shadowTheme ={shadowTheme}
        >
          <PokemonModal/>
        </Card>
      ))}
    </div>
  );
}
