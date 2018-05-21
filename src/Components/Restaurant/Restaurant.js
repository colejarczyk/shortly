import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import restaurants from '../../restaurants.js';

import Header from './Header';
import Details from './Details';
import ProductList from '../Product/ProductList';
import MenuList from '../Menu/MenuList';

const styles = theme => ({
  restaurantName: {
    textAlign: 'center',
    fontWeight: '500',
  },
});

class Restaurant extends React.Component {

  getCurrentMenu = (restaurant) => {
    let category = restaurant.filter(item => item.url === this.props.match.params.menu);
    if (category.length === 0) {
      return [];
    }
    return category[0].products;
  }

  render() {
    return (
      <div>
        {restaurants
          .filter(item => item.url === this.props.match.params.name)
          .map((item, index) => {
            return (
              <div key={`restaurant_${index}`}>

                <Header
                  categories={item.categories}
                  backgroundImage={item.img}
                />

                <Details
                  name={item.name}
                  openingHours={item.openingHours}
                  endingHours={item.endingHours}
                />

                <MenuList menu={item.menu} url={item.url} />
                <ProductList products={this.getCurrentMenu(item.menu)} />
              </div>
            );
          })}
      </div>
    );
  }
}

Restaurant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Restaurant);