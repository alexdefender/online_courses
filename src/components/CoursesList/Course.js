import React from 'react';
import PropTypes from 'prop-types';

import ROUTES from '@constants/routes';

import CourseCard from './CourseCard';
import WrapFlex from '../section/WrapFlex';
import Text from '../text/Text';
import SafeText from '../text/SafeText';
import Chip from '../Chip';
import Image from '../Image';
import LinkWrap from '../LinkWrap';

const CoursePreview = ({ id, title, imageLink, lessonsCount, skills, rating, videoLink }) => {
  return (
    <LinkWrap href={ROUTES.COURSE(id)} hrefAs={ROUTES.COURSE_PAGE}>
      <CourseCard>
        <SafeText content={title} h4 />
        <Image url={imageLink} width="100%" height="fit-content" alt="" />

        <WrapFlex gap="4px">
          <Text tid="COURSE.LESSONS_COUNT" body1 parent="span" />
          <SafeText content={lessonsCount} body1 parent="span" />
        </WrapFlex>

        {skills && (
          <WrapFlex gap="4px" align="center" wrap="wrap">
            <Text tid="COURSE.SKILLS" body1 parent="span" />
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </WrapFlex>
        )}

        <WrapFlex gap="4px">
          <Text tid="COURSE.RATING" body1 parent="span" />
          <SafeText content={rating} body1 parent="span" />
        </WrapFlex>
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
