import styled from '@emotion/styled';
import theme from '@theme';

import Text from '../text/Text';

const StyledText = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const CoursesListEmpty = (): JSX.Element => (
  <StyledText tid="COURSE.EMPTY_LIST" variant="h5" color={theme.palette.warning.main} />
);

CoursesListEmpty.displayName = 'CoursesListEmpty';

export default CoursesListEmpty;
