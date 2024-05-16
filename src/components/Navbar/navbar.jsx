import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = index => {
        setActiveIndex(index);
    };

    return (
        <div className="navbar">
            {["Популярное", "Салаты", "Закуски", "Супы", "Десерты"].map((text, index) => (
                <div className={`block_nav ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)} key={index}>
                    <p className="nav_text">{text}</p>
                </div>
            ))}
            <div className="highlight" style={{ transform: `translateX(${activeIndex * 100}%)` }}></div>
        </div>
    );
};

export default Navbar;
