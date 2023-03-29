const Filho = ({altura,peso}) => {
    function calcIMC(a,p){
        return p / (a * a)
    }
    function renderizar(calcIMC){
        if(calcIMC < 18.5){
            return <h3>abaixo do peso</h3>
        }else if(calcIMC > 25){
            return <h3>acima do peso</h3>
        }
        return <h3>peso ideal</h3>
        
    }
    
    const imc = calcIMC(altura,peso)
    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <p>Peso: {peso}</p>
            <p>Altura: {altura}</p>
            <p>IMC: {calcIMC(altura,peso)}</p>
            <p>Estado: {renderizar(imc)}</p>
        </div>
    )
}
export default Filho