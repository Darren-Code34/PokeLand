import { useState } from "react";
import styles from '../style/Shadow.module.css'

function PokemonModal({ id, name, image, type, stats, handleModal, shadowTheme }) {


  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className={`mt-[120px]  px-5 py-5 rounded-xl w-80 shadow-2xl ${shadowTheme ? styles.shadowPokemonModal : 'bg-slate-100'}`}>
        <button onClick ={handleModal} className="px-2 bg-red-500 text-white flex ml-auto mr-0 rounded-sm ">
          X
        </button>
        <p className='italic'>{id > 9 ? `#${id}` : `#0${id}`}</p>
        <p className='text-3xl capitalize font-semibold'>{name}</p>
        <p>{type}</p>
        <img className='w-48 h-48 ml-auto mr-auto' src={image} alt={name} />
        <div className='w-4/5 ml-auto mr-auto p-5 rounded-md'>
          {stats.map((item, index)=>(
            <p className='flex' key={index}> <span>{item.stat.name}</span>  <span className='ml-auto'> {item.base_stat}</span> </p>
          ))}
        </div>
        
      </div>
    </div>
  );
}
export default PokemonModal;
