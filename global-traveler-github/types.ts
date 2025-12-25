export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Destination {
  id: string;
  name: string;
  coordinates: Coordinate;
  description: string;
  days?: number;
  activities?: string[]; // List of key activities
}

export interface Itinerary {
  id: string;
  title: string;
  destinations: Destination[];
}

export interface TripOption {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export interface AIResponse {
  // New field to determine flow
  isAmbiguous: boolean; 
  
  // Populated if isAmbiguous is true
  options?: TripOption[];

  // Populated if isAmbiguous is false (Direct Result)
  tripSummary?: string;
  destinations?: {
    name: string;
    lat: number;
    lng: number;
    description: string;
    suggestedDays: number;
    activities: string[];
  }[];
}

export interface SavedTrip {
  id: string;
  title: string;
  createdAt: number; // timestamp
  destinations: Destination[];
  tripSummary?: string;
}

export enum ViewMode {
  MAP = 'MAP',
  LIST = 'LIST',
}

// Country Data Interfaces
export interface VisaPolicy {
  policy: string; // Basic policy for Chinese passport
  conditionalFree?: string; // Conditional visa-free access
}

export interface Advisory {
  customs: string;
  safetyTips: string;
}

export interface Festival {
  name: string;
  month: string;
}

export type Tag = 'culture' | 'scenery' | 'outdoor';

export interface Country {
  id: string;
  name: string;
  continent: string;
  coordinates: Coordinate;
  visaPolicy: VisaPolicy;
  tags: Tag[];
  avgDailyCost: number; // CNY
  bestMonths: number[]; // 1-12
  safetyLevel: 'high' | 'medium' | 'low';
  highlights: string[];
  advisory: Advisory;
  festivals: Festival[];
}