type Meta = {
  skills: Array<string>;
  courseVideoPreview: {
    link: string;
  } | null;
};

export type CourseAPI = {
  id: string;
  title: string;
  description: string;
  previewImageLink: string;
  lessonsCount: number;
  lessons: [];
  rating: number;
  link: string;
  meta: Meta;
};

export type CoursesAPI = Array<CourseAPI>;

export type LessonAPI = {
  id: string;
  title: string;
  status: string;
  link: string;
  previewImageLink: string;
  order: number;
};
