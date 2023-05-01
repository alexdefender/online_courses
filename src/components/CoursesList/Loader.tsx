import CourseCard from './CourseCard';
import Wrap from './Wrap';
import Skeleton from '../loaders/Skeleton';

const Elements = Array(4).fill(0);

const CoursesListLoader = (): JSX.Element => (
  <Wrap>
    {Elements.map((v, i) => (
      <CourseCard key={i}>
        <Skeleton variant="rounded" width="80%" height={40} />
        <Skeleton variant="rectangular" width="100%" height={200} />
        <Skeleton variant="rounded" width="40%" height={24} />
        <Skeleton variant="rounded" width="70%" height={24} />
        <Skeleton variant="rounded" width="40%" height={24} />
      </CourseCard>
    ))}
  </Wrap>
);

CoursesListLoader.displayName = 'CoursesListLoader';

export default CoursesListLoader;
