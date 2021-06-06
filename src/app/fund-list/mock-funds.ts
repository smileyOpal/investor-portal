import {Fund} from "./fund";

export const FUNDS: Fund[] = [
  {
    id: 1,
    name: "GGV Capital Limited", logoUrl: "assets/ggv_logo.png", modules: [
      {type: "Reporting", name: "USD Fund V", description: "USD Fund V (Q1 2021)"},
      {type: "Reporting", name: "USD Fund VI", description: "USD Fund VI (Q1 2021)"}
    ]
  },
  {
    id: 2,
    name: "Sequoia Venture Limited", logoUrl: "assets/sv_logo.png", modules: [
      {type: "Fundraising", name: "USD Fund VI", description: "USD Fund VI (First closing)"}
    ]
  }
];
