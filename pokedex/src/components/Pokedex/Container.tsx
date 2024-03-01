import './container.css';

interface ContainerProps{
    color:string|'white'|'red'|'blue';
}

export default function Container(props:ContainerProps){
    return(
        <div className={`container ${props.color==='white'?'white':''}${props.color==='red'?'red':''}${props.color==='blue'?'blue':''}` }
        ></div>
    )
}
