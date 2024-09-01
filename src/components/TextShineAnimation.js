import React, { useState, useEffect } from 'react';
import './TextShineAnimation.css'; 
import RocketAnimation from './RocketAnimation'; 

function TextShineAnimation({ mode }) {
    const [darkMode, setDarkMode] = useState(mode === 'dark');

    useEffect(() => {
        setDarkMode(mode === 'dark');
        document.body.classList.toggle('dark-mode', mode === 'dark');
    }, [mode]);

    return (
        <div className={`text-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="heading-container">
                <RocketAnimation /> {/* Rocket animation on the same line */}
                <h1 className="main-heading">Launching New Module Soon!</h1>
            </div>
            <p className="subheading-text">
                Exciting things are in the works! We're currently <b>Crafting a new feature</b> for you.<br />
                Keep an eye out for updates – We're working to make it available soon!
            </p>
            <h2 className="shine-text">Get ready for the reveal!</h2>
        </div>
    );
}

export default TextShineAnimation;
