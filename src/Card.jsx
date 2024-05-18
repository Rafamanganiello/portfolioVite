import React, { useState } from 'react';
import './Card.css';

function Card({ title, descr, subject, date }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="card" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <section>
                <h3>{title}</h3>
                <div className="date">
                    <p>{date}</p>
                    <p>{subject}</p>
                </div>
                <div className={`description ${isHovered ? 'expanded' : 'collapsed'}`}>
                    <p>{descr}</p>
                </div>
            </section>
        </div>
    );
}

export default Card;