import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CasesComponent } from './components/cases/cases.component';
import { NewCaseComponent } from './components/new-case/new-case.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
  },
  {
    path: 'activities/:date',
    component: ActivitiesComponent
  },
  {
    path: 'new',
    component: NewCaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
