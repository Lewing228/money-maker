import React from 'react';
import './FoodCard.css';  // Импорт стилей

const FoodCard = ({ name, weight, price, imageUrl }) => {
    return (
        <div className="food-card-container">
            <div className="food-card-backdrop"></div>
            <div className="food-card-price-container">
                <div className="food-card-price"></div>
                <div className="food-card-price-text">{price}</div>
            </div>
            <div className="food-card-weight">{weight}</div>
            <div className="food-card-name">{name}</div>
            <img className="food-card-image" src={imageUrl} alt="Food" />
        </div>
    );
};

export default FoodCard;
