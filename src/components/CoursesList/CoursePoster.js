import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Image from '../values/Image';
import Video from '../values/Video';

const StyledDiv = styled.div({
  position: 'relative',
  height: 300,
  maxHeight: 300,

  '& > *': {
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'opacity .1s ease',
    opacity: 0,
  },
});

const CoursePoster = ({ imageLink, videoLink }) => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    if (videoLink) setFocused(true);
  };

  const onBlur = () => {
    if (videoLink) setFocused(false);
  };

  const visible = (value) => (value ? { opacity: 1 } : null);

  return (
    <StyledDiv onMouseOver={onFocus} onMouseLeave={onBlur}>
      <Image url={imageLink} bg alt="" style={visible(!focused)} />
      <Video url={videoLink} muted controls={false} playing={focused} style={visible(focused)} />
    </StyledDiv>
  );
};

CoursePoster.propTypes = {
  imageLink: PropTypes.string.isRequired,

  videoLink: PropTypes.string,
};

export default CoursePoster;
