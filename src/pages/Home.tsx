import { useEffect, useState } from 'react';
import { AppUseSelector, useAppDispatch } from '../redux/hooks';
import { fetchCountry } from '../redux/slices/countries';
//components
import NavBar from '../components/NavBar';
import Card from '../components/Card';



function Home(){

    const countries = AppUseSelector((state)=>state.countries.countriesList);
    const dispatch = useAppDispatch();
    const [countryName, setName]= useState<string>('');
    
    useEffect(()=>{

    },[countries]);
    
   return(
        <>
        <NavBar/>
        <input 
            className='border-solid border-1 border-black rounded '
            type="text" 
            onChange={(event)=>setName(event.target.value)}/>
        <button className='hover:bg-cyan-400 border border-sky-500 rounded mx-5'
            onClick={() => dispatch(fetchCountry(countryName))}>traer data</button>
        <div className='flex flex-wrap'>
            {countries.length !== 0 ? 
            countries.map((country, index)=>{
                return <Card country={country} index={index}/>
            }) : <></>}
        
        </div>
        </>
    )
};

export default Home;