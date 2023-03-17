import React from 'react';
import PropTypes from 'prop-types';

import ROUTES from '@constants/routes';

import CourseCard from './CourseCard';
import SafeText from '../text/SafeText';
import Image from '../values/Image';
import LinkWrap from '../LinkWrap';
import CourseInfo from '../CourseDetails/CourseInfo';

const CoursePreview = ({ id, title, imageLink, lessonsCount, skills, rating, videoLink }) => {
  return (
    <LinkWrap href={ROUTES.COURSE(id)} hrefAs={ROUTES.COURSE_PAGE}>
      <CourseCard>
        <SafeText content={title} h4 />
        <Image url={imageLink} width="100%" height="fit-content" alt="" />
        <CourseInfo title="COURSE.RATING" content={rating} />
        <CourseInfo title="COURSE.LESSONS_COUNT" content={lessonsCount} />
        <CourseInfo title="COURSE.SKILLS" content={skills} />
      </CourseCard>
    </LinkWrap>
  );
};

CoursePreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  lessonsCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,

  skills: PropTypes.array,
  videoLink: PropTypes.string,
};

export default CoursePreview;
