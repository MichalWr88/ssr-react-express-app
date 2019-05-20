
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
	static propTypes = {
		initialText: PropTypes.array.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = { text: this.props.initialText };
	}
	onButtonClick = (event) => {
		event.preventDefault();
		this.setState({ text: 'changed in the browser!' });
	}

	render() {
		const { onButtonClick } = this
		return (
			<div>
				<p>{this.state.text}</p>
				<button onClick={onButtonClick}>change text!</button>
			</div>
		)
	}
}
