import Modal from 'react-modal';
import { useState } from 'react';
import { Country } from '../redux/slices/countries';
import {  CountryCurrencies } from '../redux/slices/countries';
type modalProps ={
    country: Country
};

export default function CountryModal(props: modalProps){


    const [modalVisibility, setVisibility] = useState(false);

    function handleOpenModal(){
        setVisibility(true);
    };

    function handleCloseModal(){
        setVisibility(false);
    };
    
    const currencies: CountryCurrencies = props.country.currencies;
    
    const customStyle = {
        content: {
            top:'10%',
            left:'20%',
            right:'20%',
        }
    };
    
    return(<>
        <button onClick={handleOpenModal}>{props.country.name.common}</button>
        
            <Modal isOpen={modalVisibility} style={customStyle}>
                <div className='flex justify-end'>
                    <button className='bg-red-500 hover:bg-red-700 w-24 h-10 rounded-lg font-medium text-m' 
                        onClick={handleCloseModal}>Close</button>
                </div>
                <span className='flex flex-wrap'>
                    <img src={props.country.flags.png} alt="" className='w-40'/>
                    <h1 className='w-3/5 text-3xl text-center'>{props.country.name.official}</h1>
                </span>
                <table className='mt-10 ml-auto mr-auto'>
                    <tr>
                        <th className='w-40 text-left'>Region</th>
                        <td>{props.country.region}</td>
                    </tr>
                    <tr>
                        <th className='w-40 text-left'>SubRegion</th>
                        <td>{props.country.subregion}</td>
                    </tr>
                    <tr>
                        <th className='w-40 text-left'>Population</th>
                        <td>{props.country.population}</td>
                    </tr>
                    <tr>
                        <th className='w-40 text-left'>Capital</th>
                        <td>{props.country.capital}</td>
                    </tr>
                    <tr>
                        <th className='w-40 text-left'>Lat/Long</th>
                        <td>{props.country.latlng[0]}/{props.country.latlng[1]}</td>
                    </tr>
                    <tr>
                        <th className='w-40 text-left'>Currency</th>
                        <td>{Object.keys(currencies).map((currencyCode)=>{
                        const currency  = currencies[currencyCode];
                        return (<>{currency.name} ({currency.symbol})</>)
                    })}</td>
                    </tr>
                </table>
            </Modal>
        
    </>);
};