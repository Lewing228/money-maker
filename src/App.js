import './App.css';
import React from "react";
import { useEffect, useState } from "react";

function App() {
    // const app = window.Telegram?.WebApp; // Оставляем переменную закомментированной, если она не используется
    const [appData, setAppData] = useState(null);
    var search = window.Telegram?.WebApp.initData
    console.log(search)

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
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>{appData?.user?.first_name}</div>
                <div>{appData?.chat?.id}</div>
            </header>
        </div>
    );
}

export default App;
