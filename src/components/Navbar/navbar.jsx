import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);  // 0 означает, что первый элемент активен изначально

    const handleClick = index => {
        setActiveIndex(index);  // Обновляем активный индекс при клике
    };

    return (
        <div>
            <div className="navbar">
                <div className={`block_nav ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                    <p className="nav_text">Популярное</p>
                </div>
                <div className={`block_nav ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                    <p className="nav_text">Салаты</p>
                </div>
                <div className={`block_nav ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                    <p className="nav_text">Закуски</p>
                </div>
                <div className={`block_nav ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                    <p className="nav_text">Супы</p>
                </div>
                <div className={`block_nav ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>
                    <p className="nav_text">Десерты</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;