import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui/svg-icons/action/account-circle';
import CityIcon from 'material-ui/svg-icons/maps/restaurant-menu';
import RestaurantIcon from 'material-ui/svg-icons/social/mood';
import ProfileIcon from 'material-ui/svg-icons/communication/location-on';

class Submenu extends Component {

  state = {
    selectedIndex: 0,
  };

  componentDidMount() {
    let url = this.props.history.location.pathname;
    let selectedIndex = 0;
    if (url.includes('menu')) {
      selectedIndex = 1;
    } else if (url.includes('reviews')) {
      selectedIndex = 2;
    } else if (url.includes('location')) {
      selectedIndex = 3;
    } else {
      selectedIndex = 0;
    }

    this.setState({ selectedIndex: selectedIndex });
  }

  select = (index, url) => {
    this.setState({ selectedIndex: index });
    this.props.history.push('/restaurant/wroclaw/' + this.props.url + "/" + url);
  }

  render() {
    return (
      <BottomNavigation style={{ width: '100%' }} selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          icon={<HomeIcon />}
          onClick={() => this.select(0, '')}
        />
        <BottomNavigationItem
          icon={<CityIcon />}
          onClick={() => this.select(1, 'menu')}
        />
        <BottomNavigationItem
          icon={<RestaurantIcon />}
          onClick={() => this.select(2, 'reviews')}
        />
        <BottomNavigationItem
          icon={<ProfileIcon />}
          onClick={() => this.select(3, 'location')}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(Submenu);