import './GCbtnV.css';

interface ButtonProps{
    onClick:()=>void;
    color:string|'red'|'blue'|'green'|'violet';
    label:string;
}

export default function VButton(props:ButtonProps){
    return (
        <><button onClick={props.onClick}
            className={`Vbtn ${props.color === 'red' ? 'red' : ''} ${props.color === 'green' ? 'green' : ''} ${props.color === 'violet' ? 'violet' : ''} ${props.color === 'blue' ? 'blue' : ''}`}
        >
                {props.label}
        </button></>
    )
}