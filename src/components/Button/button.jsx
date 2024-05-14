import React from 'react';
import './button.css'

const Button = ({price}) => {
    return (
        <button className={"button"}>{price}</button>
    );
};

export default Button;