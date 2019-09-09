import React from 'react';
import ColorChangeButton from './ColorChangeButton';

class ColorBlock extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	state = {
		backgroundColor : 'black'
	};
	handleChange() {
		this.setState((prevState) => {
			let newColor = prevState.backgroundColor === 'black' ? 'purple' : 'black';
			return {
				backgroundColor : newColor
			};
		});
		// this.setState({
		// 	backgroundColor : 'yellow'
		// });
	}
	render() {
		return (
			<div style={{ width: '200px', height: '400px', backgroundColor: this.state.backgroundColor }}>
				<ColorChangeButton handleChange={this.handleChange} />
			</div>
		);
	}
}
export default ColorBlock;
