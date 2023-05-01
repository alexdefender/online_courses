import { NextPageContext } from 'next';

import { Page, BaseLayout } from '@layouts';
import { getCourse } from '@actions/courseActions';
import CourseContainer from '@containers/Course';
import { META_ID } from '@constants';
import Head from '../../_head';

type CoursePageProps = {
  title: string;
  description: string;
};

const CoursePage = ({ title, description }: CoursePageProps): JSX.Element => (
  <Page>
    <Head id={META_ID.COURSE} {...{ title, description }} />

    <BaseLayout>
      <CourseContainer />
    </BaseLayout>
  </Page>
);

CoursePage.getInitialProps = async ({ store, query, req }: NextPageContext) => {
  const courseId = String(query.id);

  if (req) {
    await store.dispatch(getCourse(courseId));
  }

  const {
    course: { data },
  } = store.getState();
  const { title, description } = data || {};

  return { title, description };
};

export default CoursePage;
