import React, { useState } from 'react';
import './Slider.scss';
import { useDispatch } from 'react-redux';

const Slider = ({min, max}) => {

    let [rangeVal, setRangeVal] = useState(2);
    let [lastValue, setlastValue] = useState(2);
    const dispatch = useDispatch();


    console.log(lastValue);


    const handleChange = (event) => {
        document.getElementById(`t${lastValue}`).style.zIndex = "1"; 
        setlastValue(event.target.value);
        setRangeVal(event.target.value)
        document.getElementById("Slider").style.background = `linear-gradient(90deg, rgb(139,185,38) ${event.target.value*25}%, rgb(118,0,117) ${event.target.value*25}%)` 
        document.getElementById(`t${event.target.value}`).style.zIndex = "-1";   
        dispatch({ type: 'CHANGE_ID', id: event.target.value } )
    }

    return (
        <div>
            <div className="sliderContainer"> 
                <input id="Slider" type="range" className="slider" min={min} max={max} value={rangeVal} step="1"
                onChange={(event) => handleChange(event)}/>
            </div>
                <ul className="range-tickers">
                    <li id="t0" className="ticker"></li>
                    <li id="t1" className="ticker"></li>
                    <li id="t2" className="tickerInvisible"></li>
                    <li id="t3" className="ticker"></li>
                    <li id="t4" className="ticker"></li>
                </ul>
        </div>
    );
  };

  export default Slider;



  