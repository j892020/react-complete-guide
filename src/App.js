import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

class App extends Component {
	state = {
		persons: [
			{ id: 'id1', name: 'Max', age: 28 },
			{ id: 'id2', name: 'Nasu', age: 29 },
			{ id: 'id3', name: 'Stephanie', age: 26 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

	// switchNameHandler = (newName) => {
	// 	// console.log('Was clicked');
	// 	// DONT"T DO THIS: this.state.persons[0].name = 'Max Millian';
	// 	this.setState({
	// 		persons: [
	// 			{ name: newName, age: 28 },
	// 			{ name: 'Nasu', age: 29 },
	// 			{ name: 'Stephanie', age: 27 },
	// 		],
	// 	});
	// };

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		// const person = Object.assign({}, this.state.persons[personIndex]);
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons;
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) =>
									this.nameChangedHandler(event, person.id)
								}
							/>
						);
					})}
				</div>
			);
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red'); //classses = ['red]
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold'); //classes = ['red', 'bold']
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button onClick={this.togglePersonsHandler}>
					Show/Hide Name
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
