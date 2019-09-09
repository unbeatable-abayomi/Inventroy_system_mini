import React from 'react';

class Filters extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Search...." value={this.props.filterText} />
					<p>
						<label>
							<input type="checkbox" checked={this.props.inStockOnly} />
							&nbsp; Only Show Products In Stock
						</label>
					</p>
				</form>
			</div>
		);
	}
}
export default Filters;
