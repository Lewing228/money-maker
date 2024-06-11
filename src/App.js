import './App.css';
import React from "react";
import Header from './components/header/header';
import Casher from './components/casher/casher';
import Footer from './components/footer/footer';
function App() {
    // const app = window.Telegram?.WebApp; // Оставляем переменную закомментированной, если она не используется

    return (
        <div className="App">
            <Header/>
            <Casher/>
            <Footer/>
        </div>
    );
}

export default App;
