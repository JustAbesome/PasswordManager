import React from 'react';

export class PasswordToggleButton extends React.Component{
	render(){
		return(
		<button className="btn btn-dark" onClick={this.props.handler}>
			{this.props.show ? "Hide password" : "Show password"}
		</button>
		);
	}
}