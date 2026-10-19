import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioPageComponent } from './page/portfolio-page.component';
import { PortfolioNavComponent } from './component/portfolio-nav/portfolio-nav.component';
import { PortfolioHeroComponent } from './component/portfolio-hero/portfolio-hero.component';
import { PortfolioAboutComponent } from './component/portfolio-about/portfolio-about.component';
import { PortfolioSkillsComponent } from './component/portfolio-skills/portfolio-skills.component';
import { PortfolioExperienceComponent } from './component/portfolio-experience/portfolio-experience.component';
import { PortfolioProjectsComponent } from './component/portfolio-projects/portfolio-projects.component';
import { PortfolioProjectDetailModalComponent } from './component/portfolio-project-detail-modal/portfolio-project-detail-modal.component';
import { PortfolioContactComponent } from './component/portfolio-contact/portfolio-contact.component';
import { PortfolioFooterComponent } from './component/portfolio-footer/portfolio-footer.component';
import { ProjectFilterPipe } from './pipe/project-filter.pipe';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    PortfolioNavComponent,
    PortfolioHeroComponent,
    PortfolioAboutComponent,
    PortfolioSkillsComponent,
    PortfolioExperienceComponent,
    PortfolioProjectsComponent,
    PortfolioProjectDetailModalComponent,
    PortfolioContactComponent,
    PortfolioFooterComponent,
    ProjectFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PortfolioRoutingModule
  ],
  exports: [
    PortfolioPageComponent
  ]
})
export class PortfolioModule {}
