import MinhaCor from "./MeuContexto"
import { useContext } from "react"
//jeito novo para usar contexto (recomendado!)
const FuncaoD = () => {
    const cor = useContext(MinhaCor);
    return(
        <h1 style={{backgroundColor: cor.cor}} >Função D</h1>
    )
}
export default FuncaoD