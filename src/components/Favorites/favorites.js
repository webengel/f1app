import React from 'react';
import './favorites.css';
/* Font Awesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Favorites = ({removeFavorite, favorites }) => {
    let sectiontitle = "Favorite drivers";
    let defaulttext = "Your list of favorite drivers is empty. Select a driver to add your first favorite driver.";
	
	return (
		<section id="favorites-section">
            <h3>
                <span style={{padding:'0 0.3rem'}}>{sectiontitle}</span>
                <span className="icon"><FontAwesomeIcon icon="heart" mask={['far']} /></span>
            </h3>
            <div className="content">
                <ul className="nostyle" id="favorites">
                   {!(favorites.length >= 1) && (
                   		<li>{defaulttext}</li>
                   		)}
                   {favorites.length >= 1 && favorites.map((favorite, i) => (
                        <li onClick={removeFavorite(favorite)} key={"fav_" + i} className="favorite">
                            <span className="name">{favorite} </span>
                            <span className="deletebtn">
                                <span className="minus"><FontAwesomeIcon icon="minus" /></span>
                            </span>
                        </li>
                    ), this)}
                </ul>
            </div>
        </section>
	)
}

export default Favorites;