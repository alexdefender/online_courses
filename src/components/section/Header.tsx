import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../Logo';

const Header = (): JSX.Element => (
  <AppBar>
    <Toolbar>
      <Logo />
    </Toolbar>
  </AppBar>
);

Header.displayName = 'Header';

export default Header;
