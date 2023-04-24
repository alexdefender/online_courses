import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getCourse, resetCourse, setCourseProgress, getCourseProgress } from '@actions/courseActions';
import { hasData, getData } from '@utils/store';
import { CourseDetails } from '@components';

import { withError } from '@hocs';

const CourseDetailsContainer = ({ isHasData, data, progress, dispatch }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { id } = query;
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

  useEffect(() => {
    if (isHasData) {
      const { title, description } = data;
      router.replace({ pathname, query: { title, description } }, asPath, { shallow: true });
    }
  }, [isHasData]);

  return (
    <CourseDetails
      data={data}
      loading={!isHasData || !progress.hasData}
      progress={courseProgress}
      onProgress={setProgress}
    />
  );
};

CourseDetailsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHasData: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
};

const mapStateToProps = ({ course: { data, progress } }) => ({
  isHasData: hasData(data),
  data: getData(data),
  progress,
});

CourseDetailsContainer.displayName = 'CourseDetailsContainer';

export default compose(withError, connect(mapStateToProps))(CourseDetailsContainer);
