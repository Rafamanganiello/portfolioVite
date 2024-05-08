import './Pcard.css'
import React, { useState } from 'react';

function Pcard({ img, title, descr, site }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="pcard" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
            <a target="_blank" href={site}>
                <img src={img} alt="Card"></img>
            </a>
            <section className={showDetails ? 'details-show' : 'details-hide'}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </section>
        </div>
    );
}



export default Pcard;