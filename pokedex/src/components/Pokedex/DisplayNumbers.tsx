import { lazy } from 'react';
import './displayNumbers.css'

interface DisplayProps{
    color:string|'disColor'
    label:string;
}

export default function DisplayNumbers(props:DisplayProps){
    return(
        <div className={`display ${props.color==='disColor'?'disColor':''}`}>
            {props.label}
        </div>
    )
}
