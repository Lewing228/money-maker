import React from 'react';
import './scale.css';
import safe from '../../images/safe.png'
const Scale = () => {
    
    return (
        <div className="scale">
            <div className='percent'>
                <p>52.7%</p>
            </div>
            <div className='mainScale'>

            </div>
            <div className='safe'>
                <img src={safe} alt="safe" />
            </div>
        </div>
    );
};

export default Scale;
