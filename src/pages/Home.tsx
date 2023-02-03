import React, { useEffect, useState } from 'react';
import { AppUseSelector, useAppDispatch } from '../redux/hooks';
import { fetchCountry, deleteCountry } from '../redux/slices/countries';




function Home(){

    const countries = AppUseSelector((state)=>state.countries.countriesList);
    const dispatch = useAppDispatch();
    const [countryName, setName]= useState<string>('');
    console.log(countryName);

   

    return(
        <>
        <p>Home</p>
        <input type="text" onChange={(event)=>setName(event.target.value)}/>
        <button onClick={() => dispatch(fetchCountry(countryName))}>traer data</button>
        <div>
            {countries.map((country, index)=>{
                return <div key={index}>
                <hr/>
                    <button onClick={()=> {dispatch(deleteCountry(country.name.common))}}>X</button>
                    <p>Name: {country.name.common}</p>
                    <p>Region: {country.region}</p>
                    <p>Population: {country.population}</p>
                    <p>SugRegion: {country.subregion}</p>
                    <img src={country.flags.png} alt="" />
                    <hr/>
                </div>
            })}
        </div>
        </>
    )
};

export default Home;