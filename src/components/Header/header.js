import React, { Component } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import SeasonSelect from '../Seasonselect/seasonselect';
import SeasonMenu from '../Seasonmenu/seasonmenu';


class Header extends Component { 
	 constructor (props) {
        super(props);
        this.state = {
        	show: false,
        }
    }
    // to toggle the visibility of  the list menu
    toggleVisibility = (event) => {
		this.state.show  ? this.setState({show : true}) :
		this.setState({show: false})
    }
   
	render () {
		// destructure all the needed props into variables
		const {setRoute, years, setYear, setSeason, season, title} = this.props;
		let show = this.state.show;
		return (
			<header>
				{/* Logo and site title */}
				<div className="cbv cbh sitetitle w100">
					<h1>Formula 1</h1>
				</div>
				<div id="topheader" className="space-between flex w100">
					<div id="logo" className="left cbv sitelogo">
						<img alt={title} description={title + " Logo"} 
							 src="https://www.formula1.com/content/dam/fom-website/manual/Trademarks/f1-red-800px.png" />
					</div>

				{/* selectmenu */}
					<div className="cbv navcontainer">
						<nav className="tr" id="sections">
			              <ul className="inlinelist">
			                <li onClick={setRoute("home")}><Link to="/">Home</Link> </li>
			                <li onClick={setRoute("drivers")}><Link to="/drivers">Drivers</Link> </li>
			                <li onClick={setRoute("races")}><Link to="/races">Races</Link> </li>
			                <li onClick={setRoute("teams")}><Link to="/teams">Teams</Link> </li>
			              </ul>
			            </nav>
		            </div>
	            </div>
	        {/* Season title and season menu */}
				<div id="bottomheader" className="space-around flex bgred w100">
					<div className="seasontitle"><h2>{season}</h2></div>
			{/*  For devive widths > 600px we use a select menu */} 
					<div className="seasonselect w100 tr">
						<SeasonSelect 
							season={season} 
							setSeason={setSeason}
							years={years} />
					</div>
					<div className="seasonsbutton" onClick={this.handleClick}> other seasons </div>
				</div>
			{/* For devive widths < 600px we use a list menu */} 
				{show && (
						<div className={"seasonmenu-container " +  this.state.class}>
							<SeasonMenu handleClick={this.handleClick} setYear={setYear} years={years} /> 
						</div>
					)}
			 </header>
		)
	}
}


export default Header;