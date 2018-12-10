import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component{
	render() {
		const activePage = this.props.activePage;
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to={'/'}>
					Password Manager
				</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className={'nav-item ' + ((activePage === 'home') ? "active" : "")} >
			      	<Link className='nav-link' to={'/'}>
			        	<span className="oi oi-home" title="home" aria-hidden="true"></span>
			        	Home
			        </Link>
			      </li>
			      <li className={'nav-item' + ((activePage === 'add') ? "active" : "")}>
			        <Link className='nav-link' to={'/add'}>
			        	<span className="oi oi-plus" title="plus" aria-hidden="true"></span>
			        	Add
			        </Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		);
	}
}