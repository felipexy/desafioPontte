import React from 'react';
import './ContinueBtt.scss';


const ContinueBtt = ({isValid}) => {

    function handleClick(){
        
    }

    if(!isValid){
        return (
            <div className="buttonContainer">
            <button className="buttonContainer__continueBtt--NotValid"  onClick={handleClick}><h2 className="content">Gostei, continuar</h2></button>  
            </div>
        );
    } else{
        return (
            <div className="buttonContainer">
                <button className="buttonContainer__continueBtt"  onClick={handleClick}>
                    <h2 className="buttonContainer__continueBtt__content">Gostei, continuar</h2>
                </button>  
            </div>
        );
    }
};

export default ContinueBtt;