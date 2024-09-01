import React from 'react';

function ShowcaseCard({ title, description, onButtonClick }) {
    return (
        <div className="showcase-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onButtonClick}>Go to Feature</button>
        </div>
    );
}

export default ShowcaseCard;
