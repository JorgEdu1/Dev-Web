const Imagem = ({id}) => {
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                alt="pokemon"
                style={{width:"300px"}}
            />
        </>
    )
}
export default Imagem