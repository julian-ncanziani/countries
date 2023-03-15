import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { fetchCountries } from '../redux/slices/countries';

function Landing(){
    const dispatch = useAppDispatch();

    function handleClick(){
        dispatch(fetchCountries());

    };
    return(<div>
        <div>
            <button>Login</button>
        </div>
        <p>Landing</p>
        <Link to={'/home'} onClick={handleClick}>Go Home</Link>
    </div>)
};

export default Landing;