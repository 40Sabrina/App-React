function NavBar({ setPokemonIndex, pokemonList }) {
    const handleClickPokemon = (index) => {
        setPokemonIndex(index);
    }


    return (
        <>
            <ul className="btnPokemon">
                {pokemonList.map((pokemon, index) => (
                    <li key={pokemon.name}>
                        <button onClick={() => handleClickPokemon(index)}>{pokemon.name}</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NavBar