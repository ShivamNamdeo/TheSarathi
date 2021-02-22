import React from 'react';
import "./search.css";
import SearchIcon from '@material-ui/icons/Search';

function Search() {
	return (
		<div className="search">
			<h1>Search Feed </h1>


			<div className="center">

			<div className="box" >

				<SearchIcon />
				<input type="text" />

			</div>

			</div>

			


		</div>
	)
}

export default Search;