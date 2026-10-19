import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ExperienceItem } from '../../data/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface CodeDeliverable {
  task: string;
  impact: string;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  description: string;
  latency: string;
}

@Component({
  selector: 'app-portfolio-experience',
  templateUrl: './portfolio-experience.component.html',
  styleUrls: ['./portfolio-experience.component.scss']
})
export class PortfolioExperienceComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() experienceList: ExperienceItem[] = [];

  @ViewChild('experienceSection') experienceSection!: ElementRef<HTMLElement>;
  @ViewChild('ideWindow') ideWindow!: ElementRef<HTMLElement>;
  @ViewChild('editorContent') editorContent!: ElementRef<HTMLElement>;

  selectedExperienceId = 'qnq-healthcare';
  gutterLines: number[] = Array.from({ length: 32 }, (_, i) => i + 1);

  private ctx?: gsap.Context;

  private deliverablesMap: Record<string, CodeDeliverable[]> = {
    'qnq-healthcare': [
      { task: 'ERP & POS Core Architecture', impact: 'Scalable business modules across 35+ domains' },
      { task: 'Angular Enterprise Dashboard', impact: 'Modular structure, folder layout & shared component library' },
      { task: 'HTTP Interceptors & Auth Guards', impact: 'Automated JWT Bearer attachment & unified error handling' },
      { task: 'Shared UI Component Library', impact: 'Reusable reactive data tables, debounced search & dialogs' },
      { task: 'RESTful API Contracts', impact: 'Full collaboration on request/response models with backend engineers' },
      { task: 'Lazy Loading & Optimization', impact: 'Cut initial load time by ~35% and bundle size by ~20%' }
    ],
    'varnik-systems': [
      { task: 'Enterprise Web Applications', impact: 'Delivered 75+ responsive screens across enterprise platforms' },
      { task: 'eCommerce & Marketplace Platforms', impact: 'Supported 10,000+ active users and 500+ daily orders' },
      { task: 'Payment Gateway Integration', impact: 'Integrated Razorpay, secure authentication & product catalogs' },
      { task: 'Flutter Mobile Applications', impact: 'Cross-platform mobile apps with GetX via Google Play Store' },
      { task: 'Real-time Tracking & WebSockets', impact: 'Firebase Push Notifications, OAuth & location tracking' },
      { task: 'Crashlytics & Performance Tuning', impact: 'Improved crash-free session rate from ~93% to 99.5%' }
    ]
  };

  private metricsMap: Record<string, PerformanceMetric[]> = {
    'qnq-healthcare': [
      { label: 'live_modules', value: '35+', description: 'Active enterprise domains in production', latency: '0.12ms' },
      { label: 'load_time_delta', value: '-35%', description: 'Lazy loading & vendor bundle splitting', latency: '0.08ms' },
      { label: 'type_safety', value: '100%', description: 'Strict TypeScript interfaces & zero any leaks', latency: '0.04ms' }
    ],
    'varnik-systems': [
      { label: 'screens_delivered', value: '75+', description: 'Responsive enterprise & eCommerce screens', latency: '0.14ms' },
      { label: 'crash_free_rate', value: '99.5%', description: 'Firebase Crashlytics monitored stability', latency: '0.09ms' },
      { label: 'active_scale', value: '10k+', description: 'Daily active platform users supported', latency: '0.05ms' }
    ]
  };

  constructor() {}

  ngOnInit(): void {
    if (this.experienceList.length > 0 && !this.selectedExperienceId) {
      this.selectedExperienceId = this.experienceList[0].id;
    }
  }

  ngAfterViewInit(): void {
    this.initIDEAnimations();
  }

  get activeItem(): ExperienceItem {
    const item = this.experienceList.find(e => e.id === this.selectedExperienceId);
    return item || this.experienceList[0] || ({} as ExperienceItem);
  }

  get activeDeliverables(): CodeDeliverable[] {
    return this.deliverablesMap[this.selectedExperienceId] || [];
  }

  get activeMetrics(): PerformanceMetric[] {
    return this.metricsMap[this.selectedExperienceId] || [];
  }

  getFileTabName(id: string): string {
    if (id === 'qnq-healthcare') return 'QNQ_Healthcare.ts';
    if (id === 'varnik-systems') return 'Varnik_Systems.ts';
    return `${id}.ts`;
  }

  selectExperience(id: string): void {
    if (this.selectedExperienceId === id) return;
    this.selectedExperienceId = id;

    const contentEl = this.editorContent?.nativeElement;
    if (contentEl) {
      gsap.fromTo(
        contentEl,
        { opacity: 0.35, x: 8 },
        { opacity: 1, x: 0, duration: 0.32, ease: 'power2.out' }
      );
    }
  }

  private initIDEAnimations(): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const containerEl = this.experienceSection?.nativeElement;
    if (!containerEl) {
      return;
    }

    this.ctx = gsap.context(() => {
      // 1. Reveal IDE window on scroll
      gsap.fromTo(
        '.ide-window-frame',
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.ide-window-frame',
            start: 'top 85%',
            once: true
          }
        }
      );

      // 2. Stagger code blocks inside editor
      gsap.fromTo(
        ['.code-comment-block', '.code-deliverable-item', '.debugger-console-panel'],
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.ide-editor-container',
            start: 'top 85%',
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
