import React, { Component } from 'react';
import './style.css';

export default class Loading extends Component {

	constructor() {
		super();

		this.state = {
			status: false
		}
	}

	componentDidMount() {
    }

	render() {
		return (
			<>
				<button className={`btn btn-default ${this.props.className}`}
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					style={this.props.style}>{this.props.text}</button>
            </>
		);
	}
}