import React from 'react';
import './foodCard.css';
import Button from "../Button/button";  // Импорт стилей

const FoodCard = ({ name, weight, price, imageUrl }) => {
    return (
        <div className="food-card-container">
            <div className="food-card-backdrop">
                <img className="food-card-image" src={imageUrl} alt="Food"/>
                <div className="food-card-price-container">
                    <div className="food-card-name">{name}</div>
                    <div className="food-card-weight">{weight}</div>
                    <Button price={price}/>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
