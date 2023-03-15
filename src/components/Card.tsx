import { Country } from "../redux/slices/countries";
import { useAppDispatch } from "../redux/hooks";
import { deleteCountry } from "../redux/slices/countries";

interface CardProps{
    country: Country,
    index: number
}

export default function Card(props: CardProps){

    console.log(props.country, 'aca estoy');
    const dispatch = useAppDispatch();
    return(<div 
        className="m-2"
        key={props.index}>
        <button onClick={()=> {dispatch(deleteCountry(props.country.name.common))}}>X</button>
        <div className="flex flex-col ">
            <div className="grid justify-items-center">
                <img className="max-h-32"
                    src={props.country.flags.png} 
                    alt="" />
            </div>
            <div>
                <p className="font-mono text-2xl">{props.country.name.common}</p>
            </div>
        </div>
    </div>);
};