import React, { useState } from 'react';
import './Slider.scss';
import { useDispatch } from 'react-redux';

const Slider = ({min, max}) => {

    let [rangeVal, setRangeVal] = useState(2);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setRangeVal(event.target.value)
        console.log(event.target.value);
        document.getElementById("Slider").style.background = `linear-gradient(90deg, rgb(139,185,38) ${event.target.value*25}%, rgb(118,0,117) ${event.target.value*25}%)`       
        dispatch({ type: 'CHANGE_ID', id: event.target.value } )
    }



    return (
        <div>
            <div className="sliderContainer"> 
                <input id="Slider" type="range" className="slider" min={min} max={max} value={rangeVal} step="1"
                onChange={(event) => handleChange(event)}/>
            </div>
            <div>
                <ul className="range-labels">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>    
        </div>
    );
  };

  export default Slider;



  