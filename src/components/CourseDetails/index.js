import React from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../section/WrapFlex';
import CourseInfo from './CourseInfo';
import SafeText from '../text/SafeText';
import Loader from './Loader';
import LessonsList from './LessonsList';
import Video from '../values/Video';

const CourseDetails = ({ data, loading, progress, onProgress }) => {
  if (loading) {
    return <Loader />;
  }

  const { title, description, lessonsCount, lessons, skills, rating, videoLink } = data;
  const { videoPlayedSeconds } = progress;

  const onVideoProgress = (values = {}) => {
    const { playedSeconds } = values;

    onProgress({ videoPlayedSeconds: playedSeconds });
  };

  const onLessonProgress = (lessonId, values = {}) => {
    const { playedSeconds } = values;

    onProgress({ lessonId, lessonPlayedSeconds: playedSeconds });
  };

  return (
    <WrapFlex gap="16px" direction="column">
      <SafeText content={title} h4 />
      <Video url={videoLink} hasSpeed timeToStart={videoPlayedSeconds} onProgress={onVideoProgress} />
      <CourseInfo title="COURSE.DESCRIPTION" content={description} />
      <CourseInfo title="COURSE.RATING" content={rating} />
      <CourseInfo title="COURSE.LESSONS_COUNT" content={lessonsCount} />
      <CourseInfo title="COURSE.SKILLS" content={skills} />
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
