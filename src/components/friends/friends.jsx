import React from 'react';
import './friends.css';

const Friends = ({ referralLink, onEarnBonus }) => {
    return (
        <div className="friends_block">
            <h2>Invite Friends</h2>
            <p>Share this link with your friends to earn bonuses:</p>
            <div className="referral_link">
                <a href={referralLink} target="_blank" rel="noopener noreferrer">{referralLink}</a>
            </div>
        </div>
    );
};

export default Friends;
