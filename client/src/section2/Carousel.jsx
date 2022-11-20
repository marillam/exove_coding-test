import React from "react";
import { useState } from 'react';
import '../section1/slider.css'
import './carousel.css';

//assumes images is an array of objects with src and alt
const Carousel = ({images}) => {
    const [index, setIndex] = useState(0)

    const goBack = (e) => {
        e.preventDefault();
        setIndex(Math.max(index - 1, 0));
    }

    const goForward = (e) => {
        e.preventDefault();
        setIndex(Math.min(index + 1, images.length - 1));
    }

    return(
        <div className='container'>
            <button onClick={goBack} disabled={index === 0 ? true : false} >Previous</button>
            <img src={images[index].src} alt={images[index].alt} />
            <button onClick={goForward} disabled={index === (images.length - 1) ? true : false} >Next</button>
        </div>
    );
}


export default Carousel;