import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="traffic-light">
            <div id="trafficTop"></div>
            <div id="container">
                <div 
                    className={`light ${color === 'red' ? 'active red' : 'red'}`} 
                    onClick={() => setColor('red')}
                ></div>
                <div 
                    className={`light ${color === 'yellow' ? 'active yellow' : 'yellow'}`} 
                    onClick={() => setColor('yellow')}
                ></div>
                <div 
                    className={`light ${color === 'green' ? 'active green' : 'green'}`} 
                    onClick={() => setColor('green')}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLight;