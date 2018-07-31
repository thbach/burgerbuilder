import React from 'react';
import classes from './MenuIcon.css';

const menuIcon = props => (
  <div className={classes.DrawerToggle} onClick={props.showSideDrawer}>
    <div />
    <div />
    <div />
  </div>
);

export default menuIcon;
