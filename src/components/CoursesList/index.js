import React from 'react';
import PropTypes from 'prop-types';

import WrapFlex from '../section/WrapFlex';
import CoursePreview from './Course';
import Loader from './Loader';

const CoursesList = ({ list, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <WrapFlex gap="16px" wrap="wrap">
      {list.map((course) => (
        <CoursePreview key={course.id} {...course} />
      ))}
    </WrapFlex>
  );
};

CoursesList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CoursesList;
