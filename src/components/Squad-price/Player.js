import React from 'react';
import './Player.css';

const Player = (props) => {
    const data = props.data;

    let totalCost = 0;
    for (let i = 0; i < data. length; i++) {
        const spent = data[i];

        totalCost = totalCost + spent.Price;
    }
    return (
        <div className="player-div">

            <h3 style={{ backgroundColor: '#1b2021', display: 'inline-block', color: 'white', padding: '5px', borderRadius: '3px', marginTop: '35px' }}>Player Added {data.length}</h3>
            <h3 style={{ color: 'tomato' }}>Total Base Price ${totalCost}</h3>
            <p>Your selected {data.length} player see the below</p>
        </div>
    );
};

export default Player;