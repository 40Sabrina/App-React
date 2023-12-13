import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {
    console.log({ pokemon })
    return (
        <figure>
            {pokemon.imgSrc != null ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>"???"</p>)
            }
            {pokemon.name != null ? (<figcaption>{pokemon.name}</figcaption>) : (<p>"???"</p>)
            }
        </figure >
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
}

export default PokemonCard



