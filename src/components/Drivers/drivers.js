import React, { Component } from 'react';
import './drivers.css';
import Driver from './driver';
import Favorites from '../Favorites/favorites';
import Winners from '../Winners/winners';
import DriverStandings from '../DriverStanding/driverstanding';

class Drivers extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sectiontitle : "Formula 1 drivers",
            route : 'drivers',
        }
    }
    render() {
    	// destructure the props 
    	const { driverStandings, removeFavorite, addFavorite, favorites, season, drivers, winnerNames } = this.props;
        let title = this.state.sectiontitle;
		return (
		 	<section className="flex mainsection" id="drivers">
		 		<h2>{title}</h2>
	    		<div>
		    		<div className="main leftside">
		    			<section>
			    			<h3>All drivers</h3>
			    			<div className="section-content">
				    			<ul className="nostyle">
		                            {drivers.map((driver, i) => {
		                                return (
		                                    <Driver key={i}
		                                    		addFavorite={addFavorite} 
		                                            driver={driver}
		                                            season={season}
		                                            favorites={favorites}
		                                            winnerNames={winnerNames}
		                                    />
		                                )
		                            })}
		                        </ul>
			    			</div>
			    		</section>
		    		</div>
		    		<div className="aside rightside">
		    			{/* pass on necessary props to Favorites component */ } 
		    			<Favorites 
		    				removeFavorite={removeFavorite} 
	                   		favorites={favorites} />
	                   	<Winners season={season} winnerNames={winnerNames} />
	                   	<DriverStandings driverStandings={driverStandings} season={season}  />
		    		</div>
	    		</div>
	  		</section>
	  	)
	}
}

export default Drivers;