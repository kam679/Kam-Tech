export interface Service {
  id: string;
  title: string;
  company: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  category: string;
  distance: string;
  available: string;
  description: string;
  features: string[];
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceTitle: string;
  companyName: string;
  date: string;
  time: string;
  status: 'confirmed' | 'upcoming' | 'pending' | 'cancelled';
  icon: string;
  colorClass: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  initials?: string;
}