
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
export default PokemonCard






// function PokemonCard(props) {
//     console.log(props)

//     const pokemon = props.pokemon[0];
//     return (
//         <figure>
//             {pokemon.imgSrc != null ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>"???"</p>)
//             }
//             {pokemon.name != null ? (<figcaption>{pokemon.name}</figcaption>) : (<p>"???"</p>)
//             }
//         </figure >
//     );
// }
// export default PokemonCard