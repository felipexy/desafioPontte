import React, { useState } from 'react';
import './Slider.scss';
import { useDispatch } from 'react-redux';

const Slider = ({min, max}) => {

    let [rangeVal, setRangeVal] = useState(Math.floor(max/2));
    let [lastValue, setlastValue] = useState(Math.floor(max/2));
    const dispatch = useDispatch();

    const handleChange = (event, max) => {
        document.getElementById(`t${lastValue}`).style.zIndex = "1"; 
        setlastValue(event.target.value);
        setRangeVal(event.target.value)
        document.getElementById("Slider").style.background = `linear-gradient(90deg, rgb(139,185,38) ${event.target.value*((1/max)*100)}%, rgb(118,0,117) ${event.target.value*((1/max)*100)}%)` 
        document.getElementById(`t${event.target.value}`).style.zIndex = "-1";   
        dispatch({ type: 'CHANGE_ID', id: event.target.value } )
    }

    var lista = [];
    function listOfDots(){ 
        for (var i = 0; i <= max; i++){
             
            if(i === Math.floor(max/2)){
                lista.push(<li key={i} id={`t${i}`} className="tickerInvisible"></li>)
            } else{
            lista.push(<li key={i} id={`t${i}`} className="ticker"></li>)
            }
        }
    }

    return (
        <div>
            <div className="sliderContainer"> 
                <input id="Slider" type="range" className="slider" min={min} max={max} value={rangeVal} step="1"
                onChange={(event) => handleChange(event,max)} style={{background: `linear-gradient(90deg, rgb(139,185,38) ${rangeVal*((1/max)*100)}%, rgb(118,0,117) ${rangeVal*((1/max)*100)}%)`}}/>
            </div>
                <ul className="range-tickers">
                    {listOfDots()}
                    {lista}
                </ul>
        </div>
    );
  };

  export default Slider;



  