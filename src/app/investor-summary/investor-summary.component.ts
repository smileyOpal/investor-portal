import {Component, OnInit} from '@angular/core';
import {Investor, FundEntity} from "../fund-list/investor";
import {INVESTORS} from "../fund-list/mock-funds";

@Component({
  selector: 'app-investor-summary',
  templateUrl: './investor-summary.component.html',
  styleUrls: ['./investor-summary.component.scss'],
  inputs: ['fundId: fund-id']
})
export class InvestorSummaryComponent implements OnInit {
  selectCurrency: string = 'USD';
  selectPeriod: string = 'Q1 2021';
  aggregatedStartPeriod: string = '2020-12-31';
  aggregatedEndPeriod: string = '2021-03-31';
  fundId: string | undefined;
  fundDetail: Investor | undefined;
  fundEntries: any[] = [];
  aggregatedEntries: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.fundId) {
      this.fundDetail = INVESTORS.find(f => f.id == Number(this.fundId));
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

        this.updateAggregatedData();
      }
    }
  }

  updateAggregatedPeriod(): void {
    if (this.selectPeriod == 'Q1 2021') {
      this.aggregatedStartPeriod = '2020-12-31';
      this.aggregatedEndPeriod = '2021-03-31';
    } else if (this.selectPeriod == 'Q2 2021') {
      this.aggregatedStartPeriod = '2021-03-31';
      this.aggregatedEndPeriod = '2021-06-30';
    } else if (this.selectPeriod == 'Q3 2021') {
      this.aggregatedStartPeriod = '2021-06-30';
      this.aggregatedEndPeriod = '2021-09-30';
    } else if (this.selectPeriod == 'Q4 2021') {
      this.aggregatedStartPeriod = '2021-09-30';
      this.aggregatedEndPeriod = '2021-12-31';
    }

    this.updateAggregatedData();
  }


  private aggregatedFields = ['Commitment', 'Contribution', 'Distribution', 'NAV', 'Total invested', 'Total value', 'DPI', 'RVPI', 'TVPI'];

  updateAggregatedData(): void {
    if (this.fundDetail) {
      let aggregatedMapEntries = new Map<string, any>();
      for (const field of this.aggregatedFields) {
        for (const data of this.fundDetail.aggregatedData) {
          if (data.type == field) {
            let entry = aggregatedMapEntries.get(data.type)
            if (!entry) {
              entry = {
                type: field
              }
            }
            if (data.period == this.aggregatedStartPeriod) {
              entry.previous = data.amount;

            } else if (data.period == this.aggregatedEndPeriod) {
              entry.current = data.amount;
            }

            if (entry.previous && entry.current) {
              entry.diff = entry.current - entry.previous;
            }
            aggregatedMapEntries.set(field, entry);
          }
        }
      }

      if (aggregatedMapEntries.size > 0) {
        for (const field of this.aggregatedFields) {
          let entry = aggregatedMapEntries.get(field)
          if (field == 'DPI' || field == 'RVPI' || field == 'TVPI') {
            this.aggregatedEntries.push({
              type: field,
              previous: entry.previous.toFixed(2) + 'x',
              current: entry.current.toFixed(2) + 'x',
              diff: (entry.diff >= 0) ? entry.diff.toFixed(2) + 'x' : '(' + entry.diff.toFixed(2) * -1 + ')x',
            })
          } else {
            this.aggregatedEntries.push({
              type: field,
              previous: '$' + entry.previous.toFixed(2) + 'm',
              current: '$' + entry.current.toFixed(2) + 'm',
              diff: (entry.diff >= 0) ? '$' + entry.diff.toFixed(2) + 'm' : '($' + entry.diff.toFixed(2) * -1 + ')m',
            })
          }
        }
      }
    }
  }

}
