import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// installed diacritics to remove special characters like ü é from a string
const removeDiacritics = require('diacritics').remove;

const Driver = ({ addFavorite, driver, season, winnerNames, favorites }) => {
    // we need this tag to show the images in the display of season 2018
    // remove all special characters from the names
    let drivertag = removeDiacritics((driver.givenName + "-" + driver.familyName).toLowerCase());
    
    // use the tag to get the url right 
    let imgurl = "https://www.formula1.com/content/fom-website/en/drivers/" + drivertag + "/_jcr_content/image.img.1920.medium.jpg/1536135110814.jpg";
    let imgstyle = {
        backgroundImage: 'url(' + imgurl + ')',
    }

    // if a driver (fullname) is in the list of winners
    // add an extra class tot driver listitem 
    // so we mark this driver as a winner with a trophy icon)
    // if a driver (fullname) is in the list of favorites 
    // add an extra class tot driver listitem
    // so we can mark this driver as a favorite 

    let fullName = driver.givenName + " " + driver.familyName;
    let driverClass = 'driver';
    if (winnerNames.includes(fullName)) { driverClass += " winner"; }
    if (favorites.includes(fullName)) { driverClass += " favo"; }

    // we get the nationality of the driver 
    // and we use it (after cleanup) to show the a specific flag 
    let nationality = driver.nationality.toLowerCase().replace(/\s/g,'');

    // Special layout for latest season with images of the drivers
    if(season === "2018") {
    return (

        // with an onclick event on the list element 
        // to add the driver to the list of favorites
        <li onClick={addFavorite(fullName)}
            className={`recent ${driverClass} ${driver.code}`}
            key={driver.driverId}>
            <div className="driverimg" style={imgstyle}>
                  <div className="addfavo" >                                                
                    <span className="trophy">
                        <FontAwesomeIcon icon="trophy" />
                    </span>
                    <FontAwesomeIcon icon="heart" mask={['far']} />                    
                 </div>
            </div>
            <div className="driverdetails">
                <span>
                    <span className="name">{fullName} 
                    {driver.permanentNumber && (
                        <span className="inline">({driver.permanentNumber})</span>
                        )}
                    </span>
                </span>
                <div id="country-team" className="flex">
                    <div className={"flag " + nationality}></div>
                    <div className="constructorname flex"><span>[team-naam]</span></div>
                </div>
            </div>
        </li>
        )
    }

    return (    
        // with an onclick event on the list element 
        // to add the driver to the list of favorites
        <li onClick={addFavorite(fullName)} 
            className={`${driverClass} ${driver.code}`} key={driver.driverId}>
            <span className={"flag " + nationality}>&nbsp;</span>
            <span className="name">
                <span>{fullName}</span>
                <span className="noshow">{driver.code}</span>
                {driver.permanentNumber && (
                    <span className="noshow team">({driver.permanentNumber})</span>
                    )}
            </span>
            <span className="trophy">
                <FontAwesomeIcon icon="trophy" />
            </span>
            <span className="addfavo">                                                
                <FontAwesomeIcon icon="heart" mask={['far']} />
            </span>
        </li>
    )
}

export default Driver;