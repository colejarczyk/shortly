import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import HomeIcon from 'material-ui/svg-icons/action/account-balance';
import CityIcon from 'material-ui/svg-icons/communication/business';
import RestaurantIcon from 'material-ui/svg-icons/maps/local-dining';
import ProfileIcon from 'material-ui/svg-icons/action/account-circle';

class Footer extends Component {

  state = {
    selectedIndex: 0,
  };

  componentDidMount() {
    let url = this.props.history.location.pathname;
    let selectedIndex = 0;
    if (url === '/') {
      selectedIndex = 0;
    } else if (url === '/city') {
      selectedIndex = 1;
    } else if (url === '/restaurant') {
      selectedIndex = 2;
    } else if (url === '/profile') {
      selectedIndex = 3;
    }

    this.setState({ selectedIndex: selectedIndex });
  }

  select = (index, url) => {
    this.setState({ selectedIndex: index });
    this.props.history.push('/' + url);
  }

  render() {
    return (
      <Paper zDepth={1} style={{ width: '100%', position: "fixed", bottom: 0, zIndex: 1000 }}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            icon={<HomeIcon />}
            onClick={() => this.select(0, '')}
          />
          <BottomNavigationItem
            icon={<CityIcon />}
            onClick={() => this.select(1, 'city')}
          />
          <BottomNavigationItem
            icon={<RestaurantIcon />}
            onClick={() => this.select(2, 'restaurant')}
          />
          <BottomNavigationItem
            icon={<ProfileIcon />}
            onClick={() => this.select(3, 'profile')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(Footer);