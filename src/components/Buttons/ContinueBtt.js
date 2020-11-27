import React, { useState } from 'react';
import './ContinueBtt.scss';


const ContinueBtt = ({}) => {

    const [valid, setValid] = useState(false);

    function handleClick(){

    }

    return (
        <div className="flexContainer">
        <button className="continueBtt"  onClick={handleClick}><h2 className="content">Gostei, continuar</h2></button>  
        </div>
    );
};

export default ContinueBtt;