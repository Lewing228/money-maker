import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header/header';
import Casher from './components/casher/casher';
import Tasks from './components/tasks/tasks';
import Friends from './components/friends/friends';
import Footer from './components/footer/footer';

function App() {
    const [activeComponent, setActiveComponent] = useState('casher');
    const [setMg] = useState(0);
    const [referralLink, setReferralLink] = useState('');

    useEffect(() => {
        const initTelegram = () => {
            if (window.Telegram && window.Telegram.WebApp) {
                const user = window.Telegram.WebApp.initDataUnsafe.user;
                if (user) {
                    fetch(`http://127.0.0.1:5000/get_referral_link?user_id=${user.id}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.referral_link) {
                                setReferralLink(data.referral_link);
                            }
                        })
                        .catch(error => console.error('Error fetching referral link:', error));
                }
            }
        };
        initTelegram();
    }, []);

    const earnMg = (amount) => {
        setMg(prevMg => prevMg + amount);
    };

    const renderContent = () => {
        switch (activeComponent) {
            case 'casher':
                return <Casher />;
            case 'tasks':
                return <Tasks onEarnMg={earnMg} />;
            case 'friends':
                return <Friends referralLink={referralLink} onEarnBonus={earnMg} />;
            default:
                return <Casher />;
        }
    };

    return (
        <div className="App">
            <Header />
            {renderContent()}
            <Footer activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        </div>
    );
}

export default App;
