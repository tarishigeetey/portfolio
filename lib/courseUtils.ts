import type { Project } from 'types/Project';
import type { Course } from 'types/Course';

export function projectToCourse(project: Project): Course {
  return {
    ...project,
    banner: project.banner || `/static/projects/${project.slug}/banner.png`,
    content: [], // Add actual course content structure here
  };
}
