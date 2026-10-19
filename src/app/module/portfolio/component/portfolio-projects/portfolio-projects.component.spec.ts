import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PortfolioProjectsComponent } from './portfolio-projects.component';
import { PORTFOLIO_PROJECTS } from '../../data/portfolio.mock';

describe('PortfolioProjectsComponent', () => {
  let component: PortfolioProjectsComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioProjectsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    component.projects = [...PORTFOLIO_PROJECTS];
    fixture.detectChanges();
  });

  it('should create the projects showcase component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all projects when selectedCategory is All', () => {
    component.selectedCategory = 'All';
    expect(component.filteredProjects.length).toBe(PORTFOLIO_PROJECTS.length);
  });

  it('should filter projects by category correctly', () => {
    component.filterByCategory('Mobile Development');
    expect(component.filteredProjects.length).toBeGreaterThan(0);
    expect(component.filteredProjects.every(p => p.category === 'Mobile Development')).toBeTrue();
  });

  it('should filter projects by search query across title, summary and tech stack', () => {
    component.selectedCategory = 'All';
    component.searchQuery = 'Flutter';
    const filtered = component.filteredProjects;
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.some(p => p.technologies.includes('Flutter'))).toBeTrue();
  });

  it('should emit projectSelected when openProject is called', () => {
    spyOn(component.projectSelected, 'emit');
    const project = PORTFOLIO_PROJECTS[0];
    component.openProject(project);
    expect(component.projectSelected.emit).toHaveBeenCalledWith(project);
  });

  it('should identify the featured project', () => {
    const featured = component.featuredProject;
    expect(featured).toBeDefined();
    expect(featured?.featured).toBeTrue();
    expect(featured?.id).toBe('erp-operations-suite');
  });
});
