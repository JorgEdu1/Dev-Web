import { useState, useEffect } from "react";
import axios from "axios";

const PokemonAxios = () => {

    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("")//useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
    const [imagemBack, setImagemBack] = useState("") //useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png");
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                setNome(response.data.name);  
                setImagem(response.data.sprites.front_default);
                setImagemBack(response.data.sprites.back_default);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);



    return (
        <>
            <table border="10px">
                <tbody>
                    <tr>
                        <td>
                            Nome: {nome}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={imagem}
                                alt="Imagem do Pokemon"
                                style={{width: "200px"}}
                           />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={imagemBack}
                                alt="Imagem do Pokemon de costas"
                                style={{width: "200px"}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>setId((prev)=>(prev-1)<1?1:prev-1)}>-1</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>setId((prev)=>prev+1)} >+1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default PokemonAxios;