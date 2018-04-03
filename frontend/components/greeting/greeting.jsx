import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
	if (currentUser) {
		return (
			<nav>
				<h2>Welcome, {currentUser.username}!</h2>
				<button onClick={logout}>Log Out</button>
			</nav>
		);
	} else {
		return (
			<nav>
				<Link to="/signup">Sign Up</Link>
				<br />
				<Link to="/login">Log In</Link>
			</nav>
		);
	}
};

export default Greeting;
