import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Container from './components/Pokedex/Container';
import Name from './components/Pokedex/Name';
import Abilities from './components/Pokedex/Abilities';
import PokemonComponent from './components/PokemonComponent';
import { Pokemon } from './models/Pokemon';
import { PokeApi } from './api/PokeApi';

function App() {
  const [pokemonName,setPokemonName] = React.useState('');
  const [pokemon,setPokemon]=React.useState<Pokemon|null>(null);

  function buscar(){
    PokeApi.getPokemonById(pokemonName).then((response)=>{
      setPokemon(response.data);
    }).catch((error)=>{
      console.error(error);
    })
  }

  return (
    <div className="App bg-yellow-300">
      <div className="flex flex-row">
        <div className="basis-1/2 flex flex-col">
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-48  mt-20 ml-20"></div>
          <div className="rounded-lg border-8 border-pink-950 bg-rose-800 h-dvh  ml-20">
            <div className="rounded-lg border-8 border-pink-950 bg-rose-800 h-full ml-20 mr-20">
              <Container color='white'></Container>
              {/*<Name color='white_namebox' label={''}></Name>*/}
              <br></br>
              <br></br>
              <p>{pokemonName}</p>
              <input type="text" onChange={(e)=>setPokemonName(e.target.value)}></input>
              <Button onClick={()=>buscar()} color='red' label='Buscar'></Button>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col">
          <div className="bg-yellow-300 h-48 mt-20 mr-20"></div>
          <div className="rounded-lg border-8 border-pink-950 bg-rose-700 h-dvh mb-20 mr-20">
          <div className="App">
            {pokemon &&
              <Abilities pokemon={pokemon} color= 'green'></Abilities>
            }
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;