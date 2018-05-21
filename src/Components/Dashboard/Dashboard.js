import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    marginTop: '50%',
  },
  grid: {
    spacing: 24,
    alignItems: 'center',
    direction: 'row',
    justify: 'center',
  }
});

class Dashboard extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={this.props.classes.grid.spacing} 
                        alignItems={this.props.classes.grid.alignItems}
                        direction={this.props.classes.grid.direction}
                        justify={this.props.classes.grid.justify}
        >
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper} elevation={0}>
              Put your phone on the NFC tag on the table
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
