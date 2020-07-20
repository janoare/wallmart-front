import React, { Component, Text } from 'react';
import PropTypes from 'prop-types';
import { formatPrice, formatCurrencyString } from '../Helper';

class Product extends Component {
  static defaultProps = {
    lineView: false,
  };

  render() {
    const { product, lineView } = this.props;

    let price;
    console.log(product);
    if(typeof(product.discountPrice) !== 'undefined' || product.discountPrice != null) {
      price = <section><p>${formatPrice(product.discountPrice)}</p>
              <p style={{ textDecorationLine: 'line-through' }}>{formatPrice(product.price)}</p>
            </section>;
    } else {
      price = <section>${formatPrice(product.price)}</section>;
    }

    return (
      <article>
        <div>
          <section>
            <p>
              <b>{product.brand}</b>{product.description}
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
      </article>
    );
  }
}

export default Product;
