import React from 'react';
import './seasonselect.css';


const SeasonSelect = ({season, setSeason, years}) => {
    return (
        <nav id="SeasonSelect">
            <div id="yearselect">
                <label htmlFor="yearsmenu">Other seasons </label>
                <select id="yearsmenu" 
                        className="inlineblock styled-select grey rounded" 
                        value={season} 
                        onChange={setSeason}>
                     {years.map(year => (
                        <option key={year} name={year} value={year}>{year}</option>
                      ))}
                </select>
            </div>
        </nav>
    )
}

export default SeasonSelect;