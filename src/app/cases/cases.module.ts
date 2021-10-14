import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    NgbDropdownModule,
    ReactiveFormsModule,
  ],
})
export class CasesModule {}
