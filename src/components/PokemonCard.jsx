import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {
    const { name, imgSrc } = pokemon
    return (
        <figure className="card">
            {imgSrc ? <img className="card-img" src={imgSrc} alt={name} /> : <p>"???"</p>
            }
            {name ? <figcaption>{name}</figcaption> : <p>"???"</p>
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



