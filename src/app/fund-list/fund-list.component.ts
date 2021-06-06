import {Component, OnInit} from '@angular/core';
import {INVESTORS} from './mock-funds'
import {Investor} from "./investor";

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  funds:Investor[] = INVESTORS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
