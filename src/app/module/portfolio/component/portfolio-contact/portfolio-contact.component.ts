import { Component, OnInit, Input, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Profile } from '../../data/portfolio.models';
import { PortfolioService } from '../../service/portfolio.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() profile!: Profile;

  contactForm!: UntypedFormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = '';

  private ctx?: gsap.Context;

  constructor(
    private fb: UntypedFormBuilder,
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
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
      // Stagger contact channel cards
      gsap.fromTo('.contact-channel-card',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.contact-info-panel',
            start: 'top 95%',
            once: true
          }
        }
      );

      // Reveal contact form panel
      gsap.fromTo('.contact-form-panel',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.contact-form-panel',
            start: 'top 95%',
            once: true
          }
        }
      );
    }, containerEl);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const formValue = this.contactForm.value;

    this.portfolioService.submitContactForm(formValue).subscribe({
      next: res => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = res.message;
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitSuccess = false;
        this.submitMessage = 'An unexpected error occurred. Please reach out directly via aktechsaviour@gmail.com.';
      }
    });
  }

  resetStatus(): void {
    this.submitSuccess = false;
    this.submitMessage = '';
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
