import React from 'react';
import './races.css';


const Races = ({races}) => {
	let title = "Races";
	// sort races alphabetically
	let date = 	new Date().toLocaleString().slice(0,10);

	return (
	  	<section className="mainsection flex" id="races">
	  		<h2 className="w100">{title}</h2>
    		<div>
	    		<div className="main leftside">
	    			<section>
	    				<h3>Race results</h3>
	    				{date}
	    				<table>
	    					<thead>
		    					<tr>
			    					<th>GRAND PRIX</th>
			    					<th>Date</th>
			    					<th>Winner</th>
			    					<th>Car</th>
			    					<th>Laps</th>
			    					<th>Time</th>
		    					</tr>
	    					</thead>
	    					<tbody>
			    				{races === [] && (
			    					<tr><td colspan="6">No races available</td></tr>
			    				)}
				    			{races !== [] && (races.sort(
				    				function(a, b) {
				    					return parseInt(a.round) - parseInt(b.round);
				    				}
				    			 )).map((race, i) => {
				    				return (
				    				<tr key={i}>
					    				<td><a target="_blank" rel="noopener noreferrer" href={race.url}>{race.raceName}</a></td>
				    					<td>{race.date}</td>
				    					<td>{race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}</td>
				    					<td>{race.Results[0].Constructor.name}</td>
				    					<td>{race.Results[0].laps}</td>
				    					<td>{race.Results[0].Time.time}</td>
			    					</tr>
			    					)		    				
				    			})}
			    			 </tbody>
		    				</table>
	    			</section>
	    		</div>
	    		<div className="aside rightside">
	    			<section>
		    			<h3>Coming races</h3>
		    			<ul className="nostyle">
		    				<li>resterende races van dit jaar</li>
		    			</ul>
		    		</section>
	    		</div>
	    	</div>
  		</section>
	)
}

export default Races;

