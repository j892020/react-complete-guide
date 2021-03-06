import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PersonClasses from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		// document.querySelector('input').focus();
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
		console.log('[Person.js] rendering...');
		return (
			<Aux>
				{this.context.authenticated ? (
					<p>Authenticated!</p>
				) : (
					<p>Please Log in</p>
				)}

				<p key="i1" onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p key="i2">{this.props.children}</p>
				<input
					key="i3"
					// ref={(inputEl) => {
					// 	this.inputElement = inputEl;
					// }}
					ref={this.inputElementRef}
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>

			// <div className={PersonClasses.Person}>
			// 	<p onClick={this.props.click}>
			// 		I'm {this.props.name} and I am {this.props.age} years old!
			// 	</p>
			// 	<p>{this.props.children}</p>
			// 	<input
			// 		type="text"
			// 		onChange={this.props.changed}
			// 		value={this.props.name}
			// 	/>
			// </div>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	chagned: PropTypes.func,
};

export default withClass(Person, PersonClasses.Person);
