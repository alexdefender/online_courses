import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import WrapFlex from '../../section/WrapFlex';
import SpeedButtons from './SpeedButtons';
import VideoError from './Error';

const PlayerWrap = styled(WrapFlex)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  border: `1px solid ${theme.palette.primary.dark}`,
}));

const Video = ({ url, controls, muted, playing, hasSpeed, timeToStart, width, height, onProgress, style }) => {
  const [speed, setSpeed] = useState(1);
  const [error, setError] = useState(false);
  const playerRef = useRef(null);

  const onReady = () => {
    playerRef.current.seekTo(timeToStart, 'seconds');
  };

  const onError = () => {
    setError(true);
  };

  const onSpeedBtnClick = (newSpeed) => {
    setSpeed(newSpeed);
  };

  if (!url || error) {
    return <VideoError />;
  }

  const player = (
    <ReactPlayer
      ref={playerRef}
      playbackRate={speed}
      {...{ url, width, height, controls, muted, playing, onProgress, onReady, onError, style }}
    />
  );

  if (hasSpeed) {
    return (
      <PlayerWrap gap={16} direction="column" style={style}>
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
  playing: false,
  timeToStart: 0,
  width: '100%',
  height: 'fit-content',
};

Video.propTypes = {
  url: PropTypes.string,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  playing: PropTypes.bool,
  hasSpeed: PropTypes.bool,
  timeToStart: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  onProgress: PropTypes.func,
};

export default Video;
