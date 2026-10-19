import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { SkillCategory } from '../../data/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() categories: SkillCategory[] = [];

  @ViewChild('skillsWrapper') skillsWrapper?: ElementRef<HTMLElement>;
  @ViewChild('skillsTrack') skillsTrack?: ElementRef<HTMLElement>;

  activeCategoryId = 'all';

  private ctx?: gsap.Context;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  selectCategory(id: string): void {
    this.activeCategoryId = id;
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }

  get displayedCategories(): SkillCategory[] {
    if (this.activeCategoryId === 'all') {
      return this.categories;
    }
    return this.categories.filter(c => c.id === this.activeCategoryId);
  }

  scrollTrack(direction: number): void {
    const wrapper = this.skillsWrapper?.nativeElement;
    if (wrapper) {
      wrapper.scrollBy({ left: direction * 400, behavior: 'smooth' });
    }
  }

  private initScrollAnimations(): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const containerEl = this.el?.nativeElement;
    if (!containerEl) {
      return;
    }

    this.ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Horizontal Scroll Gallery with ScrollTrigger Pinned Scrub
      mm.add('(min-width: 992px)', () => {
        const wrapper = this.skillsWrapper?.nativeElement;
        const track = this.skillsTrack?.nativeElement;

        if (wrapper && track) {
          const getScrollDistance = () => {
            const distance = track.scrollWidth - wrapper.clientWidth + 48;
            return distance > 0 ? distance : 0;
          };

          gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: 'none',
            scrollTrigger: {
              trigger: wrapper,
              pin: true,
              scrub: 0.8,
              start: 'top 15%',
              end: () => `+=${getScrollDistance() + 150}`,
              invalidateOnRefresh: true
            }
          });
        }

        // Stagger approach architecture pillar cards
        gsap.fromTo(
          '.approach-pillar-card',
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: '.approach-architecture-spotlight',
              start: 'top 85%',
              once: true
            }
          }
        );
      });

      // Mobile / Tablet: Smooth Native Scroll fallback with Staggered Entrance
      mm.add('(max-width: 991px)', () => {
        gsap.fromTo(
          '.domain-gallery-card',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: '.skills-horizontal-wrapper',
              start: 'top 90%',
              once: true
            }
          }
        );

        gsap.fromTo(
          '.approach-pillar-card',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: '.approach-architecture-spotlight',
              start: 'top 90%',
              once: true
            }
          }
        );
      });
    }, containerEl);
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
