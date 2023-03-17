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
                    <h1>{props.country.name.official}</h1>
                </span>
                <ol>
                    <li>{props.country.region}</li>
                    <li>{props.country.subregion}</li>
                    <li>{props.country.population}</li>
                    <li>{props.country.capital}</li>
                    <li>lat: {props.country.latlng[0]}/long: {props.country.latlng[1]}</li>
                    {Object.keys(currencies).map((currencyCode)=>{
                        const currency  = currencies[currencyCode];
                        return (<li>{currency.name}, {currency.symbol}</li>)
                    })}
                </ol>
            </Modal>
        
    </>);
};