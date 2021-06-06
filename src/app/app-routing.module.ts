import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FundListComponent} from './fund-list/fund-list.component';
import {PageNotfoundComponent} from "./page-notfound/page-notfound.component";
import {FundDashboardComponent} from "./fund-dashboard/fund-dashboard.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'funds', component: FundListComponent},
  {path: 'dashboard/:id', component: FundDashboardComponent, },
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
