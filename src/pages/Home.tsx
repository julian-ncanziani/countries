import { AppUseSelector, useAppDispatch } from '../redux/hooks';
import {useEffect} from 'react';
//components
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { fetchCountries } from '../redux/slices/countries';
//custom functions




function Home(){
    
    const countries= AppUseSelector((state)=>state.countries.countriesList);
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        dispatch(fetchCountries());
    },[]);
    
    
    

    
    return(
        <div>
            <NavBar/>
            <Cards countries={countries}/>
            <Footer/>
        </div>
    )
};

export default Home;