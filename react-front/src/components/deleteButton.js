import React from 'react';

export class DeleteButton extends React.Component{
	constructor(props){
		super(props);
		this.deleteCall = this.deleteCall.bind(this);
	}

	deleteCall(e) {
		let id = this.props.id;
		let update = this.props.updater;
		update();
		let url = '/api/' + id;
		fetch(url, {
			method: 'delete'
		}).then(() => {
			update();
		});
	}

	render() {
		return(
			<span>
				<span 
					className="oi oi-trash" 
					title="plus" 
					onClick={this.deleteCall}>
				</span>
			</span>
		);
	}
}