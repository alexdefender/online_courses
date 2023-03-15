import React from 'react';

import { Page, BaseLayout } from '@layouts';
import CoursesContainer from '@containers/Courses';
import { META_ID } from '@constants';
import Head from './_head';

const HomePage = () => {
  return (
    <Page>
      <Head id={META_ID.COURSES} />

      <BaseLayout>
        <CoursesContainer />
      </BaseLayout>
    </Page>
  );
};

HomePage.getInitialProps = async () => {
  return {};
};

export default HomePage;
