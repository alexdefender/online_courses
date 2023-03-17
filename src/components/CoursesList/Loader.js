import React from 'react';

import CourseCard from './CourseCard';
import Wrap from './Wrap';
import Skeleton from '../loaders/Skeleton';

const CoursesListLoader = () => (
  <Wrap>
    {Array(4)
      .fill()
      .map((v, i) => (
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

export default CoursesListLoader;
