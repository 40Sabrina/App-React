
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
    const handleClickPrecedent = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1)
        }
    }
    const handleClickSuivant = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1)
        }
    }

    return (
        <>
            <button onClick={handleClickPrecedent}>Précédent</button>
            <button onClick={handleClickSuivant}>Suivant</button>
        </>
    )
}



export default NavBar