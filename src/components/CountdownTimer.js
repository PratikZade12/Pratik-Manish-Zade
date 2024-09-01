import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CountdownTimer.css'; 

function CountdownTimer({ initialTime, onFinish }) {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    onFinish();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [onFinish]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return {
            hrs: hrs.toString().padStart(2, '0'),
            mins: mins.toString().padStart(2, '0'),
            secs: secs.toString().padStart(2, '0'),
        };
    };

    const { hrs, mins, secs } = formatTime(time);

    return (
        <div className="timer-container">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title mb-4"></h5>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="px-3">
                            <div className="display-4">{hrs}</div>
                            <small>Hours</small>
                        </div>
                        <span className="display-4">:</span>
                        <div className="px-3">
                            <div className="display-4">{mins}</div>
                            <small>Minutes</small>
                        </div>
                        <span className="display-4">:</span>
                        <div className="px-3">
                            <div className="display-4">{secs}</div>
                            <small>Seconds</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;


