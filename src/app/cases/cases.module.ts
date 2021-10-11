import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { ActivitiesComponent } from './components/activities/activities.component';


@NgModule({
  declarations: [
    CasesComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }
