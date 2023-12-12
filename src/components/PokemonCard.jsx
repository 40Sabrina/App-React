const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];


function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <figure>
            {pokemon.imgSrc != null ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>"???"</p>)
            }
            {pokemon.name != null ? (<figcaption>{pokemon.name}</figcaption>) : (<p>"???"</p>)
            }
        </figure >
    );
}
export default PokemonCard;