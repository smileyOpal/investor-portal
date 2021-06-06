export interface Investor {
  id: number,
  abbrev: string,
  name: string,
  logoUrl: string,
  funds: FundDetail[],
  summaryData: FundSummaryData[],
  aggregatedData: FundQuarterData[]
}

export interface FundDetail {
  name: string,
  portfolios: FundPortfolio[]
}

export interface FundPortfolio {
  name: string,
  sector: string,
  initialInvestment: string,
  mainIndustry: string,
  commitReserves: number,
  currentOwnership: number,
  totalInvestmentCost: number,
  currentInvestmentCost: number,
  realized: number,
  fairMarketValue: number,
  totalValue: number,
  multiplesOfCost: number,
  grossIrr: number
}

export interface FundSummaryData {
  type: string,
  name: string,
  description: string,
  entities: FundEntity[]
}

export interface FundEntity {
  entity: string,
  commitment: number,
  invested: number,
  realized: number,
  fairValue: number,
  grossMoc: number,
  netIrr: number,
}

export interface FundQuarterData {
  period: string,
  type: string,
  amount: number
}
