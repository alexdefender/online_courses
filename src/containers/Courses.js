import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getCourses } from '@actions/courseActions';
import { hasData, getData } from '@utils/store';
import { CoursesList } from '@components';

import { withError } from '@hocs';

import Pagination from './Pagination';

const Courses = ({ isHasData, list, page, dispatch }) => {
  const listForPage = list[page - 1] || [];

  useEffect(() => {
    if (!isHasData) {
      dispatch(getCourses());
    }
  }, []);

  return (
    <Fragment>
      <CoursesList list={listForPage} loading={!isHasData} />
      <Pagination pageCount={list.length} />
    </Fragment>
  );
};

Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHasData: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
};

const mapStateToProps = ({ courses: { list }, pagination: { page } }) => ({
  isHasData: hasData(list),
  list: getData(list, []),
  page,
});

export default compose(withError, connect(mapStateToProps))(Courses);
