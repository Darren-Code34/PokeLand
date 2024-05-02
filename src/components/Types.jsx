import { useEffect, useState } from "react";
import TypeButton from "./TypeButton";

function Types() {
  const [types, setTypes] = useState([]);
  const url = "https://pokeapi.co/api/v2/type/";

  const fetchTypesPokemeon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const results = await getTypesPokemon(data.results);
  };

  function getTypesPokemon(items) {
    const dataType = items.map((item) => {
      const type = item.name;
      return type;
    });
    setTypes([...dataType]);
  }

  useEffect(() => {
    fetchTypesPokemeon();
  }, []);

  return (
    <>
      <h2 className="pl-12 mt-10 mb-4 text-3xl font-bold text-slate-600">
        Choose a type
      </h2>
      <div className="px-12 flex flex-row overflow-auto">
        {types.map((typePokemon, index) => (
          <TypeButton key={index} name={typePokemon} />
        ))}
      </div>
    </>
  );
}
export default Types;
