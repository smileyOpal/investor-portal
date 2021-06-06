import {Component, OnInit} from '@angular/core';
import {Fund, FundEntity} from "../fund-list/fund";
import {FUNDS} from "../fund-list/mock-funds";

@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.scss'],
  inputs: ['fundId: fund-id']
})
export class InvestorSummaryComponent implements OnInit {
  selectCurrency: string = 'USD';
  selectPeriod: string = 'Q1 2021';
  fundId: string | undefined;
  fundDetail: Fund | undefined;
  fundEntries: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.fundId) {
      this.fundDetail = FUNDS.find(f => f.id == Number(this.fundId));
      if (this.fundDetail) {
        for (const module of this.fundDetail.modules) {
          for (const entity of module.entities) {
            this.fundEntries.push({
              fund: module.name,
              entity: entity.entity,
              commitment: entity.commitment.toFixed(1),
              invested: entity.invested.toFixed(1),
              realized: entity.realized.toFixed(1),
              fairValue: entity.fairValue.toFixed(1),
              grossMoc: entity.grossMoc.toFixed(1),
              netIrr: entity.netIrr.toFixed(1)
            });
          }
        }
      }
    }
  }

}
