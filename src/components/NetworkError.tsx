import styled from '@emotion/styled';
import theme from '@theme';

import { CORS_EXTENSION_URL } from '@constants';

import WrapFlex from './section/WrapFlex';
import LinkWrap from './LinkWrap';
import Text from './text/Text';
import SafeText from './text/SafeText';

const Ul = styled('ul')`
  padding-left: ${theme.spacing(2)};
`;

const NetworkError = (): JSX.Element => (
  <WrapFlex gap={8} direction="column">
    <Text variant="h6" tid="COMMON.NETWORK_ERROR.TITLE" />

    <Ul>
      <li>
        <Text tid="COMMON.NETWORK_ERROR.ITEM_1" />
        <LinkWrap href={CORS_EXTENSION_URL} target="_blank" nofollow underline>
          <SafeText content={CORS_EXTENSION_URL} />
        </LinkWrap>
      </li>
      <li>
        <Text tid="COMMON.NETWORK_ERROR.ITEM_2" />
      </li>
    </Ul>
  </WrapFlex>
);

NetworkError.displayName = 'NetworkError';

export default NetworkError;
