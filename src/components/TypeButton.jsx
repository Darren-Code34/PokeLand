import { useState, useEffect } from "react";
import styles from "../style/TypeButton.module.css";

function TypeButton({ name }) {
  const [typeSelected, setTypeSelected] = useState(null);

  const url = `https://pokeapi.co/api/v2/type/${typeSelected}`

  const fetchPokemonByType = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.name);
  }

  useEffect(()=>{
    fetchPokemonByType()
  },[typeSelected])

  const getTypeStyles = (name) => {
    switch (name) {
      case "grass":
        return styles.grass;
      case "poison":
        return styles.poison;
      case "fire":
        return styles.fire;
      case "water":
        return styles.water;
      case "bug":
        return styles.bug;
      case "normal":
        return styles.normal;
      case "electric":
        return styles.electric;
      case "ground":
        return styles.ground;
      case "fairy":
        return styles.fairy;
      case "fighting":
        return styles.fighting;
      case "psychic":
        return styles.psychic;
      case "rock":
        return styles.rock;
      case "ice":
        return styles.ice;
      case "ghost":
        return styles.ghost;
      case "dragon":
        return styles.dragon;
    }
  };

  const handleClick = (event) =>{
    console.log(event.target.value);
    setTypeSelected(event.target.value)
  }
  console.log(typeSelected);

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${getTypeStyles(name)} mb-6`}
      value={name}
    >
      {name.toUpperCase()}
    </button>
  );
}
export default TypeButton;
