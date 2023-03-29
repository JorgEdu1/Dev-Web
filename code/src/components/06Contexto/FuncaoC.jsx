import FuncaoD from "./FuncaoD"
//usando o C para ter um nó que nao use contexto.
const FuncaoC = () => {
    return(
        <div>
            <h1>Função C</h1>
            <FuncaoD/>
        </div>
    )
}
export default FuncaoC