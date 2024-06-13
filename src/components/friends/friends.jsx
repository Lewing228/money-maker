import React, {useState, useEffect} from 'react';
import './friends.css';

const Friends = ({ userId, onEarnBonus }) => {
    const [referralLink, setReferralLink] = useState('');

    useEffect(() => {
        const storedLink = localStorage.getItem(`referralLink_${userId}`);
        if (storedLink) {
            setReferralLink(storedLink);
        } else {
            const uniqueId = userId; // Используем userId как уникальный идентификатор
            const link = `https://t.me/brrrrrgamebot?start=${uniqueId}`;
            setReferralLink(link);
            localStorage.setItem(`referralLink_${userId}`, link);
        }
    }, [userId]);

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
