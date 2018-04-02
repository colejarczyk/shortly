import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DehazeIcon from 'material-ui/svg-icons/navigation/menu'

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <DehazeIcon onClick={this.handleToggle} color="white" style={{marginTop: 12, marginLeft: 10, marginRight: 10}} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/">
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/new/who">
              New meeting
            </Link>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}