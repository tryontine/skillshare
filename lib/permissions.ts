import type { AppRole, ProfileState } from "@/types/app";

export function hasRole(userRoles: AppRole[], role: AppRole) {
  return userRoles.includes(role);
}

export function canManageProviderArea(userRoles: AppRole[]) {
  return hasRole(userRoles, "provider") || hasRole(userRoles, "admin");
}

export function canAccessConsumerArea(userRoles: AppRole[]) {
  return hasRole(userRoles, "consumer") || hasRole(userRoles, "admin");
}

export function canPublishProviderProfile(
  userRoles: AppRole[],
  state: ProfileState = "draft",
) {
  return canManageProviderArea(userRoles) && state === "approved";
}

export function canAcceptBookings(
  userRoles: AppRole[],
  state: ProfileState = "draft",
  hasStripePayouts = false,
) {
  return canManageProviderArea(userRoles) && state === "approved" && hasStripePayouts;
}

export function canLeaveReview(
  userRoles: AppRole[],
  bookingStatus: "completed" | "other",
) {
  return canAccessConsumerArea(userRoles) && bookingStatus === "completed";
}
