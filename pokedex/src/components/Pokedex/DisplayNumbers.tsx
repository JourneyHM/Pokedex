import './displayNumbers.css'

interface DisplayProps{
    color:string|'disColor'
}

export default function DisplayNumbers(props:DisplayProps){
    return(
        <div className={`display ${props.color==='disColor'?'disColor':''}`}></div>
    )
}
