import React from 'react';
import './MainCard.scss';
import CardTitle from '../CardTitle/CardTitle';
import Slider from '../Slider/Slider'
import CardMonths from '../CardMonths/CardMonths';
import ContinueBtt from '../Buttons/ContinueBtt'
import { useSelector } from 'react-redux';
import '../../Utils/loader.scss'
import '../../Icons/questMark.scss'
import Unavailable from '../Unavailable/Unavailable';
import formatValues from '../../Helpers/formatBRL'

const MainCard = () => {

    let sliderPosition = useSelector(state => state.id);
    const OptChosen = useSelector(state => state.valid);
    const loading = useSelector(state => state.loading);
    const options = useSelector(state => state.data);

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
            cardOptions.push(<CardMonths key={i} months={options.prazos[i]} value={formatValues(options.parcelas[i][valor])}/>);
        }
    }

    if (loading) {
        defineQtdeOptions();
        const valueTitle = options.valoresEmprestimo[sliderPosition];
        const grossAmount = options.valoresEmprestimeBruto[sliderPosition];
        if (qtdeOptions >= 1 && qtdeOptions < 6) {
            return (
                <div className="mainCard">
                    <CardTitle/>
                    <div>
                        <h1 className="mainCard__valueText">R$ {formatValues(valueTitle)}</h1>
                        <h3 className="mainCard__grossAmount">Valor bruto: R$ {formatValues(grossAmount)} <i className="questMarkIcon"></i></h3>
                    </div>
                    <div>
                        <Slider min="0" maxPrazos={qtdeOptions - 1} minValue={formatValues(options.valoresEmprestimo[0])} maxValue={formatValues(options.valoresEmprestimo[qtdeOptions - 1])}/>
                        <div>
                            <h3 className="mainCard__selectQty">Selecione a quantidade de parcelas</h3>
                        </div>
                        <div className="cards">
                            {
                                optionCardMount(sliderPosition)
                            }
                            {cardOptions}
                        </div>
                        <ContinueBtt isValid={OptChosen}/>
                    </div>
                    <p className="mainCard__footer">Taxa de 1,09% ao mês. Valor da primeira parcela - Sistema de Amortização Constante (suas parcelas diminuem com o tempo).</p>
                </div>
            );
        } else {
            return (
                <Unavailable/>
            );
        }
    } else {
        return (
            <div className="loader"/>
        );
    }
};

export default MainCard;