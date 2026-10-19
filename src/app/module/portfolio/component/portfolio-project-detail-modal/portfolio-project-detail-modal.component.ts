import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../../data/portfolio.models';

@Component({
  selector: 'app-portfolio-project-detail-modal',
  templateUrl: './portfolio-project-detail-modal.component.html',
  styleUrls: ['./portfolio-project-detail-modal.component.scss']
})
export class PortfolioProjectDetailModalComponent implements OnChanges {
  @Input() project?: Project | null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeHandler(event: KeyboardEvent | any): void {
    if (this.isOpen) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.close.emit();
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop-custom')) {
      this.closeModal();
    }
  }
}
