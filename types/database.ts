export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          handle: string;
          full_name: string;
          bio: string | null;
          city: string;
          canton: string;
          postal_code: string | null;
          locale: string;
          avatar_path: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          handle: string;
          full_name: string;
          bio?: string | null;
          city: string;
          canton: string;
          postal_code?: string | null;
          locale?: string;
          avatar_path?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      provider_profiles: {
        Row: {
          user_id: string;
          headline: string | null;
          state: "draft" | "pending" | "approved" | "restricted";
          onboarding_completed_at: string | null;
          payout_ready: boolean;
          service_radius_km: number;
          rating_avg: number;
          review_count: number;
          response_time_minutes: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          headline?: string | null;
          state?: "draft" | "pending" | "approved" | "restricted";
          onboarding_completed_at?: string | null;
          payout_ready?: boolean;
          service_radius_km?: number;
          rating_avg?: number;
          review_count?: number;
          response_time_minutes?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["provider_profiles"]["Insert"]>;
      };
      user_roles: {
        Row: {
          user_id: string;
          role: "consumer" | "provider" | "admin";
          created_at: string;
        };
        Insert: {
          user_id: string;
          role: "consumer" | "provider" | "admin";
          created_at?: string;
        };
        Update: {
          role?: "consumer" | "provider" | "admin";
        };
      };
      categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string | null;
          sort_order: number;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description?: string | null;
          sort_order?: number;
          is_active?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
      };
      services: {
        Row: {
          id: string;
          provider_id: string;
          category_id: string;
          slug: string;
          title: string;
          summary: string;
          description: string | null;
          booking_mode: "instant" | "request" | "hybrid";
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          provider_id: string;
          category_id: string;
          slug: string;
          title: string;
          summary: string;
          description?: string | null;
          booking_mode?: "instant" | "request" | "hybrid";
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["services"]["Insert"]>;
      };
      service_locations: {
        Row: {
          service_id: string;
          canton: string;
          city: string;
          postal_code: string | null;
          venue_label: string;
          district: string | null;
          lat: number;
          lng: number;
          radius_km: number;
        };
        Insert: {
          service_id: string;
          canton: string;
          city: string;
          postal_code?: string | null;
          venue_label: string;
          district?: string | null;
          lat: number;
          lng: number;
          radius_km?: number;
        };
        Update: Partial<Database["public"]["Tables"]["service_locations"]["Insert"]>;
      };
      service_pricing: {
        Row: {
          service_id: string;
          currency: string;
          price_chf: number;
          duration_minutes: number;
          instant_book_enabled: boolean;
          request_book_enabled: boolean;
        };
        Insert: {
          service_id: string;
          currency?: string;
          price_chf: number;
          duration_minutes: number;
          instant_book_enabled?: boolean;
          request_book_enabled?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["service_pricing"]["Insert"]>;
      };
      booking_requests: {
        Row: {
          id: string;
          service_id: string;
          consumer_id: string;
          provider_id: string;
          status: "draft" | "pending" | "accepted" | "declined" | "expired" | "cancelled";
          requested_start_at: string;
          notes: string | null;
          total_chf: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          service_id: string;
          consumer_id: string;
          provider_id: string;
          status?: "draft" | "pending" | "accepted" | "declined" | "expired" | "cancelled";
          requested_start_at: string;
          notes?: string | null;
          total_chf: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["booking_requests"]["Insert"]>;
      };
      bookings: {
        Row: {
          id: string;
          booking_request_id: string;
          service_id: string;
          consumer_id: string;
          provider_id: string;
          status: "awaiting_payment" | "confirmed" | "completed" | "cancelled" | "refunded";
          starts_at: string;
          ends_at: string | null;
          total_chf: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          booking_request_id: string;
          service_id: string;
          consumer_id: string;
          provider_id: string;
          status?: "awaiting_payment" | "confirmed" | "completed" | "cancelled" | "refunded";
          starts_at: string;
          ends_at?: string | null;
          total_chf: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["bookings"]["Insert"]>;
      };
      conversation_threads: {
        Row: {
          id: string;
          service_id: string | null;
          booking_request_id: string | null;
          booking_id: string | null;
          context_type: "service_inquiry" | "booking_request" | "booking" | "support";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          service_id?: string | null;
          booking_request_id?: string | null;
          booking_id?: string | null;
          context_type: "service_inquiry" | "booking_request" | "booking" | "support";
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["conversation_threads"]["Insert"]>;
      };
      messages: {
        Row: {
          id: string;
          thread_id: string;
          sender_id: string;
          body: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          thread_id: string;
          sender_id: string;
          body: string;
          created_at?: string;
        };
        Update: {
          body?: string;
        };
      };
      favorites: {
        Row: {
          user_id: string;
          service_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          service_id: string;
          created_at?: string;
        };
        Update: never;
      };
      reviews: {
        Row: {
          id: string;
          booking_id: string;
          service_id: string;
          author_id: string;
          provider_id: string;
          rating: number;
          title: string;
          body: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          booking_id: string;
          service_id: string;
          author_id: string;
          provider_id: string;
          rating: number;
          title: string;
          body: string;
          created_at?: string;
        };
        Update: {
          rating?: number;
          title?: string;
          body?: string;
        };
      };
      stripe_connected_accounts: {
        Row: {
          provider_id: string;
          stripe_account_id: string;
          charges_enabled: boolean;
          payouts_enabled: boolean;
          onboarding_completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          provider_id: string;
          stripe_account_id: string;
          charges_enabled?: boolean;
          payouts_enabled?: boolean;
          onboarding_completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["stripe_connected_accounts"]["Insert"]>;
      };
      stripe_events: {
        Row: {
          id: string;
          type: string;
          livemode: boolean;
          payload: Json;
          processed_at: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          type: string;
          livemode?: boolean;
          payload: Json;
          processed_at?: string | null;
          created_at?: string;
        };
        Update: {
          processed_at?: string | null;
        };
      };
      payout_ledger_entries: {
        Row: {
          id: string;
          booking_id: string | null;
          provider_id: string;
          stripe_event_id: string | null;
          entry_type: string;
          amount_chf: number;
          currency: string;
          occurred_at: string;
        };
        Insert: {
          id?: string;
          booking_id?: string | null;
          provider_id: string;
          stripe_event_id?: string | null;
          entry_type: string;
          amount_chf: number;
          currency?: string;
          occurred_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["payout_ledger_entries"]["Insert"]>;
      };
    };
    Views: {
      service_search_index_v: {
        Row: {
          service_id: string;
          slug: string;
          title: string;
          summary: string;
          category_slug: string;
          provider_id: string;
          provider_name: string;
          provider_handle: string;
          provider_headline: string | null;
          city: string;
          canton: string;
          price_chf: number;
          duration_minutes: number;
          booking_mode: string;
          rating_avg: number;
          review_count: number;
        };
      };
      provider_dashboard_v: {
        Row: {
          provider_id: string;
          live_services: number;
          upcoming_bookings: number;
          revenue_chf: number;
          review_count: number;
          rating_avg: number;
        };
      };
      consumer_dashboard_v: {
        Row: {
          consumer_id: string;
          upcoming_bookings: number;
          favorite_count: number;
          completed_bookings: number;
          review_count: number;
        };
      };
    };
    Functions: {
      search_services: {
        Args: {
          p_query?: string | null;
          p_category_slug?: string | null;
          p_city?: string | null;
          p_min_rating?: number | null;
          p_max_price?: number | null;
          p_mode?: string | null;
          p_radius_km?: number | null;
          p_lat?: number | null;
          p_lng?: number | null;
          p_sort?: string | null;
        };
        Returns: {
          service_id: string;
          slug: string;
          title: string;
          summary: string;
          provider_name: string;
          provider_handle: string;
          city: string;
          canton: string;
          price_chf: number;
          duration_minutes: number;
          rating_avg: number;
          review_count: number;
          distance_km: number | null;
          booking_mode: string;
        }[];
      };
    };
    Enums: {
      app_role: "consumer" | "provider" | "admin";
      profile_state: "draft" | "pending" | "approved" | "restricted";
      booking_mode: "instant" | "request" | "hybrid";
      booking_request_status:
        | "draft"
        | "pending"
        | "accepted"
        | "declined"
        | "expired"
        | "cancelled";
      booking_status:
        | "awaiting_payment"
        | "confirmed"
        | "completed"
        | "cancelled"
        | "refunded";
      conversation_context_type:
        | "service_inquiry"
        | "booking_request"
        | "booking"
        | "support";
    };
  };
}
