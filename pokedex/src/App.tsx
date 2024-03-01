import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Container from './components/Pokedex/Container';

function App() {
  const [contador, setContador]= React.useState(0);

  function aumentar(){
    setContador(contador+1);
    console.log(contador);
  }

  function disminuir(){
    setContador(contador-1);
    console.log(contador);
  }

  return (
    <div className="App">
      <div className="flex flex-row">
        <div className="basis-5/6 flex flex-col">
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-48 mt-20 ml-20"></div>
          
          <div className="rounded-lg border-8 border-pink-950 bg-rose-800 h-dvh ml-20">
            <Container color='blue'></Container>
          </div>
          
        </div>
        <div className="basis-1/12 mt-16 mb-20 flex-grow-0">
          <div className="flex flex-col" style={{ height: '100%' }}>
            <div className="h-48 rounded-full border-8 border-pink-950 bg-rose-700" style={{ flex: 1 }}>
              
            </div>
          </div>
        </div>
        <div className="basis-5/6 flex flex-col">
          <div className="bg-white h-48 mt-20 mr-20"></div>
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-dvh mb-20 mr-20">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
