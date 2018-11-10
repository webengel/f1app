import React from 'react';
import './winners.css';
/* Font Awesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Winners = ({ winnerNames, season }) => {
    let sectiontitle = "Champions of " + season;
    let defaulttext = "Season just started. No winners yet";
	
	return (
		<section id="winners-section">
            <h3>
                <span style={{padding:'0 0.3rem'}}>{sectiontitle}</span>
                <span className="icon"><FontAwesomeIcon icon="trophy" /></span>
            </h3>
            <div className="content">
                <ul className="nostyle" id="winners">
                   {!(winnerNames.length >= 1) && (
                   		<li>{defaulttext}</li>
                   		)}
                   {winnerNames.length >= 1 && winnerNames.map((winner, i) => (
                        <li key={"winner_" + i} className="winner">
                            <span></span>
                            <span className="name">{winner}</span>
                        </li>
                    ), this)}
                </ul>
            </div>
        </section>
	)
}

export default Winners;