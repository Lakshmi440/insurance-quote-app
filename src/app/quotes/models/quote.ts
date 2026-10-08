export interface Quote {
  id?: number;
  product: string;
  status: string;

  businessInformation: BusinessInformation;
  location: LocationInformation;
  coverage: CoverageInformation;
  risk: RiskInformation;
}

export interface BusinessInformation {
  businessName: string;
  businessType: string;
  description: string;
  annualRevenue?: number;
  yearsInBusiness?: number;
}

export interface LocationInformation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface CoverageInformation {
  commercialProperty: boolean;
  generalLiability: boolean;
}

export interface RiskInformation {
  numberOfEmployees: number;
  annualPayroll: number;
  previousClaims: boolean;
  numberOfClaims?: number;
  highRiskActivities: boolean;
}