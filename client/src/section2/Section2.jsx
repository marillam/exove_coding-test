import React from 'react';
import Carousel from './Carousel';

const images = [{src: 'https://raw.githubusercontent.com/Exove/developer-test/main/material/non-directional-graph.png', alt: 'a non-directional graph'},
                {src: 'https://raw.githubusercontent.com/Exove/developer-test/main/material/non-directional-graph-cycle.png', alt: 'a non-directional graph cycle'}, 
                {src: 'https://raw.githubusercontent.com/Exove/developer-test/main/material/news-site.png', alt: 'image of a goal layout'}]

const Section2 = () => {
    return(
        <Carousel images={images} />
    );
}

export default Section2;