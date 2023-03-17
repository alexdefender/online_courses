import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../../section/WrapFlex';
import Text from '../../text/Text';
import LessonPreview from './Lesson';

const LessonsList = ({ list, progress, onLessonProgress }) => {
  const { lessonId, lessonPlayedSeconds } = progress;
  const [openLesson, setOpenLesson] = useState(lessonId);

  if (!list) {
    return null;
  }

  const onOpen = ({ id, isLocked, expanded }) => {
    if (expanded) {
      setOpenLesson(id);
      onLessonProgress(!isLocked ? id : null, { playedSeconds: 0 });
    } else {
      setOpenLesson(null);
      onLessonProgress(null, { playedSeconds: 0 });
    }
  };

  return (
    <WrapFlex gap={16} direction="column">
      <Text tid="LESSON.LESSONS" h5 />

      {list.map((item) => (
        <LessonPreview
          key={item.id}
          openId={openLesson}
          onOpen={onOpen}
          VideoProps={{
            onProgress: (values) => onLessonProgress(item.id, values),
            timeToStart: lessonPlayedSeconds,
          }}
          {...item}
        />
      ))}
    </WrapFlex>
  );
};

LessonsList.propTypes = {
  list: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired,
  onLessonProgress: PropTypes.func.isRequired,
};

export default LessonsList;
