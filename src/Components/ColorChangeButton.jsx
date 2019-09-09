import React from 'react';

class ColorChangeButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick();
	}
	render() {
		return (
			<div>
				<button onClick={this.props.handleChange}>Change Color</button>
			</div>
		);
	}
}
export default ColorChangeButton;
