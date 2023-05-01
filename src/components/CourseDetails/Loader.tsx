import WrapFlex from '../section/WrapFlex';
import Skeleton from '../loaders/Skeleton';

const CourseLoader = (): JSX.Element => (
  <WrapFlex gap={16} direction="column">
    <Skeleton variant="rounded" width="80%" height={40} />
    <Skeleton variant="rectangular" width="100%" height={300} />
    <Skeleton variant="rounded" width="40%" height={24} />
    <Skeleton variant="rounded" width="70%" height={24} />
    <Skeleton variant="rounded" width="40%" height={24} />
  </WrapFlex>
);

CourseLoader.displayName = 'CourseLoader';

export default CourseLoader;
