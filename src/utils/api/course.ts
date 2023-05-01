import { Course, Lesson, Lessons } from '@models/course';
import { CoursesList } from '@models/courses';
import { CourseAPI, CoursesAPI, LessonAPI } from '@models/api';
import { COURSE, LESSON } from '@constants/fields';

const getCourseImageLink = (previewLink: string): string | null => (previewLink ? `${previewLink}/cover.webp` : null);

const getLessonImageLink = (previewLink: string, order: number): string | null =>
  previewLink ? `${previewLink}/lesson-${order}.webp` : null;

const isLockedLesson = (status: string): boolean => status === 'locked';

const performLesson = (raw: LessonAPI): Lesson => ({
  id: raw[LESSON.ID],
  title: raw[LESSON.TITLE],
  isLocked: isLockedLesson(raw[LESSON.STATUS]),
  imageLink: getLessonImageLink(raw[LESSON.PREVIEW_IMAGE_LINK], raw[LESSON.ORDER]),
  videoLink: raw[LESSON.LINK],
});

const performLessons = (raw: LessonAPI[]): Lessons | null => {
  if (!raw) {
    return null;
  }

  return raw.map((lesson: LessonAPI) => performLesson(lesson));
};

export const performCourse = (raw: CourseAPI): Course => {
  const meta = raw[COURSE.META];
  const videoPreview = meta[COURSE.VIDEO_PREVIEW] || null;
  const videoLink = videoPreview ? videoPreview[COURSE.LINK] : null;
  const lessons = performLessons(raw[COURSE.LESSONS]);

  return {
    id: raw[COURSE.ID],
    title: raw[COURSE.TITLE],
    description: raw[COURSE.DESCRIPTION],
    imageLink: getCourseImageLink(raw[COURSE.PREVIEW_IMAGE_LINK]),
    lessonsCount: raw[COURSE.LESSONS_COUNT],
    skills: meta[COURSE.SKILLS],
    rating: raw[COURSE.RATING],
    videoLink,
    lessons,
  };
};

export const performCoursesList = (raw: CoursesAPI, perPage: number): CoursesList | [] => {
  if (raw.length === 0) {
    return [];
  }

  const list: CoursesList = [[]];

  raw.reverse().forEach((course) => {
    const performedCourse = performCourse(course);
    const coursesOnLastPage = list[list.length - 1];

    if (coursesOnLastPage.length < perPage) {
      coursesOnLastPage.push(performedCourse);
    } else {
      list.push([performedCourse]);
    }
  });

  return list;
};
