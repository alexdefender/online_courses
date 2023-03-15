import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCourses } from '@actions/courseActions';
import { hasData, getData } from '@utils/store';

const Courses = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return <div>Courses</div>;
};

Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ courses: { list } }) => ({
  isHasData: hasData(list),
  list: getData(list),
});

export default connect(mapStateToProps)(Courses);
