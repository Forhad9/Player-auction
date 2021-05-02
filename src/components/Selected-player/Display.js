import React from 'react';
import './Display.css';

const Display = (props) => {
    const {Image, Name} = props.player;
    return (
        
        <div className="selected-player">
            <p><img src={Image} alt=""/></p>
            <h4>{Name}</h4>
        </div>
    );
};

export default Display;