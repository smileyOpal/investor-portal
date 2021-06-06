import {Investor} from "./investor";

export const INVESTORS: Investor[] = [
  {
    id: 1,
    abbrev: "GGV",
    name: "GGV Capital Limited", logoUrl: "assets/ggv_logo.png", summaryData: [
      {
        type: "Reporting", name: "USD Fund V", description: "USD Fund V (Q1 2021)", entities: [
          {
            entity: 'Asia Alternative I',
            commitment: 1.0,
            invested: 1.0,
            realized: 1.0,
            fairValue: 1.0,
            grossMoc: 2.0,
            netIrr: 20
          }
        ]
      },
      {
        type: "Reporting", name: "USD Fund VI", description: "USD Fund VI (Q1 2021)", entities: [
          {
            entity: 'Asia Alternative Asia',
            commitment: 1.0,
            invested: 1.0,
            realized: 1.0,
            fairValue: 1.0,
            grossMoc: 2.0,
            netIrr: 20
          },
          {
            entity: 'Asia Alternative I',
            commitment: 1.0,
            invested: 1.0,
            realized: 1.0,
            fairValue: 1.0,
            grossMoc: 2.0,
            netIrr: 20
          }
        ]
      }
    ],
    aggregatedData:[
      {period:'2020-12-31',type:'Commitment', amount: 8591},
      {period:'2020-12-31',type:'Contribution', amount: 1643.68},
      {period:'2020-12-31',type:'Distribution', amount: 115},
      {period:'2020-12-31',type:'NAV', amount: 1992.44},
      {period:'2020-12-31',type:'Total invested', amount: 958.29},
      {period:'2020-12-31',type:'Total value', amount: 2107.44},
      {period:'2020-12-31',type:'DPI', amount: 0.07},
      {period:'2020-12-31',type:'RVPI', amount: 1.21},
      {period:'2020-12-31',type:'TVPI', amount: 1.28},

      {period:'2021-03-31',type:'Commitment', amount: 8590.25},
      {period:'2021-03-31',type:'Contribution', amount: 1643.16},
      {period:'2021-03-31',type:'Distribution', amount: 115},
      {period:'2021-03-31',type:'NAV', amount: 1997.40},
      {period:'2021-03-31',type:'Total invested', amount: 958.21},
      {period:'2021-03-31',type:'Total value', amount: 2112.40},
      {period:'2021-03-31',type:'DPI', amount: 0.07},
      {period:'2021-03-31',type:'RVPI', amount: 1.22},
      {period:'2021-03-31',type:'TVPI', amount: 1.29}
    ]
  },
  {
    id: 2,
    abbrev: "SV",
    name: "Sequoia Venture Limited", logoUrl: "assets/sv_logo.png", summaryData: [
      {type: "Fundraising", name: "USD Fund VI", description: "USD Fund VI (First closing)", entities: []}
    ],
    aggregatedData:[]
  }
];

