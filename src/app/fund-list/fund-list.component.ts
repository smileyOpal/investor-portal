import {Component, OnInit} from '@angular/core';
import {FUNDS} from './mock-funds'
import {Fund} from "./fund";

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  funds = FUNDS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
