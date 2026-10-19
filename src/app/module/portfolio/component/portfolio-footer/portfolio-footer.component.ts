import { Component, OnInit, Input } from '@angular/core';
import { Profile, NavigationItem } from '../../data/portfolio.models';
import gsap from 'gsap';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './portfolio-footer.component.html',
  styleUrls: ['./portfolio-footer.component.scss']
})
export class PortfolioFooterComponent implements OnInit {
  @Input() profile!: Profile;
  @Input() navItems: NavigationItem[] = [];

  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(fragment: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
