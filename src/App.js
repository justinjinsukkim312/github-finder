import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
	// vanilla js
	// return React.createElement('div', { className:'App'}, React.createElement('h1', null, 'Hello from React'));
	render() {
		return (
			<div className="App">
				<Navbar />
				<UserItem />
			</div>
		);
	}
}

export default App;
