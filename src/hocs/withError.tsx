import React, { useEffect } from 'react';
import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';

import { NotFound } from '@components';

const withError = (Component: React.ComponentType<any | string>) => {
  const HOComponent = (props: any): JSX.Element => {
    const {
      course: { error: courseError },
      courses: { error: coursesError },
    } = useTypedSelector((store) => store);
    const { resetCourseError, resetCoursesError } = useActions();

    const hasError = courseError || coursesError;

    useEffect(() => {
      return () => {
        if (courseError) resetCourseError();
        if (coursesError) resetCoursesError();
      };
    }, []);

    if (hasError) {
      return <NotFound />;
    }

    return <Component {...props} />;
  };

  return HOComponent;
};

export default withError;
