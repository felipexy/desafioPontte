import React, { useState, useEffect } from 'react';
import './MainCard.scss';
import CardTitle from '../CardTitle/CardTitle';
import Slider from '../Slider/Slider'
import CardMonths from '../CardMonths/CardMonths';
import ContinueBtt from '../Buttons/ContinueBtt'
import { useSelector } from 'react-redux';
import '../../Utils/loader.scss'
import '../../Icons/questMark.scss'
import Unavailable from '../Unavailable/Unavailable';

const MainCard = () => {

    var teste = `{
        "prazos": [
            60,
            90,
            120,
            150,
            180,
            190
        ],
        "valoresEmprestimo": [
            70000,
            85000,
            100000,
            115000,
            130000,
            130000
        ],
        "valoresEmprestimeBruto": [
            78919.63,
            95114.83,
            110841.81,
            126366.55,
            141891.29,
            130000
        ],
        "parcelas": [
            [
                2287.12,
                2736.97,
                3173.81,
                3605.04,
                4036.26,
                130000
            ],
            [
                1848.68,
                2208.55,
                2558.02,
                2903,
                3247.98,
                130000
            ],
            [
                1629.46,
                1944.35,
                2250.13,
                2551.98,
                2853.83,
                130000
            ],
            [
                1497.93,
                1785.82,
                2065.39,
                2341.37,
                2617.35,
                130000
            ],
            [
                1410.24,
                1680.14,
                1942.24,
                2200.96,
                2459.69,
                130000
            ]
        ]
    }`;

    const [options, setOptions] = useState({});
    const [loading, setLoading] = useState(false);

    const sliderPosition = useSelector(state => state.id);
    const OptChosen = useSelector(state => state.valid)

    useEffect(async () => {
        const response = await fetch('https://testfrontend.pontte.com.br/');
        const data = await response.json();
        setOptions(data);
        const teste2 = JSON.parse(teste);
        //setOptions(teste2);
        setLoading(true);
    }, []);

    var cardOptions = [];
    let qtdeOptions = 0;

    function defineQtdeOptions() {
        options.prazos.forEach(prazo => {
            qtdeOptions++;
        });
        return qtdeOptions;
    }

    function optionCardMount(valor) {
        for (var i = 0; i < qtdeOptions; i++) {
            cardOptions.push(<CardMonths key={i} months={options.prazos[i]} value={formatValues(options.parcelas[i][valor])}></CardMonths>);
        }
    }

    function formatValues(value) {
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

    if (loading) {
        const valueTitle = options.valoresEmprestimo[sliderPosition];
        const grossAmount = options.valoresEmprestimeBruto[sliderPosition];
        defineQtdeOptions();
        if (qtdeOptions >= 1 && qtdeOptions < 6) {
            return (
                <div className="MainCard">
                    <CardTitle></CardTitle>
                    <div>
                        <h1 className="valueText">R$ {formatValues(valueTitle)}</h1>
                        <h3 className="grossAmount">Valor bruto: R$ {formatValues(grossAmount)} <i className="questMarkIcon"></i></h3>
                    </div>
                    <div>
                        <Slider min="0" max={qtdeOptions - 1}></Slider>
                        <div className="flexLabels">
                            <p className="pull-left">R${formatValues(options.valoresEmprestimo[0])}</p>
                            <p className="pull-right">R${formatValues(options.valoresEmprestimo[qtdeOptions - 1])}</p>
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
                <Unavailable></Unavailable>
            );
        }
    } else {
        return (
            <div className="loader"></div>
        );
    }
};

export default MainCard;