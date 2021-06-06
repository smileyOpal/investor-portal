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
  investor: Investor | undefined
  toggleSidebar = true
  subView = 'summary'

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({investorId}) => {
      this.investor = INVESTORS.find(f => f.id == investorId);

      if (!this.investor) {
        this.router.navigate(['/notfound']);
      }
    });
  }

}
