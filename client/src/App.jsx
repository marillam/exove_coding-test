import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import './app.css'

const App = () => {
    return (
        <div>
            <div className='header'>
                <Link to={'/section1'}>Section 1 task 1C</Link>
                <Link to={'/section2'}>Section 2 task 2A</Link>
                <Link to={'/section3'}>Section 3 task 3D</Link>
            </div>
            <Routes>
                <Route path='/section1' element={<Section1 />}/>
                <Route path='/section2' element={<Section2 />}/>
                <Route path='/section3' element={<Section3 />}/>
            </Routes>
        </div>
    );
};

export default App;
