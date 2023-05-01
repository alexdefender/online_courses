import { Fragment, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from '@theme';

import Text from '../../text/Text';

type VideoSpeedProps = {
  videoElement: HTMLVideoElement | null;
};

const StyledText = styled(Text)`
  vertical-align: 'middle';
`;

const MAX_SPEED: number = 2;
const MIN_SPEED: number = 0.25;
const SPEED_STEP: number = 0.25;

const VideoSpeed = ({ videoElement }: VideoSpeedProps): JSX.Element => {
  const [speed, setSpeed] = useState(1);

  const handleKeyPress = ({ code }: KeyboardEvent): void => {
    if (!videoElement) {
      return;
    }

    if (code === 'Period' && videoElement.playbackRate < MAX_SPEED) {
      videoElement.playbackRate += SPEED_STEP;
      setSpeed(videoElement.playbackRate);
    }

    if (code === 'Comma' && videoElement.playbackRate > MIN_SPEED) {
      videoElement.playbackRate -= SPEED_STEP;
      setSpeed(videoElement.playbackRate);
    }
  };

  useEffect(() => {
    if (!videoElement) return;

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [videoElement]);

  if (!videoElement) {
    return <Fragment />;
  }

  return (
    <div>
      <StyledText tid="COMMON.VIDEO_SPEED" values={{ value: speed }} variant="body1" component="span" bold={600} />
      <Text tid="COMMON.VIDEO_SPEED_TIP" color={theme.palette.grey[500]} />
    </div>
  );
};

VideoSpeed.displayName = 'VideoSpeed';

export default VideoSpeed;
