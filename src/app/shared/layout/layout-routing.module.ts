import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';

const LayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'calendar',
    loadChildren: () => import('src/app/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'cases',
    loadChildren: () => import('src/app/cases/cases.module').then(m => m.CasesModule)
  }
]

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: LayoutRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
