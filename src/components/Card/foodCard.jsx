import React from 'react';
import './foodCard.css';

const FoodCard = ({ name, weight, price, imageUrl, onAddToCart}) => {
    return (
        <div className="food-card-container">
            <div className="food-card-backdrop">
                <img className="food-card-image" src={imageUrl} alt="Food"/>
                <div className="food-card-price-container">
                    <div className="food-card-name">{name}</div>
                    <div className="food-card-weight">{weight}</div>
                    <button className={"button"} onClick={onAddToCart}>{price}</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
