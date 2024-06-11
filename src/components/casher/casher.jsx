import React, { useState, useEffect } from 'react';
import './casher.css';
import casher from '../../images/money gun.png';
import Scale from '../scale/scale';
import Paper from '../paper/paper';

const Casher = () => {
    const [cash, setCash] = useState(() => {
        const savedCash = localStorage.getItem('cash');
        return savedCash ? parseFloat(savedCash) : 0;
    });

    const [paperCount, setPaperCount] = useState(() => {
        const savedPaperCount = localStorage.getItem('paperCount');
        return savedPaperCount ? parseFloat(savedPaperCount) : 100;
    });

    const [maxPaperCount, setMaxPaperCount] = useState(() => {
        const savedMaxPaperCount = localStorage.getItem('maxPaperCount');
        return savedMaxPaperCount ? parseFloat(savedMaxPaperCount) : 100;
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
    }, [paperCount]);

    const handleBuyPaper = (paperAmount, cost) => {
        if (cash >= cost && paperCount + paperAmount <= maxPaperCount) {
            setCash(prevCash => {
                const newCash = prevCash - cost;
                localStorage.setItem('cash', newCash);
                return newCash;
            });
            setPaperCount(prevCount => {
                const newCount = prevCount + paperAmount;
                localStorage.setItem('paperCount', newCount);
                return newCount;
            });
        } else {
            console.log('Not enough cash to buy paper or paper count exceeds max limit.');
        }
    };

    const handleUpgradeMaxPaper = (increaseAmount, cost) => {
        if (cash >= cost) {
            setCash(prevCash => {
                const newCash = prevCash - cost;
                localStorage.setItem('cash', newCash);
                return newCash;
            });
            setMaxPaperCount(prevMax => {
                const newMax = prevMax + increaseAmount;
                localStorage.setItem('maxPaperCount', newMax);
                return newMax;
            });
        } else {
            console.log('Not enough cash to upgrade max paper.');
        }
    };

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
            <Paper 
                paperCount={paperCount} 
                maxPaperCount={maxPaperCount} 
                onBuyPaper={handleBuyPaper} 
                onUpgradeMaxPaper={handleUpgradeMaxPaper} 
            />
        </div>
    );
};

export default Casher;
