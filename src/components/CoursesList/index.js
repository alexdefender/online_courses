import React from 'react';
import PropTypes from 'prop-types';

import Wrap from './Wrap';
import CoursePreview from './Course';
import Loader from './Loader';

const CoursesList = ({ list, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <Wrap>
      {list.map((course) => (
        <CoursePreview key={course.id} {...course} />
      ))}
    </Wrap>
  );
};

CoursesList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CoursesList;
