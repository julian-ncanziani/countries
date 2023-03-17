//imported types or interfaces 
import { Country } from "../redux/slices/countries"

//components
import Card from "./Card"

//props component types or interfaces
type CardsProps = {
    countries: Array<Country>
}

export default function Cards(props: CardsProps){
    
    return(<div>
                <hr />
                <h2 className="font-bold">Africa</h2>
                <div className="w-full flex flex-wrap">
                    {props.countries.map((country, index)=>{
                    if(country.region.toLocaleLowerCase().includes('africa')) return <Card country={country} key={index}/>
                    return <></>
                    })}
                </div>
                <hr />
                <h2 className="font-bold">America</h2>
                <div className="w-full flex flex-wrap">
                    {props.countries.map((country, index)=>{
                    if(country.region.toLocaleLowerCase().includes('america')) return <Card country={country} key={index}/>
                    return <></>
                    })}
                </div>
                <hr />
                <h2 className="font-bold">Asia</h2>
                <div className="w-full flex flex-wrap">
                    {props.countries.map((country, index)=>{
                    if(country.region.toLocaleLowerCase().includes('asia')) return <Card country={country} key={index}/>
                    return <></>
                    })}
                </div>
                <hr />
                <h2 className="font-bold">Oceania</h2>
                <div className="w-full flex flex-wrap">
                    {props.countries.map((country, index)=>{
                    if(country.region.toLocaleLowerCase().includes('ocean')) return <Card country={country} key={index}/>
                    return <></>
                    })}
                </div>
                <hr />
                <h2 className="font-bold">Europa</h2>
                <div className="w-full flex flex-wrap">
                    {props.countries.map((country, index)=>{
                    if(country.region.toLocaleLowerCase().includes('europ')) return <Card country={country} key={index}/>
                    return <></>
                    })}
                </div>
                <hr />
        </div>);
};