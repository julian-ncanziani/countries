import { Country } from "../redux/slices/countries";
/* import { useAppDispatch } from "../redux/hooks";
import { deleteCountry } from "../redux/slices/countries"; */
import CountryModal from "./Modal";
interface CardProps{
    country: Country,
}

export default function Card(props: CardProps){

    
    /* const dispatch = useAppDispatch(); */
    return(<div className='w-1/6 h-18'>
        {/* <button onClick={()=> {dispatch(deleteCountry(props.country.name.common))}}>X</button> */}
        <div className="flex flex-row m-2">
            <img className="h-10 w-10 "
                    src={props.country.flags.png} 
                    alt="seraching"/>
            <CountryModal country={props.country}></CountryModal>
            
        </div>
    </div>);
};