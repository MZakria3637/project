import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { NewCaseComponent } from './components/new-case/new-case.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CasesComponent,
    ActivitiesComponent,
    NewCaseComponent,
  ],
  imports: [
    CommonModule,
    CasesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CasesModule { }
