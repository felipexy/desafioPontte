import React, { useState } from 'react';
import './ContinueBtt.scss';


const ContinueBtt = ({isValid}) => {

    function handleClick(){

    }

    if(!isValid){
        return (
            <div className="flexContainer">
            <button className="continueBttNotValid"  onClick={handleClick}><h2 className="content">Gostei, continuar</h2></button>  
            </div>
        );
    } else{
        return (
            <div className="flexContainer">
            <button className="continueBttValid"  onClick={handleClick}><h2 className="content">Gostei, continuar</h2></button>  
            </div>
        );
    }
};

export default ContinueBtt;