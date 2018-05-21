import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from './MenuItem';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '15px 10px',
    marginTop: '10px',
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontSize: '15px',
    overflowY: 'hidden',
  },
});

class MenuList extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
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