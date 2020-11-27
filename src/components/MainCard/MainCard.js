import React, { useState, useEffect } from 'react';
import './MainCard.scss';
import CardTitle from '../CardTitle/CardTitle';
import Slider from '../Slider/Slider'
import CardMonths from '../CardMonths/CardMonths';
import ContinueBtt from '../Buttons/ContinueBtt'
import { useSelector } from 'react-redux';
import '../../Utils/loader.scss'
import '../../Icons/questMark.scss'

const MainCard = () => {    

    const [options, setOptions] = useState({});
    const [loading, setLoading] = useState(false);

    const sliderPosition = useSelector(state => state.id);
    const OptChosen = useSelector(state => state.valid)

    useEffect(async () => {
        const response = await fetch('https://testfrontend.pontte.com.br/');
        const data = await response.json();
        setOptions(data);
        setLoading(true);
    }, []);

    var cardOptions = [];
    let qtdeOptions = 0;

    function defineQtdeOptions(){
        options.prazos.forEach(prazo => {
            qtdeOptions++;
        });
        return qtdeOptions;    
    }

    function optionCardMount(valor){
        for (var i = 0; i < qtdeOptions; i++){
            cardOptions.push(<CardMonths key={i} months={options.prazos[i]} value={formatValues(options.parcelas[i][valor])}></CardMonths>);    
        }
    }

    function formatValues(value){
        value = value.toFixed(2) + '';
        let x = value.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? ',' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    if (loading){
        const valueTitle = options.valoresEmprestimo[sliderPosition];
        const grossAmount = options.valoresEmprestimeBruto[sliderPosition];
        defineQtdeOptions();
        return (
            <div className="MainCard">
                <CardTitle></CardTitle>
                <div>
                    <h1 className="valueText">R$ {formatValues(valueTitle)}</h1>
                    <h3 className="grossAmount">Valor bruto: R$ {formatValues(grossAmount)} <i className="questMarkIcon"></i></h3>
                </div>
                <div>
                    <Slider min="0" max={qtdeOptions-1}></Slider> 
                    <div className="flexLabels">
                        <p className="pull-left">R${formatValues(options.valoresEmprestimo[0])}</p>
                        <p className="pull-right">R${formatValues(options.valoresEmprestimo[qtdeOptions-1])}</p>
                    </div>
                    <div>
                        <h3 className="selectQty">Selecione a quantidade de parcelas</h3>
                    </div>
                    <div className="cardsFlexContainer">
                        {
                        optionCardMount(sliderPosition)
                        }
                        {cardOptions}
                    </div>
                    <ContinueBtt isValid={OptChosen}></ContinueBtt>
                </div>
                <p className="footer">Taxa de 1,09% ao mês. Valor da primeira parcela - Sistema de Amortização Constante (suas parcelas diminuem com o tempo).</p>
            </div>  
        );
    } else {
        return (
            <div className="loader"></div>
        );
    }
};

export default MainCard;