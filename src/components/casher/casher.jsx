import React, { useState, useEffect } from 'react';
import './casher.css';
import casher from '../../images/money gun.png';
import Scale from '../scale/scale';
import Paper from '../paper/paper';

const Casher = ({ userId }) => {
  const [cash, setCash] = useState(0);
  const [paperCount, setPaperCount] = useState(100);
  const [maxPaperCount, setMaxPaperCount] = useState(100);
  const [lastUserAction, setLastUserAction] = useState(Date.now()); // Track the last time a user action occurred

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://31.128.41.78:3000/api/user/461493836`);
      const data = await response.json();
      setCash(data.coins);
      setPaperCount(data.paper_volume);
      setMaxPaperCount(data.paper_capacity);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUserData = async (newCash, newPaperCount, newMaxPaperCount) => {
    try {
      await fetch(`http://31.128.41.78:3000/api/user/461493836`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cash: newCash,
          paperCount: newPaperCount,
          maxPaperCount: newMaxPaperCount,
        }),
      });
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`http://31.128.41.78:3000/api/user/461493836`);
        if (response.ok) {
          const data = await response.json();
          // Only update the state if there has been no user action in the last second
          if (Date.now() - lastUserAction > 1000) {
            setCash(data.coins);
            setPaperCount(data.paper_volume);
            setMaxPaperCount(data.paper_capacity);
          }
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [userId, lastUserAction]);

  const handleBuyPaper = (paperAmount, cost) => {
    if (cash >= cost && paperCount + paperAmount <= maxPaperCount) {
      const newCash = cash - cost;
      const newPaperCount = paperCount + paperAmount;
      setCash(newCash);
      setPaperCount(newPaperCount);
      setLastUserAction(Date.now()); // Update the last user action time
      updateUserData(newCash, newPaperCount, maxPaperCount); // Update the server with new values
    } else {
      console.log('Not enough cash to buy paper or paper count exceeds max limit.');
    }
  };

  const handleUpgradeMaxPaper = (newMax, cost) => {
    if (cash >= cost) {
      const newCash = cash - cost;
      const newmaxPaperCount = maxPaperCount + newMax;
      setCash(newCash);
      setMaxPaperCount(newmaxPaperCount);
      setLastUserAction(Date.now());
      updateUserData(newCash, paperCount, newmaxPaperCount); // Update the server with new values
    } else {
      console.log('Not enough cash to upgrade max paper.');
    }
  };

  return (
    <div className="casher_block">
      <Scale cash={cash} maxCash={1000} />
      <div className="block_cash">
        <p className="cash_text">{cash.toFixed(1)} Mg</p>
        <p className="cash_speed">0.1 Mg/s</p>
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
