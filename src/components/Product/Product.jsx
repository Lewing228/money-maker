// Product.js
import React, { useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useCart } from '../cartPage/CartContext';
import './Product.css';
import burgerImage from "../../images/burger.png";
import logo from "../../images/logo.png";
import Counter from "../Counter/Counter";
import Button from "../Button/button";
import FoodCard from "../Card/foodCard";
import CartPage from "../cartPage/CartPage";
import Carousel from "../Carousel/Carousel";
import salad from "../../images/salad.png";
import soap from "../../images/soap.png";
import poke from "../../images/poke.png";
import meat from "../../images/meat.png";
import toast from "../../images/toast.png";

const Product = () => {
    const { id } = useParams();
    const { addToCart, cartItems} = useCart();
    const [localQuantity, setLocalQuantity] = useState(1);

    const handleIncrease = () => {
        setLocalQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setLocalQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    };

    const handleAddToCart = () => {
        if (localQuantity > 0) {
            const product = products.find(product => product.id === parseInt(id));
            addToCart({ ...product, quantity: localQuantity });
            setLocalQuantity(1); // Reset local quantity
        }
    };

    const products = [
        { id: 1, name: "Чизбургер", weight: "310 г", description:"Котлета, булка, помидор, лук", price: "430", imageUrl: burgerImage },
        { id: 2, name: "Цезарь с курицей", weight: "190 г",description:"Льстья салата, курица, помидор, яйцо",  price: "230", imageUrl: salad },
        { id: 3, name: "Сырный крем-суп", weight: "220 г",description:"Сыр, крем, суп",  price: "440", imageUrl: soap },
        { id: 4, name: "Поке с лососем", weight: "270 г",description:"Помидоры, кукуруза, дольки лосося, капуста",  price: "380", imageUrl: poke },
        { id: 5, name: "Ассорти из шашлыка", weight: "450 г",description:"Баранина, утка, антрекот, свинина",  price: "930", imageUrl: meat },
        { id: 6, name: "Тосты", weight: "190 г",description:"Голубика, банан, тосты",  price: "220", imageUrl: toast },
    ];

    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="product-page">
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
                    <Link to="/cart">
                        <svg width="30" height="30" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.6666 19.6666L19.6666 17.2083C19.6666 11.7775 24.0692 7.37496 29.5 7.37496V7.37496C34.9308 7.37496 39.3333 11.7775 39.3333 17.2083L39.3333 19.6666"
                                stroke="#D9C77C" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M36.875 34.4167V29.5" stroke="#D9C77C" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M22.125 34.4167V29.5" stroke="#D9C77C" strokeWidth="1.5" strokeLinecap="round"/>
                            <path
                                d="M9.83337 23.6666C9.83337 21.781 9.83337 20.8382 10.4192 20.2524C11.0049 19.6666 11.9478 19.6666 13.8334 19.6666H45.1667C47.0523 19.6666 47.9951 19.6666 48.5809 20.2524C49.1667 20.8382 49.1667 21.781 49.1667 23.6666V43.625C49.1667 47.3962 49.1667 49.2818 47.9951 50.4534C46.8236 51.625 44.9379 51.625 41.1667 51.625H17.8334C14.0621 51.625 12.1765 51.625 11.0049 50.4534C9.83337 49.2818 9.83337 47.3962 9.83337 43.625V23.6666Z"
                                stroke="#D9C77C" strokeWidth="1.5"/>
                        </svg>
                        {cartItems.length > 0 && (
                            <div className="cart-quantity">
                                {cartItems.reduce((total, item) => total + item.quantity, 0)}
                            </div>
                        )}
                    </Link>
                </div>
            </div>
            <div className="block_product">
                <Carousel images={[product.imageUrl, burgerImage, burgerImage]}/>
                <div className="block-text-product">
                    <p className='description-product'>{product.description}</p>
                    <div className="product-info">
                        <div className="main-product-info">
                            <h2 className='title-product'>{product.name}</h2>
                            <span className='weight-product'>{product.weight}</span>
                        </div>
                        <div className="price-product">
                            <span className='price-product'>{product.price}₽</span>
                        </div>
                    </div>
                </div>
                <div className="product-buttons">
                    <Counter counterProduct='counter-product' quantity={localQuantity}
                             onIncrease={handleIncrease}
                             onDecrease={handleDecrease}/>
                    <Button label='Добавить' size='product-btn' classLabel='new-label' onClick={handleAddToCart}/>
                </div>
            </div>
            <div className="recomended">
                <div className="title-rec">
                    <h2>Попробуйте также</h2>
                </div>
                <Routes className="link-reset">
                    <Route path="/" element={
                        <div className="card-container">
                            {products.map(card => (
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
                    }/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Product;
