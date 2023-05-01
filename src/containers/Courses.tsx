import { Fragment, useEffect } from 'react';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { CoursesList, CoursesListLoader } from '@components';

import { withError } from '@hocs';

import Pagination from './Pagination';

const CoursesContainer = (): JSX.Element => {
  const { list, loading, page } = useTypedSelector((store) => store.courses);
  const { getCourses } = useActions();
  const hasData = !!list;

  useEffect(() => {
    if (!hasData) {
      getCourses();
    }
  }, []);

  if (!hasData || loading) {
    return <CoursesListLoader />;
  }

  const coursesList = list[page - 1];

  return (
    <Fragment>
      <CoursesList list={coursesList} />
      <Pagination />
    </Fragment>
  );
};

CoursesContainer.displayName = 'CoursesContainer';

export default withError(CoursesContainer);
