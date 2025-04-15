export interface IHotel {
  id: number;
  title?: string;
  source?: number;
  photo?: string;
  url?: string;
  stars?: number;
  score?: number;
  body?: string;
  is_top?: 0 | 1;
  city_title?: string;
  country_title?: string;
  score_text?: string;
  reviews?: number;
  price?: number;
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
