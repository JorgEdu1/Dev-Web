import MinhaCor from "./MeuContexto"
//jeito legado para usar contexto (nao recomendado!)
const FuncaoB = () => {
    return (
        <MinhaCor.Consumer>
            {
                (cor) => {//posso descontruir esse objeto para nao ter que escrever cor.cor, mas nao quero.
                    return (
                        <h1 style={{backgroundColor: cor.cor}} >Função B</h1>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
}
export default FuncaoB