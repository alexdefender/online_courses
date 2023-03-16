import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCourses } from '@actions/courseActions';
import { hasData, getData } from '@utils/store';
import { CoursesList } from '@components';

const Courses = ({ isHasData, list, dispatch }) => {
  useEffect(() => {
    if (!isHasData) {
      dispatch(getCourses());
    }
  }, []);

  return <CoursesList list={list} loading={!isHasData} />;
};

Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHasData: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
};

const mapStateToProps = ({ courses: { list } }) => ({
  isHasData: hasData(list),
  list: getData(list, []),
});

export default connect(mapStateToProps)(Courses);
