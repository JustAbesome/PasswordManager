import React from 'react';
import { Loading } from '../loading';
import { DeleteButton } from '../deleteButton';
import { HomeListItem } from '../homeListItem';
import { Link } from 'react-router-dom';

export class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			passwords: []
		};

		this.updatePasswords = this.updatePasswords.bind(this);
	}

	updatePasswords() {
		fetch('/api')
			.then(res => res.json())
			.then(passwords => this.setState({ passwords }));
		console.log('update!');
	}

	componentDidMount(){
		this.updatePasswords();
		this.props.setActivePage('home');
	}

	render(){
		const { passwords } = this.state;
		return(
			<div id="home" className="container">
				<h1>Home</h1>
				<ul className="list-group home-list">
				{passwords ? (passwords.map(password => (
					<HomeListItem 
						password={password}
						updater={this.updatePasswords}/>
				))) : (
					<Loading />
				)}
				</ul>
			</div>
		);
	}
}