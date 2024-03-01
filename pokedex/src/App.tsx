import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

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
    <div className="App bg-yellow-300">
      <div className="flex flex-row">
        <div className="basis-1/2 flex flex-col">
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-48 mt-20 ml-20"></div>
          <div className="rounded-lg border-8 border-pink-950 bg-rose-800 h-dvh ml-20"></div>
        </div>
        <div className="basis-1/2 flex flex-col">
          <div className="bg-yellow-300 h-48 mt-20 mr-20"></div>
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-dvh mb-20 mr-20">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;