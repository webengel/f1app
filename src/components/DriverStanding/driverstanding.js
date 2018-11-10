import React from 'react';
import './driverstanding.css';


const driversStandings = ({ driverStandings, season }) => {
    let sectiontitle = "Driverstandings";
    let defaulttext = "No driver standings available"
	
	return (
		<section id="driverstanding-section">
            <h3>
                <span style={{padding:'0 0.3rem'}}>{sectiontitle}</span>
                <span className="icon"></span>
            </h3>
            <div className="content">
                <ul className="nostyle" id="winners">
                   {!(driverStandings.length >= 1) && (
                   		<li>{defaulttext}</li>
                   		)}
                   {driverStandings.length >= 1 && driverStandings.map((driverstanding, i) => (
                        <li key={"winner_" + i} className="winner">
                            <span>{driverstanding.position} &nbsp;</span>
                            <span className="name">{driverstanding.driver}</span>
                        </li>
                    ), this)}
                </ul>
            </div>
        </section>
	)
}

export default driversStandings;