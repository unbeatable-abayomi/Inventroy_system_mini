import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time : new Date().toLocaleString()
		};
	}
	render() {
		return (
			<div>
				<h1>table componenet</h1>
				<h3>The time {this.state.time} </h3>
			</div>
		);
	}
}
export default Clock;
