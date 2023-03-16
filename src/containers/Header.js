import React from 'react';

import { Toolbar, AppBar, WrapFlex, SchoolIcon, Text } from '@components';

const Header = () => (
  <AppBar>
    <Toolbar>
      <WrapFlex gap="16px" align="center">
        <SchoolIcon fontSize="large" />
        <Text tid="HEADER.APP_NAME" h5 />
      </WrapFlex>
    </Toolbar>
  </AppBar>
);

export default Header;
