import React from 'react';

class Filters extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Search...." />
					<p>
						<label>
							<input type="checkbox" />
							&nbsp; Only Show Products In Stock
						</label>
					</p>
				</form>
				<h1>Filters Component</h1>
			</div>
		);
	}
}
export default Filters;
