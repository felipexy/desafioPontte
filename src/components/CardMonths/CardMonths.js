import React, { useState } from 'react';
import './CardMonths.scss';


const CardMonths = ({months, value}) => {

    const [optionSelect, setOptionSelected] = useState(false);

    function handleClickOption(){
        console.log(optionSelect);
        setOptionSelected(true);
        console.log(optionSelect);
    }

    return (
        <div className="flexContainter">
        <button className="cardOption"  onClick={handleClickOption}>
            <h3 className="cardMonthContent">{months} meses</h3>
            <h2 className="cardValueContent">R$ {value}</h2>
        </button>  
        </div>
    );
};

export default CardMonths;