import { COURSE, LESSON } from '@constants/fields';

const getCourseImageLink = (previewLink) => (previewLink ? `${previewLink}/cover.webp` : null);

const getLessonImageLink = (previewLink, order) => (previewLink ? `${previewLink}/lesson-${order}.webp` : null);

const isLockedLesson = (status) => status === 'locked';

const performLesson = (raw) => ({
  id: raw[LESSON.ID],
  title: raw[LESSON.TITLE],
  isLocked: isLockedLesson(raw[LESSON.STATUS]),
  imageLink: getLessonImageLink(raw[LESSON.PREVIEW_IMAGE_LINK]),
  videoLink: raw[LESSON.LINK],
});

const performLessons = (raw) => {
  if (!raw) {
    return null;
  }

  return raw.map((lesson) => performLesson(lesson));
};

export const performCourse = (raw) => {
  const meta = raw[COURSE.META];
  const videoPreview = meta[COURSE.VIDEO_PREVIEW];
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

export const performCoursesList = (raw = {}) => {
  const { courses } = raw;

  return courses.map((course) => performCourse(course));
};
