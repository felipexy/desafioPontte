import React, { useState } from 'react';
import './Slider.scss';
import { useDispatch } from 'react-redux';

/*  min=Valor mínimo do range 
maxPrazos=Valor máximo do range
minValue=Menor valor de empréstimo para setar o label
maxValue=Maior valor de empréstimo para setar o label */
const Slider = ({ min, maxPrazos, minValue, maxValue }) => {
  /*  Uso de React Hooks para setar o rangeVal(valor atual do slider)
 Uso de Math.floor(maxPrazos/2) para setar sempre o valor o mais
 próximo do centro  */
  const [rangeVal, setRangeVal] = useState(Math.floor(maxPrazos / 2));
  const dispatch = useDispatch();

  //  Caso alguma alteração seja feita no slider
  const handleChange = (event, maxPrazos) => {
    document.getElementById(`t${rangeVal}`).style.zIndex = '1'; //  Deixa as "bolinhas brancas" à frente no layer
    setRangeVal(event.target.value); // atualiza o rangeVal
    document.getElementById(
      'Slider'
    ).style.background = `linear-gradient(90deg, rgb(139,185,38) ${
      event.target.value * ((1 / maxPrazos) * 100)
    }%, rgb(118,0,117) ${event.target.value * ((1 / maxPrazos) * 100)}%)`; // Pinta o slider de acordo com o movimento do cursor
    document.getElementById(`t${event.target.value}`).style.zIndex = '-1'; // Deixa a "bolinha branca" correspondente à posição do cursor invisível
    dispatch({ type: 'CHANGE_ID', id: event.target.value }); // Dispara o dispatch no redux atualizando a posição atual do slider
  };

  //  Seta o array de "bolinhas brancas"
  const listOfDots = [];

  //  Popula o array de "bolinhas brancas" de acordo com o número de opções
  function populatelistOfDots() {
    for (let i = 0; i <= maxPrazos; i++) {
      if (i === Math.floor(maxPrazos / 2)) {
        listOfDots.push(
          <li key={i} id={`t${i}`} className="tickList__ticker--Invisible" />
        );
      } else {
        listOfDots.push(
          <li key={i} id={`t${i}`} className="tickList__ticker" />
        );
      }
    }
  }
  //  Monta o componente slider com as "bolinhas brancas"
  return (
    <div>
      <div className="sliderContainer">
        <input
          data-testid="sliderTest"
          id="Slider"
          type="range"
          className="sliderContainer__slider"
          min={min}
          max={maxPrazos}
          value={rangeVal}
          step="1"
          onChange={(event) => handleChange(event, maxPrazos)}
          style={{
            background: `linear-gradient(90deg, rgb(139,185,38) ${
              rangeVal * ((1 / maxPrazos) * 100)
            }%, rgb(118,0,117) ${rangeVal * ((1 / maxPrazos) * 100)}%)`,
          }}
        />
      </div>
      <ul className="tickList">
        {populatelistOfDots()}
        {listOfDots}
      </ul>
      <div className="flexLabels">
        <p className="flexLabels__pull-left">R${minValue}</p>
        <p className="flexLabels__pull-right">R${maxValue}</p>
      </div>
    </div>
  );
};

export default Slider;
