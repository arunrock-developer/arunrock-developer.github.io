import { ProjectFilterPipe } from './project-filter.pipe';
import { PORTFOLIO_PROJECTS } from '../data/portfolio.mock';

describe('ProjectFilterPipe', () => {
  let pipe: ProjectFilterPipe;

  beforeEach(() => {
    pipe = new ProjectFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if input is null or undefined', () => {
    expect(pipe.transform(null, 'All', '')).toEqual([]);
    expect(pipe.transform(undefined, 'All', '')).toEqual([]);
  });

  it('should return all projects when category is All and search is empty', () => {
    const result = pipe.transform(PORTFOLIO_PROJECTS, 'All', '');
    expect(result.length).toBe(PORTFOLIO_PROJECTS.length);
  });

  it('should filter by category correctly', () => {
    const result = pipe.transform(PORTFOLIO_PROJECTS, 'Frontend Engineering', '');
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(p => p.category === 'Frontend Engineering')).toBeTrue();
  });

  it('should filter by query across title and summary', () => {
    const result = pipe.transform(PORTFOLIO_PROJECTS, 'All', 'Inventory');
    expect(result.length).toBeGreaterThan(0);
    expect(result.some(p => p.title.includes('Inventory'))).toBeTrue();
  });
});
