export interface Investor {
  id: number,
  abbrev: string,
  name: string,
  logoUrl: string,
  summaryData: FundSummaryData[],
  aggregatedData: FundQuarterData[]
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
