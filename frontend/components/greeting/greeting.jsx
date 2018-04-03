import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
	<nav className="login-signup">
		<Link to="/login">Login</Link>
		&nbsp;or&nbsp;
		<Link to="/signup">Sign up!</Link>
	</nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-button" onClick={logout}>
			Log Out
		</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) =>
	currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

// const Greeting = ({ currentUser, logout }) => {
// 	if (currentUser) {
// 		return (
// 			<nav>
// 				<h2>Welcome, {currentUser.username}!</h2>
// 				<button onClick={logout}>Log Out</button>
// 			</nav>
// 		);
// 	} else {
// 		return (
// 			<nav>
// 				<Link to="/signup">Sign Up</Link>
// 				<Link to="/login">Log In</Link>
// 			</nav>
// 		);
// 	}
// };

// class Greeting extends React.Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state = props.session;
// 		this.handleClick = this.handleClick.bind(this);
// 	}
//
// 	render() {
// 		const currentUser = this.state.currentUser;
// 		if (currentUser) {
// 			return (
// 				<div>
// 					<h2>Welcome, {currentUser.username}!</h2>
// 					<button onClick={this.props.logout}>Log Out</button>
// 				</div>
// 			);
// 		} else {
// 			return (
// 				<div>
// 					<Link to="/signup">Sign Up</Link>
// 					<Link to="/login">Log In</Link>
// 				</div>
// 			);
// 		}
// 	}
// }

export default Greeting;
