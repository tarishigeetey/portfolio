export interface Course {
  title: string;
  description: string;
  slug: string;
  banner: string;
  content: CourseContent[];
}

export interface CourseContent {
  name: string;
  description?: string;
  content?: { name: string; slug: string }[];
}
