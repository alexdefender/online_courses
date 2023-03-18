import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '@theme';

import Text from '../../text/Text';

const StyledText = styled(Text)({
  verticalAlign: 'middle',
});

const MAX_SPEED = 2;
const MIN_SPEED = 0.25;
const SPEED_STEP = 0.25;

const VideoSpeed = ({ videoRef }) => {
  const [speed, setSpeed] = useState(1);

  const handleKeyPress = ({ keyCode }) => {
    // up speed
    if (keyCode === 62 && videoRef.current.playbackRate < MAX_SPEED) {
      videoRef.current.playbackRate += SPEED_STEP;
      setSpeed(videoRef.current.playbackRate);
    }
    // down speed
    if (keyCode === 60 && videoRef.current.playbackRate > MIN_SPEED) {
      videoRef.current.playbackRate -= SPEED_STEP;
      setSpeed(videoRef.current.playbackRate);
    }
  };

  useEffect(() => {
    if (!videoRef) return;

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  if (!videoRef) {
    return null;
  }

  return (
    <div>
      <StyledText tid="COMMON.VIDEO_SPEED" parent="span" values={{ value: speed }} bold={600} body1 />
      <Text tid="COMMON.VIDEO_SPEED_TIP" color={theme.palette.grey[500]} />
    </div>
  );
};

VideoSpeed.propTypes = {
  videoRef: PropTypes.object,
};

export default VideoSpeed;
