import React from 'react';
import './teams.css';
import '../../css/cars.css'

const Teams = ( {constructors} ) => {
	return (

	  	<section className="flex mainsection" id="teams">
    		<h2>Formule 1 Teams</h2>
    		<div>
	    		<div className="main leftside">
		    		<section>		    	
	    			<div className="section-content">
		    			<ul>
		    				{constructors.map((constructor, i) =>  {
                                return (
                                    <li id={constructor.constructorId} key={i}>
                                    	<div className="team-wrapper">
		                                    <div className="team-details">
		                                    	<div>
		                                    	<h3>
		                                    	<span className={"flag " + (constructor.nationality).toLowerCase()}></span>
		                                    	<span>{constructor.name}</span></h3></div>
		                                    	<div>Drivers:</div>
		                                    </div>
		                                    <div className={"team-img " + constructor.constructorId}>
		                                    </div>
	                                    </div>
                                    </li>
                                )
	                         })}
		    			</ul>
	    			</div>
	    			</section>
	    		</div>
	    		<div className="aside rightside">
	    			<section id="team_ranking">
		    			<h3>Team ranking</h3>
		    			<ul className="nostyle">
			    			<li>Number 1</li>
			    			<li>Number 2</li>
			    			<li>enz...</li>
		    			</ul>
	    			</section>
	    		</div>
	    	</div>
  		</section>
	)
}

export default Teams;