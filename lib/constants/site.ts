export const siteConfig = {
  name: "SkillShare Switzerland",
  shortName: "SkillShare",
  description:
    "A premium Swiss marketplace for in-person learning, coaching, and creative services.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
};

export const swissCities = ["Zurich", "Geneva", "Basel", "Bern", "Lausanne"];

export const mainNavigation = [
  { href: "/browse", label: "Browse" },
  { href: "/categories", label: "Categories" },
  { href: "/providers", label: "Providers" },
  { href: "/become-a-provider", label: "Become a provider" },
];

export const marketplaceNavigation = [
  { href: "/browse", label: "Browse" },
  { href: "/favorites", label: "Favorites" },
  { href: "/messages", label: "Inbox" },
  { href: "/consumer", label: "Consumer" },
  { href: "/provider", label: "Provider" },
];

export const consumerNavigation = [
  { href: "/consumer", label: "Overview" },
  { href: "/consumer/bookings", label: "Bookings" },
  { href: "/consumer/reviews", label: "Reviews" },
  { href: "/consumer/favorites", label: "Favorites" },
  { href: "/consumer/messages", label: "Messages" },
];

export const providerNavigation = [
  { href: "/provider", label: "Overview" },
  { href: "/provider/listings", label: "Listings" },
  { href: "/provider/bookings", label: "Bookings" },
  { href: "/provider/inbox", label: "Inbox" },
  { href: "/provider/earnings", label: "Earnings" },
  { href: "/provider/reviews", label: "Reviews" },
  { href: "/provider/availability", label: "Availability" },
  { href: "/provider/onboarding", label: "Onboarding" },
];

export const settingsNavigation = [
  { href: "/settings/profile", label: "Profile" },
  { href: "/settings/account", label: "Account" },
  { href: "/settings/notifications", label: "Notifications" },
  { href: "/settings/security", label: "Security" },
  { href: "/settings/payouts", label: "Payouts" },
];
