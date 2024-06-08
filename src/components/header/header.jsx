// Button.js
import React from 'react';
import './header.css';
import { useEffect, useState } from "react";

const Header = () => {
    const [appData, setAppData] = useState(null);
    let avatar = appData?.chat?.photo_url;
    let name = appData?.user?.first_name
    useEffect(() => {
        const fetchAppData = async () => {
            if (window.Telegram && window.Telegram.WebApp) {
                const app = window.Telegram.WebApp;
                await app.ready();
                setAppData(app.initDataUnsafe);
            }
        };
        fetchAppData();
    }, []);
        const app = window.Telegram.WebApp;
        app.ready();
        console.log(appData)
    return (
        <div>
            <div className="header">
                <div className="avatar">
                    <img src={avatar} alt="image_user" />
                </div>
                <div className='block-naame'>
                <p className='name'>{avatar}</p>
                    <p className='name'>{name}</p>
                    <p>Leaderboard</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
