import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Hls from 'hls.js';
import styled from '@emotion/styled';

import WrapFlex from '../../section/WrapFlex';
import VideoSpeed from './VideoSpeed';
import VideoError from './Error';

const PlayerWrap = styled(WrapFlex)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  border: `1px solid ${theme.palette.primary.dark}`,
}));

const Video = ({ url, controls, muted, playing, hasSpeed, startPosition, width, style, onProgress }) => {
  const videoRef = useRef();
  const [error, setError] = useState(false);

  const _onProcess = (data) => {
    const { start } = data;

    if (onProgress) onProgress({ startPosition: Math.floor(start) });
  };

  useEffect(() => {
    let hls = null;

    const _initPlayer = () => {
      if (hls !== null) {
        hls.destroy();
      }

      const newHls = new Hls({ startPosition });

      if (videoRef.current !== null) {
        newHls.attachMedia(videoRef.current);
      }

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(url);
      });

      newHls.on(Hls.Events.ERROR, (e, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              setError(true);
              break;
            default:
              _initPlayer();
              break;
          }
        }
      });

      newHls.on(Hls.Events.FRAG_CHANGED, (e, { frag }) => {
        _onProcess(frag);
      });

      hls = newHls;
    };

    if (Hls.isSupported()) {
      _initPlayer();
    }

    return () => {
      if (hls !== null) {
        hls.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || typeof playing !== 'boolean') {
      return;
    }

    if (playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoRef, playing]);

  if (!url || error) {
    return <VideoError />;
  }

  const videoComponent = <video ref={videoRef} {...{ controls, width, muted, style }} />;

  if (hasSpeed) {
    return (
      <PlayerWrap gap={16} direction="column" style={style}>
        {videoComponent}
        <VideoSpeed videoRef={videoRef} />
      </PlayerWrap>
    );
  }

  return videoComponent;
};

Video.defaultProps = {
  controls: true,
  startPosition: 0,
  width: '100%',
};

Video.propTypes = {
  url: PropTypes.string,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  playing: PropTypes.bool,
  hasSpeed: PropTypes.bool,
  startPosition: PropTypes.number,
  width: PropTypes.string,
  style: PropTypes.object,
  onProgress: PropTypes.func,
};

export default Video;
