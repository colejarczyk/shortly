import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ClearIcon from 'material-ui-icons/Clear';

const styles = theme => ({
  background: {
    filter: 'brightness(75%)',
    backgroundSize: 'cover',
    height: '170px',
    width: '100%',
  },
  text: {
    position: 'absolute',
    top: '40px',
    color: theme.palette.common.white,
    width: '100%',
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: theme.palette.common.white,
  },
  categories: {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 500,
  },
});

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={this.props.classes.background} 
             style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
        >
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);