import Neto from './ComponenteNeto';
import Number from './MyContext';
import { useContext } from 'react';

const Filho = () => {
    const value = useContext(Number);
    return (
        <div>
            <h1>Filho</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value+1}.png`} alt="" />
            <Neto />
        </div>
    );
}
export default Filho;