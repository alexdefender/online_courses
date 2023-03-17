import React from 'react';

import AppBar from './AppBar';
import Toolbar from './Toolbar';
import Logo from '../Logo';

const Header = () => (
  <AppBar>
    <Toolbar>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default Header;
