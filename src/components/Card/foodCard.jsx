import React from 'react';
import './foodCard.css';
import { Link } from 'react-router-dom';

const FoodCard = ({ id, name, weight, price, imageUrl, onAddToCart }) => {
    const handleButtonClick = (e) => {
        e.preventDefault();  // Prevent the default action
        e.stopPropagation(); // Prevent the event from bubbling up to the parent elements
        onAddToCart();
    };

    return (
        <Link to={`/product/${id}`} className="food-card-link">
            <div className="food-card-container">
                <div className="food-card-backdrop">
                    <img className="food-card-image" src={imageUrl} alt="Food"/>
                    <div className="food-card-price-container">
                        <div className="food-card-name">{name}</div>
                        <div className="food-card-weight">{weight}</div>
                        <button className="button" onClick={handleButtonClick}>{price}₽</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FoodCard;
