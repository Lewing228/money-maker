import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header/header';
import Casher from './components/casher/casher';
import Tasks from './components/tasks/tasks';
import Friends from './components/friends/friends';
import Footer from './components/footer/footer';

function App() {
    const [activeComponent, setActiveComponent] = useState('casher');
    const [mg, setMg] = useState(0);
    const [cash, setCash] = useState(() => {
        const savedCash = localStorage.getItem('cash');
        return savedCash ? parseFloat(savedCash) : 0;
    });
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const initTelegram = () => {
            if (window.Telegram && window.Telegram.WebApp) {
                const user = window.Telegram.WebApp.initDataUnsafe.user;
                if (user) {
                    setUserId(user.id);
                }
            }
        };
        initTelegram();
    }, []);

    const earnMg = (amount) => {
        setMg(prevMg => prevMg + amount);
    };

    const earnCash = (amount) => {
        setCash(prevCash => {
            const newCash = prevCash + amount;
            localStorage.setItem('cash', newCash);
            return newCash;
        });
    };

    const renderContent = () => {
        switch (activeComponent) {
            case 'casher':
                return <Casher userId={userId} />;
            case 'tasks':
                return <Tasks mg={mg} userId={userId} onEarnMg={earnMg} onEarnCash={earnCash} />;
            case 'friends':
                return <Friends userId={userId} onEarnBonus={earnMg} />;
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
