import {Component, OnInit} from '@angular/core';
import {FundDetail, Investor} from "../fund-list/investor";
import {INVESTORS} from "../fund-list/mock-funds";

@Component({
  selector: 'app-fund-performance',
  templateUrl: './fund-performance.component.html',
  styleUrls: ['./fund-performance.component.scss'],
  inputs: ['fundName: fund-name', 'investorId: investor-id']
})
export class FundPerformanceComponent implements OnInit {
  fundName: string | undefined;
  investorId: string | undefined;
  investor: Investor | undefined;
  fundDetail: FundDetail | undefined;

  constructor() {
  }

  ngOnInit(): void {
    if (this.investorId) {
      this.investor = INVESTORS.find(f => f.id == Number(this.investorId));

      if (this.investor) {
        this.fundDetail = this.investor.funds.find(p => p.name == this.fundName)
      }
    }
  }

}
