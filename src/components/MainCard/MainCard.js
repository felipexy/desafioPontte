import React, { useState, useEffect } from 'react';
import './MainCard.scss';
import CardTitle from '../CardTitle/CardTitle';
import Slider from '../Slider/Slider'
import CardMonths from '../CardMonths/CardMonths';

import { useSelector } from 'react-redux';

const MainCard = () => {    

    const [optionSelect, setOptionSelected] = useState(false);
    const [options, setOptions] = useState({});
    const [loading, setLoading] = useState(false);

    const sliderPosition = useSelector(state => state.id);

    function handleClickOption(){
        setOptionSelected(true);
    }

    useEffect(async () => {
        const response = await fetch('https://testfrontend.pontte.com.br/');
        const data = await response.json();
        setOptions(data);
        setLoading(true);
    }, []);

    //              meses|valor
    //options.parcelas[0][0]

    var cardOptions = [];
    let qtdeOptions = 0;

    const defineQtdeOptions = () => {
        options.prazos.forEach(prazo => {
            qtdeOptions++;
        });
        return qtdeOptions;    
    }

    function optionCardMount(valor){
        for (var i = 0; i < qtdeOptions; i++){
            cardOptions.push(<CardMonths key={i} months={options.prazos[i]} value={options.parcelas[i][valor]}></CardMonths>);    
        }
    }

    if (loading){
        const valueTitle = options.valoresEmprestimo[sliderPosition];
        const grossAmount = options.valoresEmprestimeBruto[sliderPosition];
        return (
            <div className="MainCard">
                <CardTitle></CardTitle>
                <div>
                    <h1 className="valueText">R$ {valueTitle}</h1>
                    <h3 className="grossAmount">Valor bruto: R$ {grossAmount} <i className="questMarkIcon"></i></h3>
                </div>
                <div>{defineQtdeOptions()}
                    <Slider min="0" max={qtdeOptions}></Slider> 
                    <div>
                        <h3 className="selectQty">Selecione a quantidade de parcelas</h3>
                    </div>
                    <div className="cardsFlexContainer">
                        {
                        optionCardMount(sliderPosition)
                        }
                        {cardOptions}
                    </div>
                </div>
            </div>  
        );
    } else {
        return (
            <div class="loader"></div>
        );
    }
};

export default MainCard;