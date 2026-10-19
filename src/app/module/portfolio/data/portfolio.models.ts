export interface Profile {
  name: string;
  primaryTitle: string;
  supportingTitle: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  availableForHire: boolean;
  yearsExperience: string;
  githubUrl: string;
  linkedinUrl: string;
  naukriUrl?: string;
  resumeUrl: string;
  avatarUrl?: string;
  highlights: ProfileHighlight[];
}

export interface ProfileHighlight {
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  level?: 'Advanced' | 'Proficient' | 'Working Knowledge' | 'Core';
  experience?: string;
  icon?: string;
  highlight?: boolean;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  employmentType: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export type ProjectContentType =
  | 'professional-experience'
  | 'personal-project'
  | 'prototype'
  | 'demo';

export type ProjectCategoryType =
  | 'Enterprise Applications'
  | 'Mobile Development'
  | 'Frontend Engineering'
  | 'Backend Development';

export interface ProjectWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategoryType;
  contentType: ProjectContentType;
  featured: boolean;
  summary: string;
  problem: string;
  solution: string;
  myRole: string;
  contributions: string[];
  features: string[];
  technologies: string[];
  thumbnail: string;
  workflowSteps?: ProjectWorkflowStep[];
  architectureNotes?: string[];
  challenges: string[];
  outcomes?: string[];
  demoUrl?: string;
  repoUrl?: string;
  isProprietary: boolean;
  disclaimer?: string;
}

export interface NavigationItem {
  label: string;
  fragment: string;
  number: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
