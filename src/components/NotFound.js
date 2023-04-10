import React from 'react';
import styled from '@emotion/styled';
import theme from '@theme';

import WrapFlex from './section/WrapFlex';
import SafeText from './text/SafeText';
import NetworkError from './NetworkError';

const StyledText = styled(SafeText)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 300,
});

const NotFound = () => (
  <WrapFlex gap={12} direction="column">
    <StyledText content="404" parent="div" h1 bold={500} color={theme.palette.grey[500]} />
    <NetworkError />
  </WrapFlex>
);

export default NotFound;
