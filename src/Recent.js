import React from 'react'
import "./recent.css";


function Recent({image,title,timestamp,details}) {
	return (
		<div className="recent">

			<h5>{timestamp}</h5>
			<p>college options to choose from, it’s important to narrow the field based on the 
				factors that will boost your personal.
			</p>

			<img src={image} alt=""/>


		</div>
	)
}

export default Recent