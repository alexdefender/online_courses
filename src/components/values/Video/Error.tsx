import styled from '@emotion/styled';
import theme from '@theme';

import Text from '../../text/Text';

const StyledText = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const VideoError = (): JSX.Element => (
  <StyledText tid="COMMON.VIDEO_ERROR" variant="h5" component="div" color={theme.palette.error.main} />
);

VideoError.displayName = 'VideoError';

export default VideoError;
