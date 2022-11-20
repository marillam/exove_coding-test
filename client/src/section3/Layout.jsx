import React from 'react';
import './layout.css';

const Item = ({item}) => {
    const { heading, content } = item;
    return(
        <div className='colored'>
            <h3>{heading}</h3>
            <p className='description'>{content}</p>
        </div>
    );
}

const Layout = ({items}) => {
    return(
        <>
        <div className='colored'>
            <h1>News site</h1>
        </div>
        <div className='grid'>
            {items.map(item => {
                return(
                    <Item key={item.heading} item={item} />
                );
            })}
        </div>
        <div className='colored'>
            <p>&#169; News site</p>
        </div>
        </>
    );
}

export default Layout;