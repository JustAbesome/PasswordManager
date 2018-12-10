import React from 'react';

export class PasswordLabel extends React.Component {
	render(){
		let password = this.props.password;
		let star = "*";
		return(
			<p className="big">
			{this.props.show ? (
					password
				) : (
					star.repeat(password.length)
				)}
			</p>
		);
	}
}