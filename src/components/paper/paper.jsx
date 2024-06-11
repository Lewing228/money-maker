import React, { useState } from 'react';
import './paper.css';
import Popup from '../popup/popup';

const Paper = ({ paperCount, maxPaperCount, onBuyPaper, onUpgradeMaxPaper }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Buy more paper</button>
      {isPopupOpen && <Popup onClose={togglePopup} onBuyPaper={onBuyPaper} onUpgradeMaxPaper={onUpgradeMaxPaper} />}
    </div>
  );
};

export default Paper;
