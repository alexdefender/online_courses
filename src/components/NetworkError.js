import React from 'react';
import styled from '@emotion/styled';

import { CORS_EXTENSION_URL } from '@constants';

import WrapFlex from './section/WrapFlex';
import LinkWrap from './LinkWrap';
import Text from './text/Text';
import SafeText from './text/SafeText';

const StyledUl = styled.ul(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const NetworkError = () => (
  <WrapFlex gap={8} direction="column">
    <Text h6 tid="COMMON.NETWORK_ERROR.TITLE" />

    <StyledUl>
      <li>
        <Text tid="COMMON.NETWORK_ERROR.ITEM_1" />
        <LinkWrap href={CORS_EXTENSION_URL} target="_blank" nofollow underline>
          <SafeText content={CORS_EXTENSION_URL} />
        </LinkWrap>
      </li>
      <li>
        <Text tid="COMMON.NETWORK_ERROR.ITEM_2" />
      </li>
    </StyledUl>
  </WrapFlex>
);

export default NetworkError;
