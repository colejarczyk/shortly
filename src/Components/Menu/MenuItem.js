import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    paddingLeft: '13px',
    paddingRight: '13px',
  },
  activeStyle: {
    color: '#0288D1'
  },
});

class MenuItem extends React.Component {
  render() {
    return (
      <span className={this.props.classes.root}>
        <NavLink to={'/'+this.props.categoryUrl} activeClassName={this.props.classes.activeStyle}>
          {this.props.categoryName}
        </NavLink>
      </span>
    );
  }
}

MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryUrl: PropTypes.string.isRequired,
};

export default withStyles(styles)(MenuItem);