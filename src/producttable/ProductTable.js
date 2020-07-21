import React, { Component } from 'react'
import Product from '../product/Product'

class ProductTable extends Component {
    render() {
        const rows = [];
        console.log(this.props.products);
        if(this.props.products) {
            this.props.products.forEach((product) => {
                rows.push(
                    <Product
                        product={product}
                    />
                );
            });
        }
  
      return (
        <div>{rows}</div>
      );
    }
}

export default ProductTable;