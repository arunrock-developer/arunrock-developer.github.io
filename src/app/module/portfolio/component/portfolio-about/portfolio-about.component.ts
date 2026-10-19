import { Component, OnInit, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Profile } from '../../data/portfolio.models';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.scss']
})
export class PortfolioAboutComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() profile!: Profile;

  private ctx?: gsap.Context;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
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
      // Reveal narrative and fast facts
      gsap.fromTo('.lead-bio, .bio-body',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.about-narrative',
            start: 'top 95%',
            once: true
          }
        }
      );

      gsap.fromTo('.fact-item',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.about-facts-grid',
            start: 'top 95%',
            once: true
          }
        }
      );

      // Stagger right column metric cards
      gsap.fromTo('.about-metric-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.about-cards-matrix',
            start: 'top 95%',
            once: true
          }
        }
      );

      // Reveal architecture focus card
      gsap.fromTo('.architecture-focus-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.architecture-focus-card',
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
