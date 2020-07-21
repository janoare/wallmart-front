import React, { Component, Text } from 'react';
import { formatPrice, formatCurrencyString } from '../Helper';
import './style/product.css'

class Product extends Component {
  render() {
    const { product } = this.props;

    let price;
    if(typeof(product.discountPrice) !== 'undefined' || product.discountPrice != null) {
      price = <section>
                <span>${formatPrice(product.discountPrice)}</span><span className="discount"> 50%</span>
                <p style={{ textDecorationLine: 'line-through' }}>{formatPrice(product.price)}</p>
            </section>;
    } else {
      price = <section>${formatPrice(product.price)}</section>;
    }

    return (
      
      <article>
        <div className="separator"/>
        <div className="product-div">
          <section>
            <p>
              <b>{product.brand} </b>{product.description}
            </p>
            <figure>
              <img
                src={`http://${product.image}`}
              />
            </figure>

            <h3>
              {price}
            </h3>
          </section>
        </div>
        <div className="separator"/>
      </article>
    );
  }
}

export default Product;
