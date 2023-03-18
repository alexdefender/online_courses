import React from 'react';
import PropTypes from 'prop-types';

import Wrap from './Wrap';
import CoursePreview from './Course';
import Loader from './Loader';
import EmptyList from './Empty';

const CoursesList = ({ list, loading }) => {
  if (loading) {
    return <Loader />;
  }

  if (list.length === 0) {
    return <EmptyList />
  }

  return (
    <Wrap>
      {list.map((course) => (
        <CoursePreview key={course.id} {...course} />
      ))}
    </Wrap>
  );
};

CoursesList.defaultProps = {
  list: [],
};

CoursesList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CoursesList;
