import React, { useState } from 'react';
import './ContinueBtt.scss';


const ContinueBtt = ({}) => {

    const [vali, setValid] = useState(false);

    function handleClick(){
    }

    return (
        <div className="flexContainter">
        <button className="cardOption"  onClick={handleClick}>Gostei, continuar</button>  
        </div>
    );
};

export default ContinueBtt;