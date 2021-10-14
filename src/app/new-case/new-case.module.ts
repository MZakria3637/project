import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCaseRoutingModule } from './new-case-routing.module';
import { NewCaseComponent } from './new-case.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { StepsComponent } from './steps/steps.component';


@NgModule({
  declarations: [
    NewCaseComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    NewCaseRoutingModule,
    NgbDropdownModule,
    
  ]
})
export class NewCaseModule { }