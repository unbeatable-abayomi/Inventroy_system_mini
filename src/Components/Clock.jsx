import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.updateClock = this.updateClock.bind(this);
	}
	state = {
		time : new Date().toLocaleString()
	};

	componentDidMount() {
		this.intervalID = setInterval(() => this.updateClock(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	updateClock() {
		this.setState({
			time : new Date().toLocaleString()
		});
	}
	render() {
		return (
			<div>
				<h1>Clock Component</h1>
				<h3>The time {this.state.time} </h3>
			</div>
		);
	}
}
export default Clock;
