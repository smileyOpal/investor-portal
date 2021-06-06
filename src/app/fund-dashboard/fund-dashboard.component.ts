import {Component, OnInit} from '@angular/core';
import {Fund} from "../fund-list/fund";
import {FUNDS} from "../fund-list/mock-funds";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fund-dashboard',
  templateUrl: './fund-dashboard.component.html',
  styleUrls: ['./fund-dashboard.component.scss'],
  inputs: ['id']
})
export class FundDashboardComponent implements OnInit {
  fund: Fund | undefined
  toggleSidebar = true

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({fundId}) => {
      this.fund = FUNDS.find(f => f.id == fundId);

      if (!this.fund) {
        this.router.navigate(['/notfound']);
      }
    });
  }

}
