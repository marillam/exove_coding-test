import React from 'react';
import Layout from './Layout';
import { useState } from 'react';
import './layout.css'

const items3 = [{heading: 'Item heading 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis nunc pellentesque finibus consequat. Aenean imperdiet nisi arcu, ac ullamcorper leo ornare eget. Etiam hendrerit.'}, 
                {heading: 'Item heading 2', content: 'Mauris mi diam, eleifend ut sapien in, tristique consectetur nisl. Sed eget augue et dui pretium sollicitudin sit amet eget ante. Mauris tempor elementum fermentum.'}, 
                {heading: 'Item heading 3', content: 'In hac habitasse platea dictumst. Aliquam a elit metus. Nunc ullamcorper est metus, ac finibus diam fringilla quis.'}];

const items5 = [{heading: 'Item heading 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis nunc pellentesque finibus consequat. Aenean imperdiet nisi arcu, ac ullamcorper leo ornare eget. Etiam hendrerit.'}, 
                {heading: 'Item heading 2', content: 'Mauris mi diam, eleifend ut sapien in, tristique consectetur nisl. Sed eget augue et dui pretium sollicitudin sit amet eget ante. Mauris tempor elementum fermentum.'}, 
                {heading: 'Item heading 3', content: 'In hac habitasse platea dictumst. Aliquam a elit metus. Nunc ullamcorper est metus, ac finibus diam fringilla quis.'},
                {heading: 'Item heading 4', content: 'Ut at ex sit amet orci mattis euismod suscipit sit amet erat. Aliquam nunc libero, laoreet eu lectus id, venenatis pharetra dui. Nullam gravida orci sapien, a consequat velit volutpat vitae.'},
                {heading: 'Item heading 5', content: 'Vestibulum mi purus, vulputate eu quam in, blandit sodales metus. Aliquam elementum accumsan tellus a consequat.'}];

const Section3 = () => {
    const [ items, setItems ] = useState(items3);

    return(
        <>
            <Layout items={items}/>
            <div>
                <button onClick={() => { setItems(items3) }}>Three items</button>
                <button onClick={() => { setItems(items5) }}>Five items</button>
            </div>
        </>
    );
}

export default Section3;