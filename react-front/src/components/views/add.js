import React from 'react';

export class Add extends React.Component{
	componentDidMount(){
		this.props.setActivePage('add');
	}

	render(){
		return(
			<div id="add" className="container">
				<h1>Add password</h1>
			  <form action="/api" method="POST">
			    <div className="form-group">
			      <label>Site's Name</label>
			      <input type="text" className="form-control" placeholder="Site name" name="site" />
			    </div>
			    <div className="form-group">
			      <label>Email address or user name</label>
			      <input type="text" className="form-control" placeholder="Enter email or user name" name="email" />
			    </div>
			    <div className="form-group">
			      <label>Password</label>
			      <input type="password" className="form-control" placeholder="Password" name="password" />
			    </div>
			    <button type="submit" className="btn btn-dark add-submit">Add</button>
			  </form>
			</div>
		);
	}
}