import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css';
import logo from "../../images/logo.png";
import {Link, Route, Routes} from "react-router-dom";
import Counter from "../Counter/Counter";
import Form from "../Form/Form";
import Button from "../Button/button";
import FoodCard from "../Card/foodCard";
import Product from "../Product/Product";
import burgerImage from "../../images/burger.png";
import salad from "../../images/salad.png";
import soap from "../../images/soap.png";
import poke from "../../images/poke.png";
import meat from "../../images/meat.png";
import toast from "../../images/toast.png";

const CartPage = () => {

    const { cartItems, addToCart, removeFromCart } = useCart();
    const cards = [
        { id: 1, name: "Чизбургер", weight: "310 г", description:"Котлета, булка, помидор, лук", price: "430", imageUrl: burgerImage },
        { id: 2, name: "Цезарь с курицей", weight: "190 г",description:"Льстья салата, курица, помидор, яйцо",  price: "230", imageUrl: salad },
        { id: 3, name: "Сырный крем-суп", weight: "220 г",description:"Сыр, крем, суп",  price: "440", imageUrl: soap },
        { id: 4, name: "Поке с лососем", weight: "270 г",description:"Помидоры, кукуруза, дольки лосося, капуста",  price: "380", imageUrl: poke },
        { id: 5, name: "Ассорти из шашлыка", weight: "450 г",description:"Баранина, утка, антрекот, свинина",  price: "930", imageUrl: meat },
        { id: 6, name: "Тосты", weight: "190 г",description:"Голубика, банан, тосты",  price: "220", imageUrl: toast },
    ];


    const handleIncrease = (item) => {
        addToCart(item);
    };

    const handleDecrease = (item) => {
        removeFromCart(item.id);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
                    <p>Корзина пуста!</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div className="cart-item-block" key={item.id}>
                                <div className="image-item-block">
                                    <img src={item.imageUrl} alt={item.name}/>
                                    <div className="description-item-block">
                                        <h5 className="item-title">{item.name}</h5>
                                        <div className="description">
                                            <p className="item-price">{`${item.price}₽`}</p>
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
            <Button size='new-size' price={`${totalPrice}₽`} label="Заказать"/>
            <div className="recomended">
                <div className="title-rec">
                    <h2>Попробуйте также</h2>
                </div>
                <Routes className="link-reset">
                <Route path="/" element={
                    <div className="card-container">
                        {cards.map(card => (
                            <FoodCard
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                weight={card.weight}
                                price={card.price}
                                imageUrl={card.imageUrl}
                                onAddToCart={() => addToCart(card)}
                            />
                        ))}
                    </div>
                } />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<Product />} />
                </Routes>
            </div>
        </div>
    );
};

export default CartPage;