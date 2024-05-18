import React from 'react';
import './button.css'

const Button = ({ price, label, size, classLabel, onClick }) => {
    return (
        <button className={`button ${label && price ? 'button-with-label' : ''} ${size}`} onClick={onClick}>
            {label && <span className={`button-label ${classLabel}`}>{label}</span>}
            {price && <span className={`button-price ${label ? 'button-price-with-label' : ''}`}>{price}</span>}
        </button>
    );
};

export default Button;
