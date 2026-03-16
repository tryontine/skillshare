export type AppRole = "consumer" | "provider" | "admin";

export type ProfileState = "draft" | "pending" | "approved" | "restricted";

export type ServiceCategorySlug =
  | "language-coaching"
  | "creative-arts"
  | "tutoring"
  | "fitness"
  | "music"
  | "photography"
  | "career";

export type BookingMode = "instant" | "request" | "hybrid";

export type BookingRequestStatus =
  | "draft"
  | "pending"
  | "accepted"
  | "declined"
  | "expired"
  | "cancelled";

export type BookingStatus =
  | "awaiting_payment"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "refunded";

export type ConversationContextType =
  | "service_inquiry"
  | "booking_request"
  | "booking"
  | "support";

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface AvailabilityRule {
  day: Weekday;
  start: string;
  end: string;
}

export interface SearchFilters {
  query?: string;
  category?: ServiceCategorySlug | "all";
  city?: string;
  canton?: string;
  radiusKm?: number;
  minRating?: number;
  maxPrice?: number;
  mode?: BookingMode | "all";
  sort?:
    | "recommended"
    | "price_low"
    | "price_high"
    | "rating"
    | "popularity";
}

export interface DashboardMetricCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  helper: string;
}
