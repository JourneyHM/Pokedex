import './container.css';

interface ContainerProps{
    color:string|'white'|'red';
}

export default function Container(props:ContainerProps){
    return(
        <div className={`container ${props.color==='white'?'white':''}${props.color==='red'?'red':''}` }
        ></div>
    )
}
