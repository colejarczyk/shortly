import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ProductItem from './ProductItem';

const styles = theme => ({
  products: {
    padding: '5px',
  }
});

class ProductList extends React.Component {
  render() {
    return (
      <div className={this.props.classes.products}>
        {this.props.products.map((product, index) => {
          return (
            <ProductItem
              key={`product_${index}`}
              productId={String(product.id)}
              productImg={product.img}
              productName={product.name}
              productDescription={product.description}
              productCurrencySign={product.currency.sign}
              productPrice={product.price}
            />
          );
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

export default withStyles(styles)(ProductList);