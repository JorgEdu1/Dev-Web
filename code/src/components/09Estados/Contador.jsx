import { useState, useEffect } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
    const [ehPar, setEhPar] = useState(true);
    useEffect(
        () => {
            if(count % 2 === 0) setEhPar(true);
            else setEhPar(false);
        }, [count]
    )
    const aumentarCount = () => {
        setCount(count + 1);
    }
    return(
        <>
            <h1>Contador: {count}</h1>
            <h2>{ehPar ? "Par" : "Impar"}</h2>
            <button onClick={aumentarCount}>
                contar+1
            </button>
        </>
    )
}
export default Contador;