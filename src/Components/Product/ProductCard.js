import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {

  },
});

class ProductCard extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        Product details
      </div>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productCurrencySign: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default withStyles(styles)(ProductCard);