import { onProgressValues } from '@models';
import { LessonId, Course } from '@models/course';
import { CourseProgress } from '@models/progress';

import WrapFlex from '../section/WrapFlex';
import CourseInfo from './CourseInfo';
import SafeText from '../text/SafeText';
import LessonsList from './LessonsList';
import Video from '../values/Video';
import Divider from '../Divider';

type CourseDetailsProps = {
  data: Course;
  progress: CourseProgress;
  onProgress: (values: CourseProgress) => void;
};

const CourseDetails = ({ data, progress = {}, onProgress }: CourseDetailsProps): JSX.Element => {
  const { title, description, lessonsCount, lessons, skills, rating, videoLink } = data;
  const { videoStartPosition = 0 } = progress;

  const onVideoProgress = (values: onProgressValues): void => {
    const { startPosition } = values;

    onProgress({ videoStartPosition: startPosition });
  };

  const onLessonProgress = (lessonId: LessonId | null, values: onProgressValues): void => {
    const { startPosition } = values;

    onProgress({ lessonId, lessonStartPosition: startPosition });
  };

  return (
    <WrapFlex gap={16} direction="column">
      <SafeText content={title} variant="h4" />
      <Video url={videoLink} hasSpeed startPosition={videoStartPosition} onProgress={onVideoProgress} />
      <CourseInfo title="COURSE.DESCRIPTION" content={description} />
      <CourseInfo title="COURSE.RATING" content={rating} />
      <CourseInfo title="COURSE.LESSONS_COUNT" content={lessonsCount} />
      <CourseInfo title="COURSE.SKILLS" content={skills} />
      <Divider />
      <LessonsList list={lessons} progress={progress} onLessonProgress={onLessonProgress} />
    </WrapFlex>
  );
};

CourseDetails.displayName = 'CourseDetails';

export default CourseDetails;
