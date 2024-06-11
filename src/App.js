import './App.css';
import React, { useState } from "react";
import Header from './components/header/header';
import Casher from './components/casher/casher';
import Tasks from './components/tasks/tasks';
import Friends from './components/friends/friends';
import Footer from './components/footer/footer';

function App() {
    const [activeComponent, setActiveComponent] = useState('casher');

    const renderContent = () => {
        switch (activeComponent) {
            case 'casher':
                return <Casher />;
            case 'tasks':
                return <Tasks />;
            case 'friends':
                return <Friends />;
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
