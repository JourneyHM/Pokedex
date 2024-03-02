import { Pokemon } from "../../models/Pokemon";

interface AbilitiesProps{
    pokemon:Pokemon
    color:string|'green';
}

export default function Abilities(props:AbilitiesProps){
    return (
        <div className={`abt ${props.color==='green'?'green':''}` }>
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
           
    )
}