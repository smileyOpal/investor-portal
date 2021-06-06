import {Fund} from "./fund";

export const FUNDS: Fund[] = [
  {
    name: "GGV Capital Limited", logoUrl: "assets/ggv_logo.png", modules: [
      {type: "Reporting", description: "USD Fund V (Q1 2021)"},
      {type: "Reporting", description: "USD Fund VI (Q1 2021)"}
    ]
  },
  {
    name: "Sequoia Venture Limited", logoUrl: "assets/sv_logo.png", modules: [
      {type: "Fundraising", description: "USD Fund VI (First closing)"}
    ]
  }
];
