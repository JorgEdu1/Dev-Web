import Filho from './ComponenteFilho';
import Number from './MyContext';
import React, { useState } from 'react';

const Avo = () => {
    const [count, setCount] = useState(1);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <Number.Provider value={count}>
            <div>
                <h1>Avo</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`} alt="" />
                <Filho />
                <button style={{Color: "black"}} onClick={handleClick}>
                    Clique aqui ({count})
                </button>
            </div>
        </Number.Provider>
    );
}
export default Avo;