import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Project, ProjectCategoryType } from '../../data/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() projects: Project[] = [];
  @Output() projectSelected = new EventEmitter<Project>();

  selectedCategory = 'All';
  searchQuery = '';

  categories: string[] = [
    'All',
    'Enterprise Applications',
    'Mobile Development',
    'Frontend Engineering',
    'Backend Development'
  ];

  private ctx?: gsap.Context;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }

  onSearchChange(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }

  clearSearch(): void {
    this.searchQuery = '';
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }

  get filteredProjects(): Project[] {
    let result = [...this.projects];

    if (this.selectedCategory !== 'All') {
      result = result.filter(
        p => p.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }

    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }

  get featuredProject(): Project | undefined {
    return this.filteredProjects.find(p => p.featured);
  }

  get supportingProjects(): Project[] {
    const featured = this.featuredProject;
    if (featured) {
      return this.filteredProjects.filter(p => p.id !== featured.id);
    }
    return this.filteredProjects;
  }

  openProject(project: Project): void {
    this.projectSelected.emit(project);
  }

  private initScrollAnimations(): void {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // On mobile or reduced motion: keep all elements statically visible
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const containerEl = this.el?.nativeElement;
    if (!containerEl) {
      return;
    }

    this.ctx = gsap.context(() => {
      // Reveal featured card if present
      gsap.fromTo('.hero-featured-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.hero-featured-card',
            start: 'top 95%',
            once: true
          }
        }
      );

      // Stagger supporting cards
      gsap.fromTo('.project-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.projects-gallery',
            start: 'top 95%',
            once: true
          }
        }
      );
    }, containerEl);
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
