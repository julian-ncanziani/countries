import { useEffect, useState } from 'react';
import { AppUseSelector, useAppDispatch } from '../redux/hooks';

//components
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';


function Home(){

    const countries = AppUseSelector((state)=>state.countries.countriesList);
    
    return(
        <div>
            <NavBar/>
            <Cards countries={countries}/>
        </div>
    )
};

export default Home;