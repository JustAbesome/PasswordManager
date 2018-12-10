import React from 'react';
import { DeleteButton } from './deleteButton';
import { Link } from 'react-router-dom'

export class HomeListItem extends React.Component {
	render(){
		let password = this.props.password;
		let updater = this.props.updater;
		return(
			<li key={password._id} className="list-group-item">
				<Link to={'/password/' + password._id }>
					<span className="site-name">{password.site}</span>
					<span className="seperator">|</span>
					<span className="small email"> {password.email}</span>
				</Link>
				<DeleteButton id={password._id} updater={updater}/>
			</li>
		);
	}

}