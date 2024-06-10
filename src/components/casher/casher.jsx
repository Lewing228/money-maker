import React, { useState, useEffect } from 'react';
import './casher.css';
import casher from '../../images/money gun.png';
import Scale from '../scale/scale';

const Casher = () => {
    const [cash, setCash] = useState(() => {
        const savedCash = localStorage.getItem('cash');
        return savedCash ? parseFloat(savedCash) : 0;
    });

    const [paperCount, setPaperCount] = useState(() => {
        const savedPaperCount = localStorage.getItem('paperCount');
        return savedPaperCount ? parseFloat(savedPaperCount) : 1;
    });

    const cashSpeed = 0.1; // Скорость увеличения
    const paperUsage = 0.1; // Скорость уменьшения бумаги

    useEffect(() => {
        const interval = setInterval(() => {
            if (paperCount > 0) {
                setCash(prevCash => {
                    const newCash = prevCash + cashSpeed;
                    localStorage.setItem('cash', newCash);
                    return newCash;
                });
                setPaperCount(prevPaperCount => {
                    const newPaperCount = Math.max(prevPaperCount - paperUsage, 0);
                    localStorage.setItem('paperCount', newPaperCount);
                    return newPaperCount;
                });
            }
        }, 1000); // Обновление каждую секунду

        return () => clearInterval(interval);
    }, [paperCount]); // Добавление paperCount в зависимости

    return (
        <div className="casher_block">
            <Scale cash={cash} maxCash={1000} /> {/* Передача cash и maxCash в Scale */}
            <div className="block_cash">
                <p className="cash_text">{cash.toFixed(1)} Mg</p>
                <p className="cash_speed">{cashSpeed} Mg/s</p>
            </div>
            <div className='image_casher'>
                <img src={casher} alt="casher" />
            </div>
        </div>
    );
};

export default Casher;
