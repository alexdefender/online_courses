import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

import WrapFlex from './section/WrapFlex';

const Logo = () => (
  <WrapFlex gap="16px" align="center">
    <SchoolIcon fontSize="large" />
    TMCourses
  </WrapFlex>
);

export default Logo;
