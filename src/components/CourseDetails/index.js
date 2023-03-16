import React from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../section/WrapFlex';
import CourseInfo from './CourseInfo';
import SafeText from '../text/SafeText';
import Loader from './Loader';
import LessonsList from './LessonsList';

const CourseDetails = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  }

  const { title, description, lessonsCount, lessons, skills, rating, videoLink } = data;

  return (
    <WrapFlex gap="16px" direction="column">
      <SafeText content={title} h4 />

      <CourseInfo title="COURSE.DESCRIPTION" content={description} />
      <CourseInfo title="COURSE.RATING" content={rating} />
      <CourseInfo title="COURSE.LESSONS_COUNT" content={lessonsCount} />
      <CourseInfo title="COURSE.SKILLS" content={skills} />

      <LessonsList list={lessons} />
    </WrapFlex>
  );
};

CourseDetails.propTypes = {
  loading: PropTypes.bool.isRequired,

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
