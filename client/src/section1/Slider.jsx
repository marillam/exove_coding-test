import React from "react";
import { useState, useRef } from 'react';
import './slider.css'

//Apparently onChange doesn't fire only when the dragging is over 
//so I made the custom event above.

//Using the commented console.logs should show that the custom event 
//is only fired when the slider is released.

const Slider = () => {
    const [ oldVal, setOldVal ] = useState('50')
    const [ value, setValue ] = useState('50');

    const ref = useRef(null);

    const fireEvent = () => {
        const customEvent = new CustomEvent('sliderValueChanged', { newValue: value });
        const element = document.getElementById('root')
        element.dispatchEvent(customEvent);
    }

    const handleChange = (e) => {
        setOldVal(value);
        setValue(e.target.value);
        //console.log('changed')
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(value !== oldVal) {
            fireEvent();
            //console.log('fired')
        }
        //console.log('clicked')
    }

    return(
        <div className='container' ref={ref}>
            <button onClick={handleClick}>
                <input type='range' min='0' max='110' value={value} id='slider' onChange={handleChange} />
                <label htmlFor='slider'>{'Happyness level: ' + value}</label>
            </button>
        </div>
    );
}

export default Slider;