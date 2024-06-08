import React from 'react';
import './paper.css';
import paper from '../../images/paper.png'
const Paper = () => {
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
                    <p className="paper_count_text">34,676.33/48,200</p>
            </div>
        </div>
    );
};

export default Paper;
