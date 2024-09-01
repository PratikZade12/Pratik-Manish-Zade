import React, { useState } from 'react';
import './NotifySection.css'; 

function NotifySection() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    const handleNotify = () => {
        if (isValidEmail) {
            setMessage('Thank you! We will notify you.');
            
        } else {
            setMessage('Invalid email. Please try again.');
        }
    };

    return (
        <div className="container mt-5 notify-section">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card p-4 shadow">
                        <h3 className="text-center mb-4">Get Notified</h3>
                        <p className="text-center mb-4">Be the first to know! We will let you know when it's live.</p>
                        <div className="d-flex">
                            <input
                                type="email"
                                className={`form-control ${isValidEmail ? '' : 'is-invalid'} me-2`}
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                            <button
                                className="btn btn-primary"
                                disabled={!isValidEmail}
                                onClick={handleNotify}
                            >
                                Notify Me
                            </button>
                        </div>
                        {message && (
                            <div className={`mt-3 alert ${isValidEmail ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotifySection;
