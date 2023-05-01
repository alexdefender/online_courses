import styled from '@emotion/styled';
import theme from '@theme';

import WrapFlex from './section/WrapFlex';
import SafeText from './text/SafeText';
import NetworkError from './NetworkError';

const StyledText = styled(SafeText)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const NotFound = (): JSX.Element => (
  <WrapFlex gap={12} direction="column">
    <StyledText content="404" variant="h1" component="div" bold={500} color={theme.palette.grey[500]} />
    <NetworkError />
  </WrapFlex>
);

NotFound.displayName = 'NotFound';

export default NotFound;
