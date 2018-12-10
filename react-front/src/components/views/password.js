import React from 'react';
import { Loading } from '../loading';
import { PasswordLabel } from '../passwordLabel';
import { PasswordToggleButton } from '../passwordToggleButton';

export class Password extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			password: null,
			show: false
		}
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(e){
		this.setState({show: !this.state.show});
	}

	componentDidMount() {
		fetch('/api/' + this.props.passwordId)
			.then(res => res.json())
			.then(password => this.setState({ password: password }));
		this.props.setActivePage('home');
	}

	render(){
		const { password } = this.state;
		return(
			<div id="password" className="container">
			{ password ? (
				<div id="content">
				<h1>
					Password for {password.site}
				</h1>
				<p className="small">
					ID: {password._id}
				</p>
				<PasswordLabel show={this.state.show} password={password.password} />
				<PasswordToggleButton show={this.state.show} handler={this.handleToggle}/>
				</div>
			) : (
				<Loading />
			)}
			</div>
		);
	}
}

				// <h1>
				// 	Password for {password.site}
				// </h1>
				// <p className="small">
				// 	ID: {password._id}
				// </p>
				// <p className="big" id="pass">
				// 	<span>
				// 		{password.password}
				// 	</span>
				// </p>
				// <button class="btn btn-dark" id="show-button">
				// 	Show Password
				// </button>