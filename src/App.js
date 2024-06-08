import './App.css';
import React from "react";
import Header from './components/header/header';
function App() {
    // const app = window.Telegram?.WebApp; // Оставляем переменную закомментированной, если она не используется

    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;
