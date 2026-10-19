import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  Profile,
  NavigationItem,
  SkillCategory,
  ExperienceItem,
  Project
} from '../data/portfolio.models';
import { PortfolioService } from '../service/portfolio.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit, AfterViewInit, OnDestroy {
  profile!: Profile;
  navItems: NavigationItem[] = [];
  skillCategories: SkillCategory[] = [];
  experienceList: ExperienceItem[] = [];
  projectsList: Project[] = [];

  currentTheme: 'dark' | 'light' = 'dark';
  selectedProject: Project | null = null;
  isDetailModalOpen = false;

  @ViewChild('portfolioPageContainer') portfolioPageContainer!: ElementRef;

  private sub = new Subscription();
  private gsapCtx?: gsap.Context;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.portfolioService.getProfile().subscribe(p => (this.profile = p))
    );

    this.sub.add(
      this.portfolioService.getNavigationItems().subscribe(items => (this.navItems = items))
    );

    this.sub.add(
      this.portfolioService.getSkills().subscribe(skills => (this.skillCategories = skills))
    );

    this.sub.add(
      this.portfolioService.getExperience().subscribe(exp => (this.experienceList = exp))
    );

    this.sub.add(
      this.portfolioService.getProjects().subscribe(projects => (this.projectsList = projects))
    );

    this.sub.add(
      this.portfolioService.theme$.subscribe(t => (this.currentTheme = t))
    );

    // Support fragment scrolling on initial landing
    this.sub.add(
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.gsapCtx) {
      this.gsapCtx.revert();
    }
    // Clean up any stray ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private initScrollAnimations(): void {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const containerEl = this.portfolioPageContainer?.nativeElement;
    if (!containerEl) {
      return;
    }

    this.gsapCtx = gsap.context(() => {
      // Reveal section headers smoothly on scroll for desktop only
      const sectionHeaders = gsap.utils.toArray<HTMLElement>('.pf-section-eyebrow, .pf-section-title');
      sectionHeaders.forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              once: true
            }
          }
        );
      });

      // Subtle parallax on abstract decorative glows
      const glowEl = document.querySelector('.ambient-glow-top-right');
      const heroEl = document.getElementById('hero');
      if (glowEl && heroEl) {
        gsap.to(glowEl, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    }, containerEl);
  }

  onThemeToggled(theme: 'dark' | 'light'): void {
    this.currentTheme = theme;
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.isDetailModalOpen = true;
  }

  closeProjectModal(): void {
    this.isDetailModalOpen = false;
    this.selectedProject = null;
  }
}
