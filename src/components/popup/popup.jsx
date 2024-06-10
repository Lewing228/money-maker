import React from 'react';
import './popup.css';

const Popup = ({ onClose, onBuyPaper, onUpgradeMaxPaper }) => {
    const purchaseOptions = [
        { paperAmount: 10, cost: 1 },
        { paperAmount: 50, cost: 4 },
        { paperAmount: 100, cost: 7 },
    ];

    const upgradeOptions = [
        { upgradeCost: 10, newMax: 150 },
        { upgradeCost: 20, newMax: 200 },
        { upgradeCost: 30, newMax: 250 },
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
                    <button key={option.upgradeCost} onClick={() => {
                        onUpgradeMaxPaper(option.upgradeCost);
                        onClose();
                    }}>
                        Увеличить хранилище до {option.newMax} за {option.upgradeCost} Mg
                    </button>
                ))}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
