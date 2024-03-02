import {Pokemon} from "../../models/Pokemon"

interface PokemonComponentProps{
    pokemon:Pokemon;
}

export default function PokemonImageComponent(props:PokemonComponentProps){
    return (
        <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt="pokemon"/>
    )
}