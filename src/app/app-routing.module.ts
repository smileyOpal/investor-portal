import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Observable} from "rxjs";
import {LoginComponent} from './login/login.component';
import {FundListComponent} from './fund-list/fund-list.component';
import {PageNotfoundComponent} from "./page-notfound/page-notfound.component";
import {FundDashboardComponent} from "./fund-dashboard/fund-dashboard.component";
import {InvestorSummaryComponent} from "./investor-summary/investor-summary.component";

@Injectable({providedIn: 'root'})
export class FundDashboardResolve implements Resolve<number> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<number> | number {
    return route.params['id'] ? route.params['id'] : undefined;
  }
}

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'funds', component: FundListComponent},
  {path: 'dashboard/:id', component: FundDashboardComponent, resolve: {investorId: FundDashboardResolve}},
  {path: 'dashboard/:id/summary', component: InvestorSummaryComponent, resolve: {investorId: FundDashboardResolve}},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
