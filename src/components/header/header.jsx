// Button.js
import React from 'react';
import './header.css';
import { useEffect, useState } from "react";

const Header = () => {
    const [appData, setAppData] = useState(null);
    let avatar = appData?.user?.avatar
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
    return (
        <div>
            <div className="header">
                <div className="avatar">
                    <img src={avatar} alt="logo" />
                </div>
                <div className='block-naame'>
                    <p className='name'>{name}</p>
                    <p>Leaderboard</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
