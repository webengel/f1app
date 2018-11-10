// http://ergast.com/api/f1/[season]/driverStandings/1/drivers
// https://countryflags.io/#themes
// FontAwesome
// 

import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="firstcol">
					<h4>Resources</h4>
					<ul className="nostyle">
						<li><a target="_blank" rel="noopener noreferrer" href="http://ergast.com/mrd/">Ergast Developer API</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/FortAwesome/react-fontawesome/blob/master/README.md">FontAwesome</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://countryflags.io/">countryflags.io</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/">Google Fonts</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://www.formula1.com/">Images from www.formula1.com</a></li>
						
					</ul>
				</div>
				<div className="secondcol">
				<h4>Toolkit</h4>
					<ul className="nostyle">
						<li><a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/">npm</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">React</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/">HTML5</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/">CSS3</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a></li>
						<li><a target="_blank" rel="noopener noreferrer" href="https://www.sublimetext.com/">Sublime text</a></li>
					</ul></div>
				<div className="thirdcol">
				<h4>Dependencies</h4>
					<ul className="nostyle">
							
						</ul>
					</div>
			</div>
		</footer>
	)
}


export default Footer;