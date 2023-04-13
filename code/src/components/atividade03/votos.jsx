import { useState, useEffect } from "react";

const Votos = () => {
    const [votosQuixada, setVotosQuixada] = useState(0);
    const [votosFortaleza, setVotosFortal] = useState(0);
    const [votosSobral, setVotosSobral] = useState(0);
    const [votosIguatu, setVotosIguatu] = useState(0);
    const [cidadeMaisVotada, setMaisVotada] = useState('');
    const [cidadeMenosVotada, setMenosVotada] = useState('');
    const [votos, setVotos] = useState(0);

    const votar = (voto) => {
        setVotos(voto);
        if(votos === 'q'){
            setVotosQuixada(votosQuixada + 1);
        }else if(votos === 'f'){
            setVotosFortal(votosFortaleza + 1);
        }else if(votos === 's'){
            setVotosSobral(votosSobral + 1);
        }else if(votos === 'i'){
            setVotosIguatu(votosIguatu + 1);
        }
        //setVotos("");
    }
    useEffect(() => {
        let maisVotadas = [];
        let menosVotadas = [];
        if (votosQuixada >= votosFortaleza && votosQuixada >= votosSobral && votosQuixada >= votosIguatu) {
          maisVotadas.push('Quixadá');
          if (votosQuixada === votosFortaleza) {
            maisVotadas.push(', Fortaleza');
          }
          if (votosQuixada === votosSobral) {
            maisVotadas.push(', Sobral');
          }
          if (votosQuixada === votosIguatu) {
            maisVotadas.push(', Iguatu');
          }
        }else
        if (votosFortaleza >= votosQuixada && votosFortaleza >= votosSobral && votosFortaleza >= votosIguatu) {
          maisVotadas.push('Fortaleza');
          if (votosFortaleza === votosQuixada) {
            maisVotadas.push(', Quixadá');
          }
          if (votosFortaleza === votosSobral) {
            maisVotadas.push(', Sobral');
          }
          if (votosFortaleza === votosIguatu) {
            maisVotadas.push(', Iguatu');
          }
        }else
        if (votosSobral >= votosQuixada && votosSobral >= votosFortaleza && votosSobral >= votosIguatu) {
          maisVotadas.push(' Sobral');
          if (votosSobral === votosQuixada) {
            maisVotadas.push(', Quixadá');
          }
          if (votosSobral === votosFortaleza) {
            maisVotadas.push(', Fortaleza');
          }
          if (votosSobral === votosIguatu) {
            maisVotadas.push(', Iguatu');
          }
        }else
        if (votosIguatu >= votosQuixada && votosIguatu >= votosFortaleza && votosIguatu >= votosSobral) {
          maisVotadas.push('Iguatu');
          if (votosIguatu === votosQuixada) {
            maisVotadas.push(', Quixadá');
          }
          if (votosIguatu === votosFortaleza) {
            maisVotadas.push(', Fortaleza');
          }
          if (votosIguatu === votosSobral) {
            maisVotadas.push(', Sobral');
          }
        }
        
        if (votosQuixada <= votosFortaleza && votosQuixada <= votosSobral && votosQuixada <= votosIguatu) {
          menosVotadas.push('Quixadá');
          if (votosQuixada === votosFortaleza) {
            menosVotadas.push(', Fortaleza');
          }
          if (votosQuixada === votosSobral) {
            menosVotadas.push(', Sobral');
            }
            if (votosQuixada === votosIguatu) {
            menosVotadas.push(', Iguatu');
            }
        }else
        if (votosFortaleza <= votosQuixada && votosFortaleza <= votosSobral && votosFortaleza <= votosIguatu) {
            menosVotadas.push('Fortaleza');
            if (votosFortaleza === votosQuixada) {
            menosVotadas.push(', Quixadá');
            }
            if (votosFortaleza === votosSobral) {
            menosVotadas.push(', Sobral');
            }
            if (votosFortaleza === votosIguatu) {
            menosVotadas.push(', Iguatu');
            }
        }else
        if (votosSobral <= votosQuixada && votosSobral <= votosFortaleza && votosSobral <= votosIguatu) {
            menosVotadas.push('Sobral');
            if (votosSobral === votosQuixada) {
            menosVotadas.push(', Quixadá');
            }
            if (votosSobral === votosFortaleza) {
            menosVotadas.push(', Fortaleza');
            }
            if (votosSobral === votosIguatu) {
            menosVotadas.push(', Iguatu');
            }
        }else
        if (votosIguatu <= votosQuixada && votosIguatu <= votosFortaleza && votosIguatu <= votosSobral) {
            menosVotadas.push('Iguatu');
            if (votosIguatu === votosQuixada) {
            menosVotadas.push(', Quixadá');
            }
            if (votosIguatu === votosFortaleza) {
            menosVotadas.push(', Fortaleza');
            }
            if (votosIguatu === votosSobral) {
            menosVotadas.push(', Sobral');
            }
        }
        setMaisVotada(maisVotadas);
        setMenosVotada(menosVotadas);
      }, [votosQuixada, votosFortaleza, votosSobral, votosIguatu]);

  return (
    <div>
        <h1>Votação das cidades:</h1>
        <div>      
            <h2>Quixada</h2>
            <p>{votosQuixada}</p>
            <button onClick={() => votar('q')}>VotarQuixas</button>
        </div>
        <div>      
            <h2>Fortaleza</h2>
            <p>{votosFortaleza}</p>
            <button onClick={() => votar('f')}>VotarFortal</button>
        </div>
        <div>      
            <h2>Sobral</h2>
            <p>{votosSobral}</p>
            <button onClick={() => votar('s')}>VotarSobral</button>
        </div>
        <div>      
            <h2>Iguatu</h2>
            <p>{votosIguatu}</p>
            <button onClick={() => votar('i')}>VotarIguatu</button>
        </div>
        <h1>Cidade mais votada: {cidadeMaisVotada}</h1>
        <h1>Cidade menos votada: {cidadeMenosVotada}</h1>
    </div>
  );
}
export default Votos; 