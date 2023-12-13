import PokemonCard from "./components/PokemonCard"
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
    setPokemonIndex(pokemonIndex - 1);
  }

  const handleClickSuivant = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  return (<>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <button onClick={handleClickPrécédent}>Précédent</button>
    <button onClick={handleClickSuivant}>Suivant</button>
  </>)
}


export default App;



// import PokemonCard from "./components/PokemonCard"


// const pokemonList = [
//   {
//     name: "bulbasaur",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//   },
//   {
//     name: "mew",
//   },
// ];

// function App() {
//   return <PokemonCard pokemon={pokemonList[0]} />;
// }


// export default App;