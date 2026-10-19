import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PortfolioContactComponent } from './portfolio-contact.component';
import { PortfolioService } from '../../service/portfolio.service';
import { PORTFOLIO_PROFILE } from '../../data/portfolio.mock';

describe('PortfolioContactComponent', () => {
  let component: PortfolioContactComponent;
  let fixture: ComponentFixture<PortfolioContactComponent>;
  let portfolioService: PortfolioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PortfolioContactComponent],
      providers: [UntypedFormBuilder, PortfolioService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioContactComponent);
    component = fixture.componentInstance;
    component.profile = PORTFOLIO_PROFILE;
    portfolioService = TestBed.inject(PortfolioService);
    fixture.detectChanges();
  });

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize contact form with empty fields', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('email')?.value).toBe('');
    expect(component.contactForm.get('subject')?.value).toBe('');
    expect(component.contactForm.get('message')?.value).toBe('');
  });

  it('should be invalid when form is empty', () => {
    expect(component.contactForm.valid).toBeFalse();
  });

  it('should validate email format properly', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('not-an-email');
    expect(emailControl?.valid).toBeFalse();

    emailControl?.setValue('developer@example.com');
    expect(emailControl?.valid).toBeTrue();
  });

  it('should submit valid form and display feedback confirmation', () => {
    component.contactForm.setValue({
      name: 'Hiring Manager',
      email: 'recruiter@enterprise.com',
      subject: 'Angular Senior Role',
      message: 'We are interested in discussing your Angular and enterprise ERP experience.'
    });

    expect(component.contactForm.valid).toBeTrue();
    component.onSubmit();

    expect(component.submitSuccess).toBeTrue();
    expect(component.submitMessage).toContain('Hiring Manager');
  });
});
