import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './components/cases/cases.component';
import { NewCaseComponent } from '../new-case/new-case.component';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
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
