// App.js
import './App.css';
import React from "react";
import {useEffect, useState} from "react";
function App() {
    const app = window.Telegram?.WebApp;
    const [appData, setAppData] = useState(null);

    useEffect(() => {
        const fetchAppData = async () => {
            if (window.Telegram && window.Telegram.WebApp) {
                const app = window.Telegram.WebApp;
                await app.ready(); // Убедитесь, что app готов перед обращением к initDataUnsafe
                setAppData(app.initDataUnsafe);
            }
        }
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

                </a>
                <div>{appData?.user?.first_name}</div>
                <div>{appData?.chat?.id}</div>
            </header>
        </div>
    );
}

export default App;
