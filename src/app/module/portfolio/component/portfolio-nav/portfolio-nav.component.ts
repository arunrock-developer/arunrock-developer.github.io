import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { NavigationItem, Profile } from '../../data/portfolio.models';
import { PortfolioService } from '../../service/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-nav',
  templateUrl: './portfolio-nav.component.html',
  styleUrls: ['./portfolio-nav.component.scss']
})
export class PortfolioNavComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() currentTheme: 'dark' | 'light' = 'dark';
  @Output() themeToggled = new EventEmitter<'dark' | 'light'>();
  @Output() sectionNavigate = new EventEmitter<string>();

  @ViewChild('navTrack') navTrack?: ElementRef<HTMLElement>;

  navItems: NavigationItem[] = [];
  profile!: Profile;
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'hero';

  // Smooth Sliding Pill Geometry
  pillStyle: { [key: string]: string } = {
    transform: 'translate3d(0, 0, 0)',
    width: '0px',
    height: '0px'
  };
  pillVisible = false;

  private isProgrammaticScroll = false;
  private programmaticScrollTimer: any = null;
  private scrollRafId: number | null = null;
  private sub = new Subscription();

  constructor(
    private portfolioService: PortfolioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.portfolioService.getNavigationItems().subscribe(items => {
        this.navItems = items;
        setTimeout(() => {
          this.updatePillPosition();
        }, 50);
      })
    );

    this.sub.add(
      this.portfolioService.getProfile().subscribe(p => {
        this.profile = p;
      })
    );

    this.checkScroll();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updatePillPosition();
    }, 100);

    if (typeof document !== 'undefined' && 'fonts' in document) {
      (document as any).fonts.ready.then(() => {
        this.updatePillPosition();
      });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.programmaticScrollTimer) {
      clearTimeout(this.programmaticScrollTimer);
    }
    if (this.scrollRafId !== null) {
      cancelAnimationFrame(this.scrollRafId);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
    if (this.isProgrammaticScroll) {
      return;
    }
    if (this.scrollRafId !== null) {
      cancelAnimationFrame(this.scrollRafId);
    }
    this.scrollRafId = requestAnimationFrame(() => {
      this.detectActiveSection();
    });
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.updatePillPosition();
  }

  private checkScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  private detectActiveSection(): void {
    if (!this.navItems || this.navItems.length === 0) {
      return;
    }

    // When scrolled to the bottom of page, highlight the last item (Contact)
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);
    if (isAtBottom) {
      const lastSection = this.navItems[this.navItems.length - 1].fragment;
      if (this.activeSection !== lastSection) {
        this.activeSection = lastSection;
        this.updatePillPosition();
      }
      return;
    }

    const threshold = 180;
    let foundSection = this.navItems[0]?.fragment || 'hero';

    for (const item of this.navItems) {
      const element = document.getElementById(item.fragment);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          foundSection = item.fragment;
          break;
        }
      }
    }

    if (foundSection && this.activeSection !== foundSection) {
      this.activeSection = foundSection;
      this.updatePillPosition();
    }
  }

  updatePillPosition(): void {
    if (!this.navTrack) {
      return;
    }

    const trackEl = this.navTrack.nativeElement;
    const activeEl = document.getElementById('nav-link-' + this.activeSection);

    if (trackEl && activeEl) {
      const trackRect = trackEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      const left = activeRect.left - trackRect.left;
      const top = activeRect.top - trackRect.top;
      const width = activeRect.width;
      const height = activeRect.height;

      this.pillStyle = {
        transform: `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`,
        width: `${Math.round(width)}px`,
        height: `${Math.round(height)}px`
      };
      this.pillVisible = true;
      this.cdr.markForCheck();
    }
  }

  scrollToSection(fragment: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.activeSection = fragment;
    this.updatePillPosition();
    this.mobileMenuOpen = false;
    this.sectionNavigate.emit(fragment);

    // Mute scroll listener during smooth scrolling to prevent active item jitter
    this.isProgrammaticScroll = true;
    if (this.programmaticScrollTimer) {
      clearTimeout(this.programmaticScrollTimer);
    }
    this.programmaticScrollTimer = setTimeout(() => {
      this.isProgrammaticScroll = false;
    }, 850);

    const target = document.getElementById(fragment);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleTheme(): void {
    const nextTheme = this.portfolioService.toggleTheme();
    this.themeToggled.emit(nextTheme);
    setTimeout(() => {
      this.updatePillPosition();
    }, 50);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}
