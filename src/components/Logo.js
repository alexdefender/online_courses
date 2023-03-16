import React from 'react';
import theme from '@theme';
import styled from '@emotion/styled';

import ROUTES from '@constants/routes';

import WrapFlex from './section/WrapFlex';
import SchoolIcon from './icons/SchoolIcon';
import Text from './text/Text';
import LinkWrap from './LinkWrap';

const StyledSchoolIcon = styled(SchoolIcon)`
  fill: ${() => theme.palette.common.white};
`;

const Logo = () => (
  <LinkWrap href={ROUTES.HOME}>
    <WrapFlex gap="16px" align="center">
      <StyledSchoolIcon fontSize="large" />
      <Text tid="HEADER.APP_NAME" h5 color={theme.palette.common.white} />
    </WrapFlex>
  </LinkWrap>
);

export default Logo;
