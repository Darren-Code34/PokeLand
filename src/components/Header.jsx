import React from "react";
import { unseState } from "react";
import logoPokemon from "../assets/pokemon-logo-png-1446.png";
import searchIcon from "../assets/magnifying-glass-solid.svg";
import sunRegular from "../assets/sun-regular.svg";
import moonRegular from "../assets/moon-regular.svg";
import styles from "../style/Shadow.module.css";

export default function Header({shadowTheme, changeTheme}) {

  return (
    <div className={`pt-8 px-12 pb-8 ${shadowTheme ? styles.shadowHeader : ""}`}>
      <div className="mb-20 flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${shadowTheme ? styles.shadowTitle : ''}`}>Welcome to the PokeLand</h1>
        <div className="flex flex-row items-center">
          <img
            onClick = {changeTheme}
            className="w-12 h-12 mr-10 px-3 py-3 cursor-pointer border rounded-xl shadow-md"
            src={shadowTheme ? sunRegular : moonRegular}
            alt="theme icon"
          />
          <img className="w-16 h-16" src={logoPokemon} alt="logo" />
        </div>
      </div>
      <form>
        <div className="mx-12 py-3 px-5 flex bg-slate-100 rounded-md focus:border-2 focus:border-black">
          <img className="w-8 h-8 mr-5" src={searchIcon} alt="search icon" />
          <input
            className="bg-transparent w-full outline-none placeholder-slate-400 placeholder:font-bold"
            type="text"
            placeholder="Search a pokemon!!!"
          />
        </div>
      </form>
    </div>
  );
}
