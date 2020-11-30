import React, { useState } from 'react';
import './CardMonths.scss';
import { useDispatch } from 'react-redux';


const CardMonths = ({months, value}) => {

    let [optionSelect, setOptionSelected] = useState(false);
    const dispatch = useDispatch();
    let valids = false;

    function handleClickOption(){
        setOptionSelected(true);
        valids = !valids;
        dispatch({ type: 'CHANGE_VALID', valid: valids } );
    }

    return (
        <div>
            <button className="cards__cardOption"  onClick={handleClickOption}>
                <h3 className="cards__cardMonthContent">{months} meses</h3>
                <h2 className="cards__cardValueContent">R$ {value}</h2>
            </button>  
        </div>
    );
};

export default CardMonths;