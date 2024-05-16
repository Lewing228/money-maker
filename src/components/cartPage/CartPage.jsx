import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css';
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import Form from "../Form/Form";
import Button from "../Button/button";

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const handleIncrease = (item) => {
        addToCart(item);
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            removeFromCart(item.id, 1);
        }
    };

    return (
        <div className="cart-page">
            <div className="block_header">
                <div className="left-placeholder">
                    <Link to="/">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2832 8.71143L6.99463 13L11.2832 17.2886" stroke="#D9C77C" strokeMiterlimit="10"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.0055 13H7.11475" stroke="#D9C77C" strokeMiterlimit="10" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <rect x="0.5" y="0.5" width="25" height="25" rx="9.5" stroke="#D9C77C"/>
                        </svg>
                    </Link>
                </div>
                <img className="logo" src={logo} alt="Logo"/>
                <div className="block_basket">
                </div>
            </div>

            <div className="cart">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div className="cart-item-block" key={item.id}>
                                <div className="image-item-block">
                                    <img src={item.imageUrl} alt={item.name}/>
                                    <div className="description-item-block">
                                        <h5 className="item-title">{item.name}</h5>
                                        <div className="description">
                                            <p className="item-price">{item.price}</p>
                                            <p className="item-weight">{item.weight}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block">
                                    <Counter
                                        quantity={item.quantity}
                                        onIncrease={() => handleIncrease(item)}
                                        onDecrease={() => handleDecrease(item)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Form />
            <Button/>
        </div>
    );
};

export default CartPage;