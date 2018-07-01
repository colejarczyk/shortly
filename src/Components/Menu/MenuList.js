import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from './MenuItem';

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    padding: '20px 10px',
    color: '#757575',
    textTransform: 'uppercase',
    fontSize: '15px',
    overflowY: 'hidden',
    boxShadow: "0 4px 12px #eee",
    borderTop: '1px solid #eee',
  },
});

class MenuList extends React.Component {

  componentDidMount() {
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");

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

  render() {
    return (
      <div id="navbar" className={this.props.classes.root}>
        {this.props.menu.map((item, index) => {
          return (
            <MenuItem
              key={`category_${index}`}
              categoryName={item.categoryName}
              categoryUrl={'restaurant/' + this.props.url + '/' + item.url}
            />
          );
        })}
      </div>
    );
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(MenuList);