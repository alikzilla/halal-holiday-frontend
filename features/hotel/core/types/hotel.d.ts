export interface BaseInfo {
  language: string;
  location: string;
  currency: string;
  member: boolean;
}

export interface Photo {
  id: number;
  title: string;
  pic: string;
}

export interface Feature {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Features {
  activities: Feature[];
  "beach-amenities": Feature[];
  "beach-facilities": Feature[];
  "beach-room-specific": Feature[];
  "beach-sunbathing": Feature[];
  "beach-swimming": Feature[];
  entertainment: Feature[];
  "food-drinks": Feature[];
  "for-children": Feature[];
  "general-facilities": Feature[];
  "halal-food": Feature[];
  "indoor-pool": Feature[];
  "ladies-privacy": Feature[];
  "no-alcohol-policy": Feature[];
  "outdoor-pool": Feature[];
  "wellness-spa": Feature[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Price {
  adult: number;
  child: number;
  child_1_age_from: number;
  child_1_age_to: number;
  child_2_age_from: number;
  child_2_age_to: number;
  child_3_age_from: number;
  child_3_age_to: number;
  child_4_age_from: number;
  child_4_age_to: number;
  promotionPercent: number;
  promotionDiscount: number;
  memberPercent: number;
  memberDiscount: number;
  extraPercent: number;
  extraDiscount: number;
  b2bPercent: number;
  b2bDiscount: number;
  type: string;
  originalPrice: number;
}

export interface Room {
  id: number;
  oid: number;
  hotel_id: number;
  title: string;
  area: string;
  living_room: string;
  bed_room: string;
  bath_room: string;
  bed_type: string;
  cap_adult: number;
  cap_child: number;
  amenities: string;
  is_online: number;
  is_deleted: number;
  pic: string;
  price: Price | [];
}

export interface PersonData {
  ad: string;
  ch: string;
  ch1: string;
  ch2: number;
  ch3: number;
  ch4: number;
  ch5: number;
  ch6: number;
  ch7: number;
}

export interface Persons {
  rooms: number;
  adults: number;
  childs: number;
  data: PersonData[];
}

export interface Hotel {
  id: number;
  oid: number;
  extranet_id: number;
  country_id: number;
  province_id: number;
  city_id: number;
  region_id: number;
  url: string;
  title: string;
  stars: number;
  score: number;
  check_in: string;
  check_out: string;
  language_spoken: string;
  body: string;
  mapx: string;
  mapy: string;
  phone: string;
  address: string;
  agency_commission: number;
  customer_discount: number;
  b2b_discount: number;
  important_notes: string;
  halal_text: string;
  facilities_text: string;
  voucher_cancellation_conditions: string;
  voucher_important_informations: string;
  is_top: number;
  is_active: number;
  is_hr: number;
  source: number;
  is_deleted: number;
  min_price: number;
  min_price_update: string;
  country_title: string;
  city_title: string;
  pic: string;
  firstAvailableDate: {
    date: string;
  };
  score_text: string;
  photos: Photo[];
  features: Features;
  faqs: FAQ[];
}

export interface HotelProperty {
  property: Hotel;
  groups: Room[][];
  persons: Persons;
  checkin: string;
  checkout: string;
  nights: string;
  searchType: string;
  searchID: string;
  searchTitle: string;
}

interface HotelSearchResponse {
  status?: string;
  message?: string;
  base?: BaseInfo;
  hotel?: HotelProperty;
  loading: boolean;
  error: string | null;
}
