import React from 'react';
import PropTypes from 'prop-types';

import { Page, BaseLayout } from '@layouts';
import { getCourse } from '@actions/courseActions';
import { getData } from '@utils/store';
import CourseContainer from '@containers/Course';
import { META_ID } from '@constants';
import Head from '../../_head';

const CoursePage = ({ title, description }) => (
  <Page>
    <Head id={META_ID.COURSE} {...{ title, description }} />

    <BaseLayout>
      <CourseContainer />
    </BaseLayout>
  </Page>
);

CoursePage.getInitialProps = async ({ store, query, isServer }) => {
  const { id } = query;

  if (isServer) {
    await store.dispatch(getCourse(id));
  }

  const {
    course: { data },
  } = store.getState();
  const { title, description } = getData(data);

  return { title, description };
};

CoursePage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CoursePage;
