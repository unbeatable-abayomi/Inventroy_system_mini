import React from 'react';
import './SortableColumnHeader.css';

class SortableColumnHeader extends React.Component {
	render() {
		let currentSort =
			this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
		return (
			<th>
				{this.props.column}
				<button className={currentSort === 'asc' ? 'SortableColumnHeader-current' : ''}>&#x25B2;</button>
				<button className={currentSort === 'desc' ? 'SortableColumnHeader-current' : ''}>&#x25B2;</button>
			</th>
		);
	}
}
export default SortableColumnHeader;
