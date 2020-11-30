import React, { useState } from 'react';
import './Slider.scss';
import { useDispatch } from 'react-redux';

const Slider = ({min, maxPrazos, minValue, maxValue}) => {

    let [rangeVal, setRangeVal] = useState(Math.floor(maxPrazos/2));
    const dispatch = useDispatch();

    const handleChange = (event, maxPrazos, ) => {
        document.getElementById(`t${rangeVal}`).style.zIndex = "1"; 
        setRangeVal(event.target.value)
        document.getElementById("Slider").style.background = `linear-gradient(90deg, rgb(139,185,38) ${event.target.value*((1/maxPrazos)*100)}%, rgb(118,0,117) ${event.target.value*((1/maxPrazos)*100)}%)` 
        document.getElementById(`t${event.target.value}`).style.zIndex = "-1";   
        dispatch({ type: 'CHANGE_ID', id: event.target.value })
    }

    var listOfDots = [];

    function populatelistOfDots(){ 
        for (var i = 0; i <= maxPrazos; i++){
            if(i === Math.floor(maxPrazos/2)){
                listOfDots.push(<li key={i} id={`t${i}`} className="tickList__ticker--Invisible"></li>)
            } else{
                listOfDots.push(<li key={i} id={`t${i}`} className="tickList__ticker"></li>)
            }
        }
    }

    return (
        <div>
            <div className="sliderContainer"> 
                <input id="Slider" type="range" className="sliderContainer__slider" min={min} max={maxPrazos} value={rangeVal} step="1"
                onChange={(event) => handleChange(event,maxPrazos)} style={{background: `linear-gradient(90deg, rgb(139,185,38) ${rangeVal*((1/maxPrazos)*100)}%, rgb(118,0,117) ${rangeVal*((1/maxPrazos)*100)}%)`}}/>
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



  