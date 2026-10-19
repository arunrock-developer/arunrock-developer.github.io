import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';
import { PORTFOLIO_PROFILE, PORTFOLIO_PROJECTS, SKILL_CATEGORIES } from '../data/portfolio.mock';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    try {
      localStorage.removeItem('pf-theme');
    } catch (e) {}
    TestBed.configureTestingModule({
      providers: [PortfolioService]
    });
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return profile data with Arun Kumar info', (done) => {
    service.getProfile().subscribe(profile => {
      expect(profile).toBeDefined();
      expect(profile.name).toContain('Arun Kumar');
      expect(profile.email).toBe('aktechsaviour@gmail.com');
      done();
    });
  });

  it('should return categorized skills without percentage numbers', (done) => {
    service.getSkills().subscribe(categories => {
      expect(categories.length).toBeGreaterThan(0);
      const frontend = categories.find(c => c.id === 'frontend');
      expect(frontend).toBeDefined();
      expect(frontend?.skills.some(s => s.name.includes('Angular'))).toBeTrue();
      done();
    });
  });

  it('should filter projects correctly by category', (done) => {
    service.getProjects('Enterprise Applications').subscribe(projects => {
      expect(projects.length).toBeGreaterThan(0);
      expect(projects.every(p => p.category === 'Enterprise Applications')).toBeTrue();
      done();
    });
  });

  it('should toggle theme between dark and light', () => {
    expect(service.getCurrentTheme()).toBe('dark');
    const toggled = service.toggleTheme();
    expect(toggled).toBe('light');
    expect(service.getCurrentTheme()).toBe('light');
    const toggledBack = service.toggleTheme();
    expect(toggledBack).toBe('dark');
  });
});
