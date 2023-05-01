import { Course } from '@models/course';

import Wrap from './Wrap';
import CoursePreview from './Course';
import EmptyList from './Empty';

type CoursesListProps = {
  list: Array<Course>;
};

const CoursesList = ({ list = [] }: CoursesListProps): JSX.Element => {
  const isEmpty: boolean = list.length === 0;

  if (isEmpty) {
    return <EmptyList />;
  }

  return (
    <Wrap>
      {list.map((course) => (
        <CoursePreview key={course.id} {...course} />
      ))}
    </Wrap>
  );
};

CoursesList.displayName = 'CoursesList';

export default CoursesList;
