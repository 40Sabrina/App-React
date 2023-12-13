

function NavBar({ handleClickPrécédent, handleClickSuivant }) {
    return (<>
        <button onClick={handleClickPrécédent}>Précédent</button>
        <button onClick={handleClickSuivant}>Suivant</button>
    </>);
}



export default NavBar