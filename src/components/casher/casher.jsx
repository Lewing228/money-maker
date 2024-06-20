import React, { useState, useEffect } from 'react';
import './casher.css';
import casher from '../../images/money gun.png';
import Scale from '../scale/scale';
import Paper from '../paper/paper';

const Casher = ({ userId, cash, setCash }) => {
    const [paperCount, setPaperCount] = useState(100);
    const [maxPaperCount, setMaxPaperCount] = useState(100);

    const cashSpeed = 0.1; // Скорость увеличения
    const paperUsage = 0.1; // Скорость уменьшения бумаги

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://31.128.41.78:3000/api/user/${userId}`);
                const data = await response.json();
                setCash(data.coins);
                setPaperCount(data.paper_volume);
                setMaxPaperCount(data.paper_capacity);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId, setCash]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (paperCount > 0) {
                setCash(prevCash => prevCash + cashSpeed);
                setPaperCount(prevPaperCount => Math.max(prevPaperCount - paperUsage, 0));
            }
        }, 1000); // Обновление каждую секунду

        return () => clearInterval(interval);
    }, [paperCount, setCash]);

    useEffect(() => {
        const updateUserData = async () => {
            try {
                await fetch(`http://31.128.41.78:3000/api/user/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cash,
                        paperCount,
                        maxPaperCount,
                    }),
                });
            } catch (error) {
                console.error('Error updating user data:', error);
            }
        };

        if (userId) {
            updateUserData();
        }
    }, [cash, paperCount, maxPaperCount, userId]);

    const handleBuyPaper = (paperAmount, cost) => {
        if (cash >= cost && paperCount + paperAmount <= maxPaperCount) {
            setCash(prevCash => prevCash - cost);
            setPaperCount(prevCount => prevCount + paperAmount);
        } else {
            console.log('Not enough cash to buy paper or paper count exceeds max limit.');
        }
    };

    const handleUpgradeMaxPaper = (newMax, cost) => {
        if (cash >= cost) {
            setCash(prevCash => prevCash - cost);
            setMaxPaperCount(newMax);
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
