import { useState } from 'react';
import styled from '@emotion/styled';

import { Course } from '@models/course';

import Image from '../values/Image';
import Video from '../values/Video';

type CoursePosterProps = Pick<Course, 'imageLink' | 'videoLink'>;

const Wrap = styled.div`
  position: relative;
  height: 300px;
  max-height: 300px;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.1s ease;
    opacity: 0;
  }
`;

const CoursePoster = ({ imageLink, videoLink }: CoursePosterProps): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const onFocus = (): void => {
    if (videoLink) setFocused(true);
  };

  const onBlur = (): void => {
    if (videoLink) setFocused(false);
  };

  const visible = (value: boolean): { opacity: number } | {} => (value ? { opacity: 1 } : {});

  return (
    <Wrap onMouseOver={onFocus} onMouseLeave={onBlur}>
      <Image url={imageLink} bg alt="" style={visible(!focused)} />
      <Video url={videoLink} muted controls={false} playing={focused} style={visible(focused)} />
    </Wrap>
  );
};

CoursePoster.displayName = 'CoursePoster';

export default CoursePoster;
