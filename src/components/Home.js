
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

 class Home extends Component {
	static propTypes = {
		initialText: PropTypes.string.isRequired,
		changeText: PropTypes.func.isRequired
	}
	// constructor(props) {
	// 	super(props);
	// 	this.state = { text: this.props.initialText };
	// }
	// onButtonClick = (event) => {
	// 	event.preventDefault();
	// 	this.setState({ text: 'changed in the browser!' });
	// }
	onButtonClick = (event) => {
		event.preventDefault();
		this.props.changeText();
	}

	render() {
		const { onButtonClick } = this
		return (
			<div>
				{/* <p>{this.state.text}</p> */}
				<p>{this.props.initialText}</p>
				<button onClick={onButtonClick}>change text!</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state };
};
const mapDispatchToProps = (dispatch) => {
	return {
		changeText: () => dispatch({ type: 'CHANGE_TEXT' })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);