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
  constructor(props) {
    super(props);
    this.state = {
      restaurant: []
    };
  }

  componentWillMount() {
    fetch('https://menu.softingo.pl/api/restaurant/1')
    .then(resp => resp.json())
    .then(resp => {
      this.setState({restaurant: [resp]});
    });
  }

  componentDidMount() {
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");

    if (navbar == null) {
      return;
    }

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

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
        {this.state.restaurant
          .filter(item => item.url === this.props.match.params.name)
          .map((item, index) => {
            return (
              <div key={`restaurant_${index}`}>

                <Header
                  categories={item.categories}
                  backgroundImage={`${window.apiUrl}${item.img}`}
                />

                <div id="navbar">
                  <Details
                    name={item.name}
                    openingHours={item.openingHours}
                    endingHours={item.endingHours}
                  />

                  <MenuList menu={item.menu} url={item.url} />
                </div>
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