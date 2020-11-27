import React, { useState } from 'react';
import './Slider.scss';
import { useDispatch } from 'react-redux';

const Slider = ({min, max}) => {

    const [rangeVal, setRangeVal] = useState(2);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setRangeVal(event.target.value)
        dispatch({ type: 'CHANGE_ID', id: event.target.value } )
    }

    return (
        <div className="sliderContainer"> 
            <input type="range" className="slider" min={min} max={max} value={rangeVal}
            onChange={(event) => handleChange(event)}/>
        </div>
    );
  };
  
  export default Slider;



  