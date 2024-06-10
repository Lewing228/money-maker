import React, { useEffect, useState } from 'react';
import './scale.css';
import safe from '../../images/safe.png';

const Scale = ({ cash, maxCash }) => {
    const [fillPercentage, setFillPercentage] = useState(0);

    useEffect(() => {
        const percentage = (cash / maxCash) * 100;
        setFillPercentage(percentage);
    }, [cash, maxCash]);

    return (
        <div className="scale">
            <div className='percent'>
                <p>{Math.floor(fillPercentage * 10) / 10}%</p> {/* Округление до одного знака вниз */}
            </div>
            <div className='mainScale'>
                <div className='fill' style={{ width: `${fillPercentage}%` }}></div>
            </div>
            <div className='safe'>
                <img src={safe} alt="safe" />
            </div>
        </div>
    );
};

export default Scale;
