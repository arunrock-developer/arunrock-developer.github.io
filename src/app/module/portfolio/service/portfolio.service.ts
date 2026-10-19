import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import {
  Profile,
  SkillCategory,
  ExperienceItem,
  Project,
  NavigationItem,
  ContactMessage
} from '../data/portfolio.models';
import {
  PORTFOLIO_PROFILE,
  NAVIGATION_ITEMS,
  SKILL_CATEGORIES,
  EXPERIENCE_ITEMS,
  PORTFOLIO_PROJECTS
} from '../data/portfolio.mock';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Observables backed by mock data for seamless future REST/GraphQL API replacement
  private profileSubject$ = new BehaviorSubject<Profile>(PORTFOLIO_PROFILE);
  private navItemsSubject$ = new BehaviorSubject<NavigationItem[]>(NAVIGATION_ITEMS);
  private skillsSubject$ = new BehaviorSubject<SkillCategory[]>(SKILL_CATEGORIES);
  private experienceSubject$ = new BehaviorSubject<ExperienceItem[]>(EXPERIENCE_ITEMS);
  private projectsSubject$ = new BehaviorSubject<Project[]>(PORTFOLIO_PROJECTS);

  // Active theme state ('dark' | 'light')
  private themeSubject$: BehaviorSubject<'dark' | 'light'>;
  public theme$: Observable<'dark' | 'light'>;

  constructor() {
    let initial: 'dark' | 'light' = 'dark';
    try {
      const saved = typeof window !== 'undefined' && window.localStorage
        ? localStorage.getItem('pf-theme') as 'dark' | 'light' | null
        : null;
      if (saved === 'dark' || saved === 'light') {
        initial = saved;
      }
    } catch (e) {
      initial = 'dark';
    }
    this.themeSubject$ = new BehaviorSubject<'dark' | 'light'>(initial);
    this.theme$ = this.themeSubject$.asObservable();
  }

  /**
   * Future API Replacement:
   * return this.http.get<Profile>('/api/portfolio/profile');
   */
  getProfile(): Observable<Profile> {
    return this.profileSubject$.asObservable();
  }

  getNavigationItems(): Observable<NavigationItem[]> {
    return this.navItemsSubject$.asObservable();
  }

  /**
   * Future API Replacement:
   * return this.http.get<SkillCategory[]>('/api/portfolio/skills');
   */
  getSkills(): Observable<SkillCategory[]> {
    return this.skillsSubject$.asObservable();
  }

  /**
   * Future API Replacement:
   * return this.http.get<ExperienceItem[]>('/api/portfolio/experience');
   */
  getExperience(): Observable<ExperienceItem[]> {
    return this.experienceSubject$.asObservable();
  }

  /**
   * Future API Replacement:
   * return this.http.get<Project[]>('/api/portfolio/projects', { params: { category, query } });
   */
  getProjects(category?: string, query?: string): Observable<Project[]> {
    return this.projectsSubject$.asObservable().pipe(
      map(projects => {
        let filtered = [...projects];

        if (category && category !== 'All') {
          filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
        }

        if (query && query.trim() !== '') {
          const q = query.toLowerCase().trim();
          filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.summary.toLowerCase().includes(q) ||
            p.technologies.some(t => t.toLowerCase().includes(q)) ||
            p.category.toLowerCase().includes(q)
          );
        }

        return filtered;
      })
    );
  }

  /**
   * Future API Replacement:
   * return this.http.get<Project>(`/api/portfolio/projects/${id}`);
   */
  getProjectById(id: string): Observable<Project | undefined> {
    return this.projectsSubject$.asObservable().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  /**
   * Submit contact form message.
   * Future API Replacement:
   * return this.http.post<{ success: boolean; message: string }>('/api/portfolio/contact', message);
   */
  submitContactForm(message: ContactMessage): Observable<{ success: boolean; message: string }> {
    return of({
      success: true,
      message: `Thank you, ${message.name}. Your inquiry regarding "${message.subject || 'Development Collaboration'}" has been recorded. Arun Kumar will follow up via ${message.email}.`
    });
  }

  // Theme switcher
  toggleTheme(): 'dark' | 'light' {
    const nextTheme = this.themeSubject$.value === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
    return nextTheme;
  }

  setTheme(theme: 'dark' | 'light'): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('pf-theme', theme);
      }
    } catch (e) {
      // LocalStorage might be disabled or unavailable
    }
    this.themeSubject$.next(theme);
  }

  getCurrentTheme(): 'dark' | 'light' {
    return this.themeSubject$.value;
  }
}
