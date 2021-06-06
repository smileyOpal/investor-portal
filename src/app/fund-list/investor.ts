export interface Investor {
  id: number,
  name: string,
  logoUrl: string,
  modules: FundModule[],
  aggregatedData: FundQuarterData[]
}

export interface FundModule {
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
