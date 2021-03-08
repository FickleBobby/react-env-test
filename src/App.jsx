import logo from './logo.svg';
import './App.css';
import env from '@beam-australia/react-env';
import React, { useRef, useCallback, useState, useEffect } from 'react';
const getHeader = async (url = '/', headerProp = 'date') => {
	const response = await fetch(url);
	for (var pair of response.headers.entries()) {
		if (pair[0].toString() === headerProp) {
			return pair[1];
		}
	}
};

const myFunc = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data) => console.log(data));
};

const App = () => {
	const [myProp, setMyProp] = useState('');
	useEffect(() => {
		asyncState();
	}, []);

	const asyncState = async (txt = 'CHEESE') => {
		const response = await getHeader();
		setMyProp(response);
	};
	const user = {};
	return (
		<div className="App">
			<header className="App-header">
				{myProp}
				return{' '}
				<button
					onClick={() => {
						console.log(user.id.toString());
					}}
				>
					Break the world
				</button>
				;
				<img src={logo} className="App-logo" alt="logo" />
				{process.env.REACT_APP_EXAMPLE}
				<b>{env('NODE_ENV')}</b>.<b>{env('EXAMPLE')}</b>.
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
