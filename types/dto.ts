import type {
  AvailabilityRule,
  BookingMode,
  BookingRequestStatus,
  BookingStatus,
  ConversationContextType,
  DashboardMetricCard,
  ProfileState,
  ServiceCategorySlug,
} from "@/types/app";

export interface CategoryDTO {
  slug: ServiceCategorySlug;
  name: string;
  description: string;
  accent: string;
  icon: string;
}

export interface ProviderDTO {
  id: string;
  handle: string;
  fullName: string;
  headline: string;
  bio: string;
  city: string;
  canton: string;
  state?: ProfileState;
  languages: string[];
  rating: number;
  reviewCount: number;
  responseTime: string;
  repeatClientRate: number;
  verified: boolean;
  avatarGradient: string;
  serviceRadiusKm?: number;
  specialties: string[];
  trustBadges: string[];
}

export interface ServiceCardDTO {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ServiceCategorySlug;
  city: string;
  canton?: string;
  priceChf: number;
  durationLabel: string;
  rating: number;
  reviewCount: number;
  distanceKm?: number;
  popularityLabel: string;
  mode: BookingMode;
  provider: Pick<
    ProviderDTO,
    "handle" | "fullName" | "headline" | "verified" | "avatarGradient"
  >;
  heroGradient: string;
  highlights: string[];
}

export interface ServiceDetailDTO extends ServiceCardDTO {
  longDescription: string;
  deliverables: string[];
  faqs: Array<{ question: string; answer: string }>;
  location: {
    city: string;
    canton: string;
    district: string;
    venueLabel: string;
    radiusKm: number;
  };
  gallery: string[];
  availability: AvailabilityRule[];
}

export interface ReviewDTO {
  id: string;
  author: string;
  rating: number;
  createdAt: string;
  title: string;
  body: string;
  serviceTitle: string;
}

export interface ConversationThreadDTO {
  id: string;
  title: string;
  counterpart: string;
  contextType: ConversationContextType;
  preview: string;
  updatedAt: string;
  unreadCount: number;
}

export interface MessageDTO {
  id: string;
  author: string;
  body: string;
  createdAt: string;
  mine?: boolean;
}

export interface BookingDetailDTO {
  id: string;
  serviceTitle: string;
  providerName: string;
  consumerName: string;
  startsAt: string;
  locationLabel: string;
  totalChf: number;
  status: BookingStatus;
  requestStatus: BookingRequestStatus;
  mode: BookingMode;
}

export interface DashboardSnapshotDTO {
  heading: string;
  subheading: string;
  metrics: DashboardMetricCard[];
}

export interface RevenuePointDTO {
  label: string;
  revenue: number;
  bookings: number;
}

export interface ActivityPointDTO {
  label: string;
  views: number;
  saves: number;
}
