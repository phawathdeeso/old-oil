
export type Language = 'en' | 'th';
export type Theme = 'light' | 'dark';

export interface User {
  email: string;
  isLoggedIn: boolean;
}

export interface CollectionPoint {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: 'partner' | 'hub';
}

export interface TranslationStrings {
  title: string;
  tagline: string;
  login: string;
  signUp: string;
  email: string;
  password: string;
  forgotPassword: string;
  donthaveAccount: string;
  dashboard: string;
  logout: string;
  mapTitle: string;
  calcTitle: string;
  pickupTitle: string;
  amountLiters: string;
  estimatedEarning: string;
  confirmSale: string;
  pickupDate: string;
  address: string;
  addressPlaceholder: string;
  successMessage: string;
  ratePerLiter: string;
  backToLogin: string;
  creatingAccount: string;
}
