import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SqrButton from './components/SquareBtn';
import NBRButton from './components/NbrButton';
import HButton from './components/GCbtn';
import VButton from './components/GCbtnV';
import Container from './components/Pokedex/Container';
import Name from './components/Pokedex/Name';
import Abilities from './components/Pokedex/Abilities';
import DisplayNumbers from './components/Pokedex/DisplayNumbers';

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
          <div className="rounded-lg border-8 border-pink-950 bg-rose-800 h-dvh  ml-20">
            <div className="rounded-lg border-8 border-pink-950 bg-rose-800 h-full ml-20 mr-20">
              <Container color='white'></Container>
              <Button onClick={aumentar} label="" color='blue'></Button>
              <SqrButton onClick={aumentar} label="" color='yellow'></SqrButton>
              <SqrButton onClick={aumentar} label="" color='green'></SqrButton>
              <VButton onClick={aumentar} label="" color='violet'></VButton>
              <HButton onClick={aumentar} label="" color='violet'></HButton>
              <VButton onClick={aumentar} label="" color='violet'></VButton>
              <HButton onClick={aumentar} label="" color='violet'></HButton>
              <Name color='white_namebox' label={''}></Name>
              <Abilities color='green' label={''}></Abilities>
             
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col">
          <div className="bg-yellow-300 h-48 mt-20 mr-20"></div>
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-dvh mb-20 mr-20">
            <DisplayNumbers color='disColor'></DisplayNumbers>
            <NBRButton onClick={aumentar} label="1" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="2" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="3" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="4" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="5" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="6" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="7" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="8" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="9" color='blue'></NBRButton>
            <NBRButton onClick={aumentar} label="10" color='blue'></NBRButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;