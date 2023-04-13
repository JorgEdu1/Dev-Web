import MyContext from './MyContext';
import { useContext } from 'react';

const Neto = () => {
    const value = useContext(MyContext);
    return (
        <div>
            <h1>Neto</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value+2}.png`} alt="" />
        </div>
    );
}
export default Neto;