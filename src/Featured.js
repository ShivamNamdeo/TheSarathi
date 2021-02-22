import React from 'react'
import "./featured.css";

function Featured({image,title,timestamp,details}) {
	return (
		<div className="featured">

			<h3>Featured Post</h3>

			<h4>{title}</h4>

			<h5>{timestamp}</h5>

			<img src={image} alt=""/>


			
		</div>
	)
}

export default Featured;