import './GCbtnH.css';

interface ButtonProps{
    onClick:()=>void;
    color:string|'red'|'blue'|'green'|'violet';
    label:string;
}

export default function HButton(props:ButtonProps){
    return (
        <><button onClick={props.onClick}
            className={`Hbtn ${props.color === 'red' ? 'red' : ''} ${props.color === 'green' ? 'green' : ''} ${props.color === 'violet' ? 'violet' : ''} ${props.color === 'blue' ? 'blue' : ''}`}
        >
                {props.label}
        </button></>
    )
}