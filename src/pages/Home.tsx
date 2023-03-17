import { AppUseSelector } from '../redux/hooks';

//components
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home(){

    const countries = AppUseSelector((state)=>state.countries.countriesList);
    
    return(
        <div>
            <NavBar/>
            <Cards countries={countries}/>
            <Footer/>
        </div>
    )
};

export default Home;