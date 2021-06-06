import {Investor} from "./investor";

export const INVESTORS: Investor[] = [
  {
    id: 1,
    abbrev: "GGV",
    name: "GGV Capital Limited", logoUrl: "assets/ggv_logo.png",
    funds: [
      {
        name: 'USD Fund V',
        portfolios: [
          {
            name: 'Genesys',
            initialInvestment: '12-2016',
            mainIndustry: 'Oil, Gas & Consumable Fuels',
            sector: 'Energy',
            commitReserves: 0,
            currentOwnership: 12.1,
            totalInvestmentCost: 7,
            currentInvestmentCost: 7,
            realized: 0,
            fairMarketValue: 7,
            totalValue: 7,
            multiplesOfCost: 1,
            grossIrr: 0
          },
          {
            name: 'Treasury Tech',
            initialInvestment: '01-2017',
            mainIndustry: 'Leisure Equipment & Products',
            sector: 'Material',
            commitReserves: 0,
            currentOwnership: 10,
            totalInvestmentCost: 15.1,
            currentInvestmentCost: 0.1,
            realized: 70,
            fairMarketValue: 0.1,
            totalValue: 70.1,
            multiplesOfCost: 4.64,
            grossIrr: 72.57
          },
          {
            name: '',
            initialInvestment: '',
            mainIndustry: '',
            sector: '',
            commitReserves: 0,
            currentOwnership: 0,
            totalInvestmentCost: 0,
            currentInvestmentCost: 7,
            realized: 0,
            fairMarketValue: 0,
            totalValue: 0,
            multiplesOfCost: 0,
            grossIrr: 0
          }
        ]
      },
      {name: 'USD Fund VI', portfolios: []}
    ],
    summaryData: [
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
    aggregatedData: [
      {period: '2020-12-31', type: 'Commitment', amount: 8591},
      {period: '2020-12-31', type: 'Contribution', amount: 1643.68},
      {period: '2020-12-31', type: 'Distribution', amount: 115},
      {period: '2020-12-31', type: 'NAV', amount: 1992.44},
      {period: '2020-12-31', type: 'Total invested', amount: 958.29},
      {period: '2020-12-31', type: 'Total value', amount: 2107.44},
      {period: '2020-12-31', type: 'DPI', amount: 0.07},
      {period: '2020-12-31', type: 'RVPI', amount: 1.21},
      {period: '2020-12-31', type: 'TVPI', amount: 1.28},

      {period: '2021-03-31', type: 'Commitment', amount: 8590.25},
      {period: '2021-03-31', type: 'Contribution', amount: 1643.16},
      {period: '2021-03-31', type: 'Distribution', amount: 115},
      {period: '2021-03-31', type: 'NAV', amount: 1997.40},
      {period: '2021-03-31', type: 'Total invested', amount: 958.21},
      {period: '2021-03-31', type: 'Total value', amount: 2112.40},
      {period: '2021-03-31', type: 'DPI', amount: 0.07},
      {period: '2021-03-31', type: 'RVPI', amount: 1.22},
      {period: '2021-03-31', type: 'TVPI', amount: 1.29}
    ]
  },
  {
    id: 2,
    abbrev: "SV",
    name: "Sequoia Venture Limited", logoUrl: "assets/sv_logo.png",
    funds: [],
    summaryData: [
      {type: "Fundraising", name: "USD Fund VI", description: "USD Fund VI (First closing)", entities: []}
    ],
    aggregatedData: []
  }
];

