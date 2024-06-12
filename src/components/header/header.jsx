import React, { useEffect, useState } from 'react';
import './header.css';
import medal from '../../images/medal.png'
const Header = () => {
    const [appData, setAppData] = useState(null);
    const avatar = window.Telegram.WebApp.initDataUnsafe.photo_url;
    const name = appData?.user?.first_name;

    useEffect(() => {
        const fetchAppData = async () => {
            if (window.Telegram && window.Telegram.WebApp) {
                const app = window.Telegram.WebApp;
                await app.ready();
                console.log('App data:', app.initDataUnsafe); // Логирование данных
                setAppData(app.initDataUnsafe);
            }
        };
        fetchAppData();
    }, []);

    return (
        <div className="header">
            <div className="avatar-block">
            <div className="avatar"> 
                    <img src={avatar} alt="User Avatar" />
            </div>
            <div className="block-name">
                <p className="name">{name ? name : "Unknown User"}</p>
                <p className='leaderboard'>Leaderboard</p>
            </div>
            </div>
            <div className="medal"> 
                    <img src={medal} alt="medal" />
            </div>
        </div>
    );
};

export default Header;
