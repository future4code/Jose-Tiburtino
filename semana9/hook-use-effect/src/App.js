import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        console.log(response);
        setPokeList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList &&
          pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
};

export default App;
