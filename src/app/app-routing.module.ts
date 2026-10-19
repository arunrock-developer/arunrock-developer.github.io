import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./module/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  { path: 'template', component: TemplateComponent },
  { path: 'k', component: HomeComponent },
  // Fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
