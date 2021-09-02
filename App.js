
import './App.css';
import Vb from './vb.jpg';



/*function App() {
  return (
    <div className="App">
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
    </div>
  );
}
*/
function Body () {
  return <body></body>;
}
function Headerr () {
  return <header>
    <ul className="lista">
    
      <li>Inicio</li>
      <li>Como Funiona?</li>
      <li>Comentarios</li>
                        
    </ul>
      
  </header>
}


function Corpo () {
return <h1> <br/> <br/> <br/>Juntos nós podemos mudar  o mundo ! </h1>
}


  

function Conversa () {
  return <h2> A conversa pode mudar o mundo ! </h2>
}

<section className="vb_content">
  <img src={Vb} className="vb__image" alt="Vb" />
</section>
  function Sintomas () {
    return <h1 class className='Sintomass'>Sintomas relacionados a ansiedade</h1>
  }

  function Carrosel ( ) {
    return <div class="MyDiv">
    <h2>Principais sintomas</h2>
  </div>
  }

  function ComoFunciona() {
    return <h1 className='ComoFuncionaa'>Como Funciona ?</h1>
  }

  function TextoFinal () {
    return <p><b>Nosso objetivo é simplificar ao máximo , e oferecer uma experiência única e personalizada que busca controlar a ansiedade.
      <br/> Para interagir com o nosso VB-2 basta clicar no ícone do robozinho ao lado !
      <br/> Esperamos oferecer um atendimento personalizado e o mais "humanizado" possível para os nossos usuários.</b></p>
  }


function App() {
  return <>
    <Headerr />
    <Corpo />
    <Conversa />
    <Sintomas />
    <Carrosel />
    <ComoFunciona />
    <TextoFinal />
     </>;
  }


export default App;
