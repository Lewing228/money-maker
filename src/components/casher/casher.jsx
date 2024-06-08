import React from 'react';
import './casher.css';
import casher from '../../images/money gun.png'
const Casher = () => {
    
    return (
        <div className="caher_block">
            <div className="block_cash">
                <p className="cash_text">67,234.88 br</p>
                <p className="cash_speed">12.31 br/s</p>
            </div>
            <div className='image_casher'>
                <img src={casher} alt="casher" />
            </div>
        </div>
    );
};

export default Casher;
