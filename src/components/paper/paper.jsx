import React, { useState } from 'react';
import './paper.css';
import paper from '../../images/paper.png';
import Popup from '../popup/popup';

const Paper = ({ paperCount, maxPaperCount, onBuyPaper, onUpgradeMaxPaper }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="paper_block">
            <div className="paper_main_block">
                <div className="paper_img"> 
                    <img src={paper} alt="User Avatar" />
                </div>
                <div className="block-paper">
                    <p className="paper_text">Paper</p>
                    <p className='paper_buy' onClick={togglePopup}>Buy more</p>
                </div>
            </div>
            <div className="paper_count"> 
                <p className="paper_count_text">{paperCount !== undefined ? paperCount.toFixed(1) : '0.0'}/{maxPaperCount}</p>
            </div>
            {isPopupOpen && <Popup onClose={togglePopup} onBuyPaper={onBuyPaper} onUpgradeMaxPaper={onUpgradeMaxPaper} />}
        </div>
    );
};

export default Paper;
