import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto";

const FuncaoA = () => {
    const cor = {cor:"red"};
    return (//provider do meu contexto de cor.
        <MinhaCor.Provider value={cor}>
        <div>
            <h1 style={{backgroundColor: cor.cor}}>Funçao A</h1>
            <FuncaoB/>
            <FuncaoC/>
        </div>
        </MinhaCor.Provider>
    )
}
export default FuncaoA