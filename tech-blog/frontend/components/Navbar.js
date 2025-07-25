import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
	return (
		<nav className="Navbar">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/tutorials">Tutorials</Link>
				</li>
				<li>
					<Link to="/articles">Articles</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
