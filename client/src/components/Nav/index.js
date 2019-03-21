import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container">
				<p className="navbar-brand" id="logo">NYT Google Books Search</p>
			</div>
		</nav>
	)
}

export default Navbar;