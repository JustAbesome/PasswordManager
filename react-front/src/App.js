import React, { Component } from 'react';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/views/home'
import { Add } from './components/views/add'
import { Password } from './components/views/password'

class App extends Component {
	constructor(params) {
		super(params);
		this.state={
			activePage:null
		};
		this.setActivePage = this.setActivePage.bind(this);
	}

	setActivePage(newActivePage){
		this.setState({ activePage: newActivePage });
	}

  render() {
    return (
    	<div>
		    <Router>
		      <div className="App">
	    			<Navbar activePage={this.state.activePage}/>
	    			<Route 
	    				exact={true}
	    				path="/"
	    				render={() => {
	    					return <Home setActivePage={this.setActivePage}/>
	    				}} />
	    			<Route 
	    				exact={true}
	    				path="/add"
	    				render={() => {
	    					return <Add setActivePage={this.setActivePage}/>
	    				}} />
	    			<Route 
	    				exact={false}
	    				path="/password/:id"
	    				render={( {match} ) => {
	    					return <Password passwordId={ match.params.id } setActivePage={this.setActivePage}/>
	    				}} />
		      </div>
		    </Router>
	    </div>
    );
  }
}

export default App;