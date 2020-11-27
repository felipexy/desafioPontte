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

    function optionCardMount(valor){
        const bla = 0;
        //options.map(op => {
        //    bla++;
        //    console.log(bla);
        //})

        for (var i = 0; i <= 4; i++){ //AQUIIIIIIIIIIIIIIIIIIIIIII
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
                <div>
                    <Slider min="0" max="4"></Slider> 
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
            <h2>namoral lek só vai</h2> //AQUIIIIIIIIIIIIIIII
        );
    }
};

export default MainCard;