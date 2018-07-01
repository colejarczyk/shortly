import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ScheduleIcon from 'material-ui-icons/Schedule';

const styles = theme => ({
  root: {
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: '#fff',
  },
  name: {
    padding: '15px',
    fontSize: '24px',
  },
  openingHours: {
    color: '#aaa',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    marginLeft: '-20px',
    fontSize: '16px',
  },
});

class Details extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <h1 className={this.props.classes.name}>
          {this.props.name}
        </h1>
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  openingHours: PropTypes.string.isRequired,
  endingHours: PropTypes.string.isRequired,
};

export default withStyles(styles)(Details);