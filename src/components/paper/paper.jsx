import React, { useState } from 'react';
import './paper.css';
import paper from '../../images/paper.png';
import Popup from '../popup/popup';

const Paper = ({ paperCount, onBuyPaper }) => {
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
                    <button onClick={togglePopup}>Buy more paper</button>
                </div>
            </div>
            <div className="paper_count"> 
                <p className="paper_count_text">{paperCount.toFixed(1)}/100</p>
            </div>
            {isPopupOpen && <Popup onClose={togglePopup} onBuyPaper={onBuyPaper} />}
        </div>
    );
};

export default Paper;
