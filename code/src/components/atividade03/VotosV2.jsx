import { useEffect, useState } from "react"

const VotaCidades = () => {
    const  [cidades, setCidades] = useState([
        {nome: 'Quixadá', votos: 0},
        {nome: 'Fortaleza', votos: 0},
        {nome: 'Sobral', votos: 0},
        {nome: 'Iguatu', votos: 0},
    ]);

    const votarNaCidade = (nome) => {
        const index = cidades.findIndex(
            (item) => item.nome === nome
        );
        cidades[index].votos+=1;
        setCidades([...cidades]);
    }


    return (
        <>
            <h1>Vota Cidades</h1>
            <h3>{cidades[0].nome}: {cidades[0].votos}</h3>
            <h3>{cidades[1].nome}: {cidades[1].votos}</h3>
            <h3>{cidades[2].nome}: {cidades[2].votos}</h3>
            <h3>{cidades[3].nome}: {cidades[3].votos}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={() => votarNaCidade("Quixadá")}>Quixadá</button>
                        </td>
                        <td>
                            <button onClick={() => votarNaCidade("Fortaleza")}>Fortaleza</button>
                        </td>
                        <td>
                            <button onClick={() => votarNaCidade("Sobral")}>Sobral</button>
                        </td>
                        <td>
                            <button onClick={() => votarNaCidade("Iguatu")}>Iguatu</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default VotaCidades;