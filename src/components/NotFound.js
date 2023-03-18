import React from 'react';
import styled from '@emotion/styled';
import theme from '@theme';

import SafeText from './text/SafeText';

const StyledText = styled(SafeText)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 300,
});

const NotFound = () => <StyledText content="404" parent="div" h1 bold={500} color={theme.palette.grey[500]} />;

export default NotFound;
