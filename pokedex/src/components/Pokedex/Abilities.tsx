import './abilities.css';

interface AbilitiesProps{
    color:string|'green';
    label:string;
}

export default function Abilities(props:AbilitiesProps){
    return (
        <div className={`abt ${props.color==='green'?'green':''}` }>
            Abilities
        </div>
    )
}