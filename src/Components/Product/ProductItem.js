import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

const styles = theme => ({
  root: {
    margin: '5px 0',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    flexGrow: 1,
  },
  img: {
    height: 'auto',
    width: '100%',
  },
  textRoot: {
    marginLeft: '8px',
  },
  name: {
    fontWeight: '600',
  },
  description: {
    margin: '10px 0 10px 0',
    color: '#666',
    fontSize: '13px'
  },
  price: {
    fontWeight: '600',
    color: '#0288D1',
  },
});

class ProductItem extends React.Component {

  productCart = (url) => {
    history.push(url);
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={5} className={this.props.classes.imgRoot}>
            <img src={this.props.productImg} className={this.props.classes.img} alt={this.props.productName} />
          </Grid>
          <Grid item xs={7}>
            <div className={this.props.classes.textRoot}>
              <h2 className={this.props.classes.name}>
                {this.props.productName}
              </h2>
              <p className={this.props.classes.description}>
                {this.props.productDescription}
              </p>
              <p className={this.props.classes.price}>
                {this.props.productPrice} {this.props.productCurrencySign} 
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productCurrencySign: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProductItem);