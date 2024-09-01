import React from 'react';
import './Alert.css';

function Alert({ onButtonClick }) {
    return (
        <div className="alert">
            <div className="alert-title">We are Live Now!</div>
            <div className="alert-description">
                Our new feature is now Live and ready for you to explore. Go ahead and give it a try.
            </div>
            <button className="btn-primary" onClick={onButtonClick}>
                Get Started
            </button>
        </div>
    );
}

export default Alert;
