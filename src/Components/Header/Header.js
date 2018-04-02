import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Menu from './../Menu/Menu.js';

const SubMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color="white" /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Add" />
    <MenuItem primaryText="Edit" />
    <MenuItem primaryText="Refresh" />
  </IconMenu>
);


const Header = () => (
  <AppBar
    title="MeetMe"
    iconElementLeft={<Menu />}
    iconElementRight={<SubMenu />}
    style={{position: "fixed", top: 0}}
  />
);

export default Header;