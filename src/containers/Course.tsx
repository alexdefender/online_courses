import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { getCourseProgress } from '@utils/progress';
import { CourseProgress } from '@models/progress';
import { CourseDetails, CourseDetailsLoader } from '@components';

import { withError } from '@hocs';

const CourseDetailsContainer = (): JSX.Element => {
  const { course, progress } = useTypedSelector((store) => store);
  const { getCourse, resetCourse, setCourseProgress } = useActions();
  const router = useRouter();
  const { data, loading } = course;
  const { pathname, asPath, query } = router;
  const courseId = String(query.id);
  const hasData = data && progress;
  const courseProgress = progress?.courses?.[courseId];

  const setProgress = (values: CourseProgress): void => {
    setCourseProgress(courseId, values);
  };

  useEffect(() => {
    getCourse(courseId);

    const progress = getCourseProgress(courseId);
    setProgress(progress);

    return () => {
      resetCourse();
    };
  }, []);

  useEffect(() => {
    if (hasData) {
      const { title, description } = data;
      router.replace({ pathname, query: { title, description } }, asPath, { shallow: true });
    }
  }, [hasData]);

  if (!hasData || loading) {
    return <CourseDetailsLoader />;
  }

  return <CourseDetails data={data} progress={courseProgress} onProgress={setProgress} />;
};

CourseDetailsContainer.displayName = 'CourseDetailsContainer';

export default withError(CourseDetailsContainer);
