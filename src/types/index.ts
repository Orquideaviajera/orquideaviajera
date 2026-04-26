/**
 * Tipos compartidos del dominio de Orquídea Viajera
 */

export interface ServiceFeature {
  readonly text: string;
}

export interface ServiceCardData {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly features: ReadonlyArray<string>;
}

export interface SupportItem {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

export interface ProcessStep {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

export interface ProblemItem {
  readonly title: string;
  readonly description: string;
}

export interface SolutionItem {
  readonly title: string;
  readonly description: string;
  readonly icon: 'shield' | 'compass' | 'wifi';
}

export interface DifferentiatorItem {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: ReadonlyArray<FooterLink>;
}
