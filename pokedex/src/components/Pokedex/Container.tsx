import React from 'react';
import './container.css';
import { Pokemon } from "../../models/Pokemon";
import PokemonImageComponent from './PokemonImage';

interface ContainerProps {
    color: string | 'white' | 'red' | 'blue';
    pokemon: Pokemon | null;
}

export default function Container(props: ContainerProps) {
    return (
        <div className={`container ${props.color === 'white' ? 'white' : ''}${props.color === 'red' ? 'red' : ''}${props.color === 'blue' ? 'blue' : ''}`}>
            <div className="escala">
                {props.pokemon && props.pokemon.sprites.other["official-artwork"].front_default &&
                    <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />
                }
            </div>
        </div>
    )
}