import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../data/portfolio.models';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {
  transform(projects: Project[] | null | undefined, category: string, search: string): Project[] {
    if (!projects) {
      return [];
    }

    let result = projects;

    if (category && category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }
}
