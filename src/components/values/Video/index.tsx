import { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import styled from '@emotion/styled';
import theme from '@theme';

import { onProgressValues } from '@models';

import WrapFlex from '../../section/WrapFlex';
import VideoSpeed from './VideoSpeed';
import VideoError from './Error';

type VideoProps = {
  url: string | null;
  controls?: boolean;
  muted?: boolean;
  playing?: boolean;
  hasSpeed?: boolean;
  startPosition?: number;
  width?: string;
  style?: object | undefined;
  onProgress?: (values: onProgressValues) => void;
};

const PlayerWrap = styled(WrapFlex)`
  padding: ${theme.spacing(2, 1)};
  border: 1px solid ${theme.palette.primary.dark};
`;

const Video = ({
  url,
  controls = true,
  muted,
  playing,
  hasSpeed,
  startPosition = 0,
  width = '100%',
  style,
  onProgress,
}: VideoProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState(false);

  const _onProcess = (data: { start: number }): void => {
    const { start } = data;

    if (onProgress) onProgress({ startPosition: Math.floor(start) });
  };

  useEffect(() => {
    let hls: Hls | null = null;

    const _initPlayer = (): void => {
      if (hls !== null) {
        hls.destroy();
      }

      const newHls: Hls = new Hls({ startPosition });

      if (videoRef.current !== null) {
        newHls.attachMedia(videoRef.current);
      }

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        if (url) newHls.loadSource(url);
      });

      newHls.on(Hls.Events.ERROR, (_e, data) => {
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

      newHls.on(Hls.Events.FRAG_CHANGED, (_e, { frag }) => {
        _onProcess(frag);
      });

      hls = newHls;
    };

    if (!url || Hls.isSupported()) {
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
        <VideoSpeed videoElement={videoRef.current} />
      </PlayerWrap>
    );
  }

  return videoComponent;
};

Video.displayName = 'Video';

export default Video;
