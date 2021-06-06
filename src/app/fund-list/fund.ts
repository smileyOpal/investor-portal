export interface Fund {
  name: string,
  logoUrl: string,
  modules: FundModule[]
}

export interface FundModule {
  type: string,
  description: string
}
