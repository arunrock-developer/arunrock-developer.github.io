import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { Profile } from '../../data/portfolio.models';
import gsap from 'gsap';

@Component({
  selector: 'app-portfolio-hero',
  templateUrl: './portfolio-hero.component.html',
  styleUrls: ['./portfolio-hero.component.scss']
})
export class PortfolioHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() profile!: Profile;
  @Output() ctaClicked = new EventEmitter<string>();

  @ViewChild('heroContainer') heroContainer!: ElementRef<HTMLElement>;
  @ViewChild('solarStage') solarStage!: ElementRef<HTMLElement>;

  private ctx?: gsap.Context;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSolarSystemAnimations();
  }

  onCtaClick(target: string, event: Event): void {
    event.preventDefault();
    this.ctaClicked.emit(target);

    const targetEl = document.getElementById(target);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onMouseMove(event: MouseEvent): void {
    const stage = this.solarStage?.nativeElement;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 12;
    const rotY = (x / (rect.width / 2)) * 12;

    gsap.to('.solar-system-viewport', {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });

    gsap.to('.solar-sun-avatar-container', {
      x: x * 0.05,
      y: y * 0.05,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  }

  onMouseLeave(): void {
    gsap.to('.solar-system-viewport', {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    gsap.to('.solar-sun-avatar-container', {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  private initSolarSystemAnimations(): void {
    const containerEl = this.heroContainer?.nativeElement;
    if (!containerEl) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.ctx = gsap.context(() => {
      // 1. Initial Hero Entrance Animation
      const tl = gsap.timeline();

      tl.fromTo(
        '.hero-content-col',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
      )
        .fromTo(
          '.solar-sun-avatar-container',
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.5)' },
          '-=0.4'
        )
        .fromTo(
          '.solar-orbit',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        );

      if (prefersReducedMotion) {
        return;
      }

      // 2. Orbit 1: Inner Orbit (Clockwise ~22s) & Upright Counter-Rotation
      gsap.to('.orbit-1', {
        rotation: 360,
        duration: 22,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%'
      });

      gsap.to('.counter-rotate-1', {
        rotation: -360,
        duration: 22,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%'
      });

      // 3. Orbit 2: Middle Orbit (Counter-Clockwise ~34s) & Upright Counter-Rotation
      gsap.to('.orbit-2', {
        rotation: -360,
        duration: 34,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%'
      });

      gsap.to('.counter-rotate-2', {
        rotation: 360,
        duration: 34,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%'
      });

      // 4. Orbit 3: Outer Orbit (Clockwise ~50s) & Upright Counter-Rotation
      gsap.to('.orbit-3', {
        rotation: 360,
        duration: 50,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%'
      });

      gsap.to('.counter-rotate-3', {
        rotation: -360,
        duration: 50,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%'
      });
    }, containerEl);
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
