import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioService } from '../service/portfolio.service';
import { PORTFOLIO_PROJECTS } from '../data/portfolio.mock';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;
  let portfolioService: PortfolioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PortfolioPageComponent],
      providers: [PortfolioService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioPageComponent);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(PortfolioService);
    fixture.detectChanges();
  });

  it('should create the portfolio page component', () => {
    expect(component).toBeTruthy();
  });

  it('should load profile, skills, experience, and projects data on init', () => {
    expect(component.profile).toBeDefined();
    expect(component.profile.name).toContain('Arun Kumar');
    expect(component.skillCategories.length).toBeGreaterThan(0);
    expect(component.experienceList.length).toBeGreaterThan(0);
    expect(component.projectsList.length).toBeGreaterThan(0);
  });

  it('should open and close project detail modal correctly', () => {
    const mockProject = PORTFOLIO_PROJECTS[0];
    expect(component.isDetailModalOpen).toBeFalse();
    expect(component.selectedProject).toBeNull();

    component.openProjectModal(mockProject);
    expect(component.isDetailModalOpen).toBeTrue();
    expect(component.selectedProject).toBe(mockProject);

    component.closeProjectModal();
    expect(component.isDetailModalOpen).toBeFalse();
    expect(component.selectedProject).toBeNull();
  });

  it('should update currentTheme when onThemeToggled is called', () => {
    component.onThemeToggled('light');
    expect(component.currentTheme).toBe('light');
    component.onThemeToggled('dark');
    expect(component.currentTheme).toBe('dark');
  });
});
