import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import WrapFlex from '../../section/WrapFlex';
import SpeedButtons from './SpeedButtons';

const PlayerWrap = styled(WrapFlex)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  border: `1px solid ${theme.palette.primary.dark}`,
}));

const Video = ({ url, controls, muted, hasSpeed, timeToStart, onProgress }) => {
  const [speed, setSpeed] = useState(1);
  const playerRef = useRef(null);

  const onReady = () => {
    playerRef.current.seekTo(timeToStart, 'seconds');
  };

  const onSpeedBtnClick = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const player = (
    <ReactPlayer
      ref={playerRef}
      url={url}
      width="100%"
      height="fit-content"
      controls={controls}
      muted={muted}
      onProgress={onProgress}
      playbackRate={speed}
      onReady={onReady}
    />
  );

  if (hasSpeed) {
    return (
      <PlayerWrap gap="16px" direction="column">
        {player}
        <SpeedButtons active={speed} onClick={onSpeedBtnClick} />
      </PlayerWrap>
    );
  }

  return player;
};

Video.defaultProps = {
  controls: true,
  muted: false,
  timeToStart: 0,
};

Video.propTypes = {
  url: PropTypes.string.isRequired,

  controls: PropTypes.bool,
  muted: PropTypes.bool,
  hasSpeed: PropTypes.bool,
  timeToStart: PropTypes.number,
  onProgress: PropTypes.func,
};

export default Video;
