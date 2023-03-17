import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { getCourse, resetCourse, setCourseProgress, getCourseProgress } from '@actions/courseActions';
import { hasData, getData } from '@utils/store';
import { CourseDetails } from '@components';

const CourseDetailsContainer = ({ isHasData, data, progress, dispatch }) => {
  const router = useRouter();
  const { id } = router.query;
  const courseProgress = progress[id] || {};

  const setProgress = (values = {}) => {
    dispatch(setCourseProgress(id, values));
  };

  useEffect(() => {
    dispatch(getCourse(id));

    const progress = getCourseProgress(id) || {};
    setProgress(progress);

    return () => {
      dispatch(resetCourse());
    };
  }, []);

  return <CourseDetails data={data} loading={!isHasData} progress={courseProgress} onProgress={setProgress} />;
};

CourseDetailsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHasData: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = ({ course: { data, progress } }) => ({
  isHasData: hasData(data),
  data: getData(data),
  progress,
});

export default connect(mapStateToProps)(CourseDetailsContainer);
