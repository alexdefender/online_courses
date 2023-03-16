import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../../section/WrapFlex';
import Text from '../../text/Text';
import LessonPreview from './Lesson';

const LessonsList = ({ list }) => {
  const [openLesson, setOpenLesson] = useState(null);

  if (!list) {
    return null;
  }

  const handleChange = (id) => (e, expanded) => {
    setOpenLesson(expanded ? id : null)
  };

  return (
    <WrapFlex gap="16px" direction="column">
      <Text tid="LESSON.LESSONS" h5 />

      {list.map((item) => (
        <LessonPreview
          key={item.id}
          openId={openLesson}
          onChange={handleChange}
          {...item}

        />
      ))}
    </WrapFlex>
  );
};

LessonsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default LessonsList;
