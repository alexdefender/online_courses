import React from 'react';
import styled from '@emotion/styled';
import theme from '@theme';

import Text from '../text/Text';

const StyledText = styled(Text)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 100,
});

const CoursesListEmpty = () => (
  <StyledText tid="COURSE.EMPTY_LIST" parent="div" h5 color={theme.palette.warning.main} />
);

export default CoursesListEmpty;
