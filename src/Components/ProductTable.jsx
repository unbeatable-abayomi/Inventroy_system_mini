import React from 'react';
import ProductRow from './ProductRow';
import SortableColumnHeader from './SortableColumnHeader';

class ProductTable extends React.Component {
	render() {
		let productAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
		let rows = productAsArray.map((product) => {
			return <ProductRow product={product} key={product.id} />;
		});
		return (
			<table>
				<thead>
					<tr>
						<SortableColumnHeader column="name" />
						<SortableColumnHeader column="price" />
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}
export default ProductTable;
