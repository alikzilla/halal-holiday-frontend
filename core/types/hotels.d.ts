export interface IHotel {
  id: number;
  name: string;
  location: string;
  duration: string;
  bedType: string;
  price: number;
  discountedPrice?: number;
  taxesIncluded: boolean;
  features?: string[];
  roomsLeft?: number;
  isMostBooked?: boolean;
  address?: string;
  rating?: number;
  images?: string[];
  description?: string;
  rooms?: Room[];
  reviews?: Review[];
  surroundings?: string[];
  facilities?: string[];
  thingsToKnow?: string[];
  faqs?: FAQ[];
  guests?: string;
  tag?: string;
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
  date?: string;
}

interface FAQ {
  question: string;
  answer: string;
}
