import logo from './logo.svg';
import './App.css';
//import Dados from "./components/01MeusDados"; 
//import Dados from "./components/02MeusDados"; 
//import Temperatura from "./components/03Temperatura"
//import Pai from "./components/atividade01/01Pai"
import FuncaoA from './components/06Contexto/FuncaoA';

function App() {
  return (
    /*<div className='App'>
      <Temperatura/>
    </div>*/
    <div className='App'>
      <FuncaoA/>
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
