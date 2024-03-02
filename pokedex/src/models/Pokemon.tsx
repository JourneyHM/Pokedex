export interface Pokemon{
    name:string;
    id:number;
    sprites:{
        other:{
            "official-artwork":{
                front_default:string
            }
        }
    }
    moves:Move[];
}
interface Move{
    move:{
        name:string;
    }
}