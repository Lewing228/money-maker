// Button.js
import React, { useState } from 'react';
import './button.css';

const Button = ({ price, label, size, classLabel, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`button ${label && price ? 'button-with-label' : ''} ${size} ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            {label && <span className={`button-label ${classLabel}`}>{label}</span>}
            {price && <span className={`button-price ${label ? 'button-price-with-label' : ''}`}>{price}</span>}
        </button>
    );
};

export default Button;
