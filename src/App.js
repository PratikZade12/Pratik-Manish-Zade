import './App.css';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';

import TextShineAnimation from './components/TextShineAnimation';
import Alert from './components/Alert';
import CountdownTimer from './components/CountdownTimer';
import NotifySection from './components/NotifySection';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alertVisible, setAlertVisible] = useState(false);
    const [showOnlyBackground, setShowOnlyBackground] = useState(false);

    useEffect(() => {
        
        const alertState = localStorage.getItem('showAlert');
        if (alertState === 'true') {
            setAlertVisible(true);
        }
    }, []);

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#112125';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };

    const handleTimerFinish = () => {
        setAlertVisible(true);
        localStorage.setItem('showAlert', 'true'); 
    };

    const handleGetStartedClick = () => {
        setShowOnlyBackground(true); 
        localStorage.removeItem('showAlert'); 
    };

    return (
        <Router>
            <Navbar title="Pratik Zade GreetsU" mode={mode} toggleMode={toggleMode} />
            <div className="main-content">
                <BackgroundAnimation />

                {/* Conditionally render components based on state */}
                {!alertVisible && !showOnlyBackground && (
                    <>
                        <TextShineAnimation mode={mode} />
                        <CountdownTimer initialTime={30} onFinish={handleTimerFinish} />
                        <NotifySection />
                    </>
                )}

                {alertVisible && !showOnlyBackground && (
                    <Alert onButtonClick={handleGetStartedClick} />
                )}

                {alertVisible && showOnlyBackground && (
                    <BackgroundAnimation />
                )}
            </div>
        </Router>
    );
}

export default App;

