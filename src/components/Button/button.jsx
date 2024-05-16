import React from 'react';
import './button.css'

const Button = ({ price, label }) => {
    return (
        <button className={`button ${label && price ? 'button-with-label' : ''}`}>
            {label && <span className="button-label">{label}</span>}
            {price && <span className={`button-price ${label ? 'button-price-with-label' : ''}`}>{price}</span>}
        </button>
    );
};

export default Button;