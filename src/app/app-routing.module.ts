import { ContactBookComponent } from './contact-book/contact-book.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ClientsComponent } from './clients/clients.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { ReportsComponent } from './reports/reports.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    component: MainContentComponent
  },
  {
    path: '',
    redirectTo: "/main",
    pathMatch:'full'
  }
  , {
    path: 'reports',
    component:ReportsComponent
  },
  {
    path: 'new-case',
    component:NewCaseComponent
  }
  , {
    path: 'client',
    component:ClientsComponent
  },
  {
    path: "account",
    component:AccountsComponent
  },
  {
    path: "contact-book",
    component: ContactBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
