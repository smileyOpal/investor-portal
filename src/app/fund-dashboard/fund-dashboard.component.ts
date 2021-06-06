import {Component, OnInit} from '@angular/core';
import {Investor} from "../fund-list/investor";
import {INVESTORS} from "../fund-list/mock-funds";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fund-dashboard',
  templateUrl: './fund-dashboard.component.html',
  styleUrls: ['./fund-dashboard.component.scss'],
  inputs: ['id']
})
export class FundDashboardComponent implements OnInit {
  fund: Investor | undefined
  toggleSidebar = true
  subView = 'summary'

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({fundId}) => {
      this.fund = INVESTORS.find(f => f.id == fundId);

      if (!this.fund) {
        this.router.navigate(['/notfound']);
      }
    });
  }

}
