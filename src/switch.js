import React from 'react';
import "./switch.css";
import {Link} from "react-router-dom"; 

function Switch(){

	return(

		<div className="main_switch">

		<div className="switch">

			<ul>
				<li><Link to="/" >News Feed</Link></li>
				<li><Link to="/AboutUs">About Us</Link></li>
				<li><Link to="/JoinTeam"> Join Our Team</Link></li>
				<li><Link to="/ContactUs">Contact Us</Link></li>
			</ul>

		</div>

		</div>
	)
}

export default Switch;