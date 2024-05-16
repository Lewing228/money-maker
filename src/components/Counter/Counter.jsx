import React from 'react';
import './Counter.css';

const Counter = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="counter">
            <button className="counter-button" onClick={onDecrease}>-</button>
            <span className="counter-quantity">{quantity}</span>
            <button className="counter-button" onClick={onIncrease}>+</button>
        </div>
    );
};

export default Counter;