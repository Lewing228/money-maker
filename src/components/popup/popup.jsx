import React from 'react';
import './popup.css';

const Popup = ({ onClose, onBuyPaper, onUpgradeMaxPaper }) => {
    const purchaseOptions = [
        { paperAmount: 10, cost: 1 },
        { paperAmount: 50, cost: 4 },
        { paperAmount: 100, cost: 7 },
    ];

    const upgradeOptions = [
        { increaseAmount: 50, cost: 10 },
        { increaseAmount: 100, cost: 20 },
        { increaseAmount: 150, cost: 30 },
    ];

    return (
        <div className="popup">
            <div className="popup_inner">
                <h2>Buy Paper</h2>
                {purchaseOptions.map(option => (
                    <button key={option.paperAmount} onClick={() => {
                        onBuyPaper(option.paperAmount, option.cost);
                        onClose();
                    }}>
                        {option.paperAmount} бумага за {option.cost} Mg
                    </button>
                ))}
                <h2>Upgrade Storage</h2>
                {upgradeOptions.map(option => (
                    <button key={option.increaseAmount} onClick={() => {
                        onUpgradeMaxPaper(option.increaseAmount, option.cost);
                        onClose();
                    }}>
                        Увеличить хранилище на {option.increaseAmount} за {option.cost} Mg
                    </button>
                ))}
                <button className="close_button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
