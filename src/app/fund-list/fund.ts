export interface Fund {
  id: number,
  name: string,
  logoUrl: string,
  modules: FundModule[]
}

export interface FundModule {
  type: string,
  name: string,
  description: string
}
