import { useSelector } from "react-redux"

const Imagem = () => {

    const id = useSelector((state)=>state.id.value)
    const name = useSelector((state)=>state.name)

    return (
        <>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                alt="Pokemon"
                style={{width:"300px"}}
            />
        </>
    )
}
export default Imagem