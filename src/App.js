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
    const [cash, setCash] = useState(0);
    const [paperVolume, setPaperVolume] = useState(100);
    const [paperCapacity, setPaperCapacity] = useState(100);
    const [userId, setUserId] = useState('');
    const [isDataLoaded, setIsDataLoaded] = useState(false);

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

    useEffect(() => {
        const fetchUserData = async () => {
            if (userId) {
                try {
                    const response = await fetch(`http://31.128.41.78:3000/api/user/461493836`);
                    const data = await response.json();
                    setCash(data.coins);
                    setPaperVolume(data.paper_volume);
                    setPaperCapacity(data.paper_capacity);
                    setIsDataLoaded(true);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, [userId]);

    const earnMg = (amount) => {
        setMg(prevMg => prevMg + amount);
    };

    const earnCash = (amount) => {
        setCash(prevCash => {
            const newCash = prevCash + amount;
            updateUserCash(newCash, paperVolume, paperCapacity);
            return newCash;
        });
    };

    const updateUserCash = async (newCash, newPaperVolume, newPaperCapacity) => {
        try {
            await fetch(`http://31.128.41.78:3000/api/user/461493836`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    coins: newCash,
                    paper_volume: newPaperVolume,
                    paper_capacity: newPaperCapacity
                }),
            });
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const renderContent = () => {
        switch (activeComponent) {
            case 'casher':
                return <Casher cash={cash} setCash={setCash} userId={userId} paperVolume={paperVolume} setPaperVolume={setPaperVolume} paperCapacity={paperCapacity} setPaperCapacity={setPaperCapacity} isDataLoaded={isDataLoaded} />;
            case 'tasks':
                return <Tasks mg={mg} userId={userId} onEarnMg={earnMg} onEarnCash={earnCash} />;
            case 'friends':
                return <Friends userId={userId} onEarnBonus={earnMg} />;
            default:
                return <Casher cash={cash} setCash={setCash} userId={userId} paperVolume={paperVolume} setPaperVolume={setPaperVolume} paperCapacity={paperCapacity} setPaperCapacity={setPaperCapacity} isDataLoaded={isDataLoaded} />;
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
