import React from 'react'
import "./interest.css"
import moment from 'moment';
import {Link} from 'react-router-dom';
 
import {Helmet} from "react-helmet";



function Interest({text,image,title,timestamp,details,id}) {




	return (
		<div className="interest">




			<Link className="column" to={`/Post/${id}`} >
				
				<h5>{moment(parseInt(timestamp)).fromNow()}</h5>
				<p>{title.substring(0,100)}</p>
				<img src={image} alt=""/>

				
				
				<h6>{ text.substring(0,240)}<mark>...Read More</mark></h6>
			</Link>


		</div>
	)
}


export default Interest;