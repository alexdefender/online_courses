import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { getCourse } from '@actions/courseActions';
import { hasData, getData } from '@utils/store';
import { CourseDetails } from '@components';

const CourseDetailsContainer = ({ isHasData, data, dispatch }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getCourse(id));
  }, []);

  return <CourseDetails data={data} loading={!isHasData} />;
};

CourseDetailsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHasData: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = ({ course: { data } }) => ({
  isHasData: hasData(data),
  data: getData(data),
});

export default connect(mapStateToProps)(CourseDetailsContainer);
