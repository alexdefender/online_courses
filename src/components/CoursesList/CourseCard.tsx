import { ReactNode } from 'react';
import Card from '@mui/material/Card';

type CourseCardProps = {
  children: ReactNode;
};

const CourseCard = ({ children }: CourseCardProps): JSX.Element => <Card>{children}</Card>;

CourseCard.displayName = 'CourseCard';

export default CourseCard;
