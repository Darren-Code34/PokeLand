import { createPortal } from "react-dom";
import { useState } from "react";
import styles from "../style/Card.module.css";
import PokemonModal from "./PokemonModal";

export default function Card({ id, name, image, type, stats, shadowTheme }) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal((state) => !state);
  }

  const getCardBackground = (type) => {
    switch (type) {
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
  return (
    <div>
      <div
        onClick={handleModal}
        className={`${styles.card} ${getCardBackground(
          type
        )} cursor-pointer relative z-0 `}
      >
        <h3 className={styles.id}>{id > 9 ? `#${id}` : `#0${id}`}</h3>
        <img src={image} alt={name} />
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.type}>{type}</h3>
      </div>
      {createPortal(
        showModal ? (
          <PokemonModal id={id} name={name} image={image} type={type} stats={stats} handleModal={handleModal} shadowTheme={shadowTheme} />
        ) : null,
        document.body
      )}
    </div>
  );
}
