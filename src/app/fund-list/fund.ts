export interface Fund {
  id: number,
  name: string,
  logoUrl: string,
  modules: FundModule[]
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
