import { Pokemon } from "../models/Pokemon";

interface PokemonComponentProps{
    pokemon:Pokemon
}

export default function PokemonComponent(props:PokemonComponentProps) {
    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                <div className="bg-gray-200 p-4">
                    <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" />
                </div>
                <div className="bg-gray-200 p-4">
                    <h1>Nombre: {props.pokemon.name}</h1>
                    <h2>Id: {props.pokemon.id}</h2>
                </div>
            </div>
            <div className="w-1/2">
                <div className="bg-gray-200 p-4">
                    <h1>Movimientos</h1>
                    <ul>
                    {props.pokemon.moves.map((move,index)=>{
                        return (
                        <li key={index}>
                            {move.move.name}
                        </li>
                        )
                    })}
                    </ul>


                </div>
            </div>
        </div>
    );
}