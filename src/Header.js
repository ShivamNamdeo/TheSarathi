import React from 'react'
import logo from './assets/logo.jpg';



import {Link} from "react-router-dom"; 
import "./App.css"
function Header() {
	return (
		<div className="app_header">
		<Link to="/" className="link">
        	<h2>The Sarathi</h2>
        	
        </Link>
        

        <Link to="/AppViewPage" className="link_logo">

	        
		
		        	<img src={logo} alt=""/>
		        	<h3>Get Our Android App</h3>
    	   
    	 </Link>

      </div>
	)
}

export default Header