export interface IHotel {
  id: number;
  name: string;
  location: string;
  duration: string;
  bedType: string;
  price: number;
  taxesIncluded: boolean;
  discountedPrice?: number;
  features?: string[];
  roomsLeft?: number;
  isMostBooked?: boolean;
}

export interface Hotel {
  slug: string;
  name: string;
  address: string;
  rating: number;
  images: string[];
  description: string;
  rooms: Room[];
  reviews: Review[];
  surroundings: string[];
  facilities: string[];
  thingsToKnow: string[];
  faqs: FAQ[];
}

interface Room {
  type: string;
  features: string[];
  price: number;
}

interface Review {
  user: string;
  rating: number;
  comment: string;
}

interface FAQ {
  question: string;
  answer: string;
}
