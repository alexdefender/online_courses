import SkeletonComponent from '@mui/material/Skeleton';

type SkeletonProps = {
  variant: 'text' | 'rectangular' | 'rounded' | 'circular';
  width: string;
  height: number;
};

const Skeleton = (props: SkeletonProps): JSX.Element => (
  <SkeletonComponent component="div" animation="wave" {...props} />
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
