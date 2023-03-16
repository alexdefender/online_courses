import React from 'react';

import { Page, BaseLayout } from '@layouts';
import CourseContainer from '@containers/Course';
import { META_ID } from '@constants';
import Head from '../../_head';

const CoursePage = () => (
  <Page>
    <Head id={META_ID.COURSE} />

    <BaseLayout>
      <CourseContainer />
    </BaseLayout>
  </Page>
);

CoursePage.getInitialProps = async () => {
  return {};
};

export default CoursePage;
