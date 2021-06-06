import {Fund} from "./fund";

export const FUNDS: Fund[] = [
  {
    id: 1,
    name: "GGV Capital Limited", logoUrl: "assets/ggv_logo.png", modules: [
      {type: "Reporting", name: "USD Fund V", description: "USD Fund V (Q1 2021)", entities:[
          {entity: 'Asia Alternative I', commitment: 1.0, invested: 1.0, realized: 1.0, fairValue: 1.0, grossMoc: 2.0, netIrr: 20}
        ]},
      {type: "Reporting", name: "USD Fund VI", description: "USD Fund VI (Q1 2021)", entities:[
          {entity: 'Asia Alternative Asia', commitment: 1.0, invested: 1.0, realized: 1.0, fairValue: 1.0, grossMoc: 2.0, netIrr: 20},
          {entity: 'Asia Alternative I', commitment: 1.0, invested: 1.0, realized: 1.0, fairValue: 1.0, grossMoc: 2.0, netIrr: 20}
        ]}
    ]
  },
  {
    id: 2,
    name: "Sequoia Venture Limited", logoUrl: "assets/sv_logo.png", modules: [
      {type: "Fundraising", name: "USD Fund VI", description: "USD Fund VI (First closing)", entities:[]}
    ]
  }
];
