import React from 'react';
import './seasonmenu.css';


const SeasonMenu = ({setYear, years, handleClick}) => {
    return (
        <nav id="SeasonMenu">
            <div class="tr"><span onClick={handleClick}>close</span></div>
             <div><h3>Select a season</h3></div>
            <ul className="seasonlist nostyle">
                 {years.map(year => (
                    <li onClick={setYear(year)} key={year}>{year}</li>
                  ))}
            </ul>
        </nav>
    )
}

export default SeasonMenu;