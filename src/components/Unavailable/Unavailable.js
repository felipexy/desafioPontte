import React from 'react';
import './Unavailable.scss';

const Unavailable = () => {
    return (
        <div className="unavailable">
            <h1 className="unavailable__notWorking">Sistema fora do ar, tente novamente mais tarde! :(</h1>
        </div> 
    );
};

export default Unavailable;