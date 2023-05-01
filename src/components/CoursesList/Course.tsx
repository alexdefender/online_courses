import { Course } from '@models/course';
import ROUTES from '@constants/routes';

import CourseCard from './CourseCard';
import CoursePoster from './CoursePoster';
import SafeText from '../text/SafeText';
import LinkWrap from '../LinkWrap';
import CourseInfo from '../CourseDetails/CourseInfo';

const CoursePreview = ({ id, title, imageLink, lessonsCount, skills, rating, videoLink }: Course): JSX.Element => (
  <LinkWrap href={ROUTES.COURSE(id)} hrefAs={ROUTES.COURSE_PAGE}>
    <CourseCard>
      <SafeText content={title} variant="h4" />
      <CoursePoster {...{ imageLink, videoLink }} />
      <CourseInfo title="COURSE.RATING" content={rating} />
      <CourseInfo title="COURSE.LESSONS_COUNT" content={lessonsCount} />
      <CourseInfo title="COURSE.SKILLS" content={skills} />
    </CourseCard>
  </LinkWrap>
);

CoursePreview.displayName = 'CoursePreview';

export default CoursePreview;
