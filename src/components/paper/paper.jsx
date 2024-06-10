import React, { useState, useEffect } from 'react';
import './paper.css';
import paper from '../../images/paper.png';

const Paper = () => {
    const [paperCount, setPaperCount] = useState(100); // Начальное значение 100
    const paperUsage = 0.1; // Скорость уменьшения

    useEffect(() => {
        const interval = setInterval(() => {
            setPaperCount(prevPaperCount => Math.max(prevPaperCount - paperUsage, 0)); // Убедитесь, что значение не ниже 0
        }, 1000); // Обновление каждую секунду

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="paper_block">
            <div className="paper_main_block">
                <div className="paper_img"> 
                    <img src={paper} alt="User Avatar" />
                </div>
                <div className="block-paper">
                    <p className="paper_text">Paper</p>
                    <p className='paper_buy'>Buy more</p>
                </div>
            </div>
            <div className="paper_count"> 
                <p className="paper_count_text">{paperCount.toFixed(1)}/100</p>
            </div>
        </div>
    );
};

export default Paper;
