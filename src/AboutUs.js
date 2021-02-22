import React from 'react';
import "./AboutUs.css";
import Switch from "./switch";
import Footer from "./Footer";



function AboutUs() {
	return (
		<div className="about">

			<div>
			<Switch />
			</div>


			<div className="heading_about">
				<h1>About Us</h1>

			</div>


			<div className="about_content">

				<div className="mission">
					<h1>Our Mission</h1>
					<h2>
					
						We <mark className="sarathi">@The Sarathi</mark> works with our primary
						mission to help every student in the
						country by solving their every possible 
						career-related problem. We want to make 
						them aware of the opportunities they have
						around themselves and will be providing 
						them with the correct path to achieve it.
						Concerning the Educational Institutes, 
						we want to see every small deserving Educational 
						Institute to grow to their maximum potential so that
						they could train and empower the country's youth. 
					</h2>
				</div>

				

			</div>


			<div className="about_content">
				<div className="mission">
					<h1>Our Vision</h1>
					<h2>
					
						We are working with a keen vision to create a world where candidates 
						do not hold any career-related issues and are aware of their future preferences. We want to empower 
						the youth in a way that they could make the right choices of their future and rise to their full potential.
					</h2>
				</div>

				
				

			</div>


			<Footer />
		</div>
	)
}

export default AboutUs;