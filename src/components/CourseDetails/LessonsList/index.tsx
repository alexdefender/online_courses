import { useState, Fragment } from 'react';

import { LessonId, Lessons } from '@models/course';
import { CourseProgress } from '@models/progress';
import { onProgressValues } from '@models';

import WrapFlex from '../../section/WrapFlex';
import Text from '../../text/Text';
import LessonPreview, { onOpenValues } from './Lesson';

type LessonsListProps = {
  list: Lessons;
  progress: CourseProgress;
  onLessonProgress: (id: LessonId | null, values: onProgressValues) => void;
};

const LessonsList = ({ list, progress, onLessonProgress }: LessonsListProps): JSX.Element => {
  const { lessonId = null, lessonStartPosition = 0 } = progress;
  const [openLesson, setOpenLesson] = useState(lessonId);

  if (!list) {
    return <Fragment />;
  }

  const onOpen = ({ id, isLocked, expanded }: onOpenValues): void => {
    if (expanded) {
      setOpenLesson(id);
      onLessonProgress(!isLocked ? id : null, { startPosition: 0 });
    } else {
      setOpenLesson(null);
      onLessonProgress(null, { startPosition: 0 });
    }
  };

  return (
    <WrapFlex gap={16} direction="column">
      <Text tid="LESSON.LESSONS" variant="h5" />

      {list.map((item) => (
        <LessonPreview
          key={item.id}
          openId={openLesson}
          onOpen={onOpen}
          VideoProps={{
            onProgress: (values) => onLessonProgress(item.id, values),
            startPosition: lessonStartPosition,
          }}
          {...item}
        />
      ))}
    </WrapFlex>
  );
};

LessonsList.displayName = 'LessonsList';

export default LessonsList;
