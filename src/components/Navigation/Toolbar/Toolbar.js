import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuItem from '../MenuIcon/MenuIcon';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <MenuItem showSideDrawer={props.showSideDrawer} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
