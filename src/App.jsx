import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];



function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrécédent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }
  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  return (<>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <NavBar handleClickPrécédent={handleClickPrécédent} handleClickSuivant={handleClickSuivant} />
    {/* <button onClick={handleClickPrécédent}>Précédent</button>
    <button onClick={handleClickSuivant}>Suivant</button> */}
  </>)
}


export default App;