import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    const { Name, category, country, Price, Image } = props.data;
    const handleAddPlayer = props.handleAddPlayer;




    return (
        <div className="card">

            <img src={Image} alt="" />



            <div className="card-body">
                <h1>{Name}</h1>
                <p style={{ marginTop: '-20px', marginLeft: '50px' }}>({category})</p>
                <h2>{country}</h2>
                <h1 style={{ color: '#FEE400' }}>${Price}</h1>
                <button onClick={() => handleAddPlayer(props.data)}><FontAwesomeIcon className="icon" icon={faUserPlus} />ADD PLAYER</button>





            </div>


        </div>
    );
};

export default Details;