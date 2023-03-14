import React from 'react';

import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';
import Head from './_head';

const HomePage = () => (
  <Page>
    <Head id={META_ID.COURSES} />

    <BaseLayout>Courses list</BaseLayout>
  </Page>
);

HomePage.getInitialProps = () => {
  return {};
};

export default HomePage;
