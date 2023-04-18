//import logo from './logo.svg';
//import { Component } from 'react';
import './App.css';
//import Dados from "./components/01MeusDados"; 
//import Dados from "./components/02MeusDados"; 
//import Temperatura from "./components/03Temperatura"
//import Pai from "./components/atividade01/01Pai"
//import FuncaoA from './components/06Contexto/FuncaoA';
//import FunctionContextA from './components/atividade02/q1/FunctionContextA';
//import Avo from './components/atividade02/q2/ComponenteAvo';
//import {SaveData, LoadData} from './components/07Storage/MyStorage';
//import Pai from './components/08PaiFilho/Pai';
//import Contador from './components/09Estados/Contador';
//import Votos from './components/atividade03/votos';
//import VotaCidades from './components/atividade03/VotosV2';
//import PokemonAxios from './components/10Axios/PokemonAxios'
import TelaPrincipal from './components/11Redux/v1/TelaPrincipal'

function App() {
  return (
    /*<div className='App'>
      <Temperatura/>
    </div>*/
    <div className='App'>
      <TelaPrincipal/>
    </div>
    //<Dados name="Jorge Eduardo" curso="CC" facul="UFC" />
    /*<div className='App'> 
      <Pai/>
    </div>*/
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
