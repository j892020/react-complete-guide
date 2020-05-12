import React, { useEffect, useRef, useContext } from 'react';
import CockpitClasses from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	console.log(authContext.authenticated);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Http request
		toggleBtnRef.current.click();
		console.log(toggleBtnRef, toggleBtnRef.current);
		return () => {
			// clearTimeout(timer);
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	});

	const classes = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = CockpitClasses.Red;
	}

	if (props.personsLength <= 2) {
		classes.push(CockpitClasses.red); //classses = ['red']
	}
	if (props.personsLength <= 1) {
		classes.push(CockpitClasses.bold); //classes = ['red', 'bold']
	}

	return (
		<div className={CockpitClasses.Cockpit}>
			<h1>{props.title}</h1>
			<p className={classes.join(' ')}>This is really working!</p>
			<button
				ref={toggleBtnRef}
				className={btnClass}
				onClick={props.clicked}
			>
				Show/Hide Name
			</button>
			<button onClick={authContext.login}>Log in</button>}
		</div>
	);
};

export default cockpit;
