import styled from '@emotion/styled';
import SchoolIcon from '@mui/icons-material/School';
import theme from '@theme';

import ROUTES from '@constants/routes';

import WrapFlex from './section/WrapFlex';
import Text from './text/Text';
import LinkWrap from './LinkWrap';

const StyledSchoolIcon = styled(SchoolIcon)`
  fill: ${theme.palette.common.white};
`;

const Logo = (): JSX.Element => (
  <LinkWrap href={ROUTES.HOME}>
    <WrapFlex align="center">
      <StyledSchoolIcon fontSize="large" />
      <Text tid="MAIN.APP_NAME" variant="h5" color={theme.palette.common.white} />
    </WrapFlex>
  </LinkWrap>
);

Logo.displayName = 'Logo';

export default Logo;
