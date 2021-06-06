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
  dealAllocationDataChart = {
    labels: ['Energy', 'Consumer Durables & Apparel', 'Customer Services', 'Insurance', 'Material', 'Software & Services', 'Technology Hardware & Equipment', 'Health Care Equipment & Services'],
    datasets: [
      {
        label: "My Stats Chart",
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12', '#d527db', '#d527db', '#db8127']
      }
    ]
  };
  investmentChartOptions = {
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 400
      }
    }
  }
  investmentChartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        label: "Cumulative investment cost",
        data: [0, 0, 50, 70, 210, 300, 300],
        fill: false,
        borderColor: ['#1abc9c'],
        tension: 0.1
      },
      {
        label: "Cumulative total value",
        data: [0, 0, 50, 70, 210, 230, 230],
        fill: false,
        borderColor: ['#db8127'],
        tension: 0.1
      }
    ]
  }

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
