import React, { Component } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Redirect } from 'react-router-dom';
import './style.css';

export default class Loading extends Component {

	constructor() {
		super();

		this.state = {
			text: '',
			redirect: false,
			link: '',
			first: ''
		}
	}

	componentDidMount() {
	}

	logout() {
		this.setState({
			link: '/Sair',
			redirect: true
		});
	}

	goto(link) {
		this.setState({
			link: link,
			redirect: true
		});
	}

	redirect() {
		if (this.state.redirect) {
			return <Redirect to={this.state.link} />
		}
	}

	render() {
		return (
			<>
				{this.redirect()}
				<div className="title">
					<div className={this.props.first}
						onClick={this.goto.bind(this, this.props.onClick)}><ArrowBack></ArrowBack>
					</div>
					<div className="text">
						<img className="imgage" src="/assets/icons/tdx.png"/>
						{this.props.text}
					</div>
					{
						this.props.logout && <div className="logout"
							onClick={this.logout.bind(this)}>Sair
					</div>
					}
				</div>
			</>
		);
	}
}