import React from 'react';
import PropTypes from 'prop-types';
import theme from '@theme';

import DetailsCollapsable from '../../section/DetailsCollapsable';
import Text from '../../text/Text';
import Video from '../../values/Video';

const LessonPreview = ({ id, openId, title, isLocked, videoLink, onOpen, VideoProps }) => {
  const isOpen = id === openId;
  let content = null;

  if (isOpen && isLocked) {
    content = <Text tid="LESSON.CLOSED" bold={600} color={theme.palette.error.main} />;
  } else if (isOpen && !isLocked) {
    content = <Video url={videoLink} hasSpeed {...VideoProps} />;
  }

  return (
    <DetailsCollapsable onChange={(e, expanded) => onOpen({ id, isLocked, expanded })} {...{ id, openId, title }}>
      {content}
    </DetailsCollapsable>
  );
};

LessonPreview.defaultProps = {
  VideoProps: {},
};

LessonPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,

  openId: PropTypes.string,
  videoLink: PropTypes.string,
  VideoProps: PropTypes.object,
};

export default LessonPreview;
