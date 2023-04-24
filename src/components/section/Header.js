import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../Logo';

const Header = () => (
  <AppBar>
    <Toolbar>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default Header;
