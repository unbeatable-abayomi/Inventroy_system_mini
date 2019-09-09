import React from 'react';
import './ProductRow-out-of-stock.css';
class ProductRow extends React.Component {
	render() {
		return (
			<tr>
				<span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}>
					<td>{this.props.product.name}</td>
				</span>

				<td>{this.props.product.price}</td>
				<td>
					<button>x</button>
				</td>
			</tr>
		);
	}
}

export default ProductRow;
