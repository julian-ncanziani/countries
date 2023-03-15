import React from 'react';
import { Link } from 'react-router-dom';

function Landing(){
    return(<div>
        <div>
            <button>Login</button>
        </div>
        <p>Landing</p>
        <Link to={'/home'}>Go Home</Link>
    </div>)
};

export default Landing;