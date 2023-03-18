import React from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../section/WrapFlex';
import CourseInfo from './CourseInfo';
import SafeText from '../text/SafeText';
import Loader from './Loader';
import LessonsList from './LessonsList';
import Video from '../values/Video';
import Divider from '../Divider';

const CourseDetails = ({ data, loading, progress, onProgress }) => {
  if (loading) {
    return <Loader />;
  }

  const { title, description, lessonsCount, lessons, skills, rating, videoLink } = data;
  const { videoStartPosition } = progress;

  const onVideoProgress = (values = {}) => {
    const { startPosition } = values;

    onProgress({ videoStartPosition: startPosition });
  };

  const onLessonProgress = (lessonId, values = {}) => {
    const { startPosition } = values;

    onProgress({ lessonId, lessonStartPosition: startPosition });
  };

  return (
    <WrapFlex gap={16} direction="column">
      <SafeText content={title} h4 />
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

CourseDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  progress: PropTypes.object.isRequired,
  onProgress: PropTypes.func.isRequired,

  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    lessonsCount: PropTypes.number,
    lessons: PropTypes.array,
    rating: PropTypes.number,
    skills: PropTypes.array,
    videoLink: PropTypes.string,
  }),
};

export default CourseDetails;
