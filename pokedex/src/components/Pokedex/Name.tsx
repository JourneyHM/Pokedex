import './name.css';

interface NameProps{
    color:string|'white_namebox';
    label:string;
}

export default function Name(props:NameProps){
    return (
        <div className={`name ${props.color==='white_namebox'?'white_namebox':''}` }>
            Name
        </div>
    )
}