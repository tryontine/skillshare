import {
  activitySeries,
  consumerDashboard,
  providerDashboard,
  revenueSeries,
  trustStats,
} from "@/lib/mock-data";

export function getConsumerSnapshot() {
  return consumerDashboard;
}

export function getProviderSnapshot() {
  return providerDashboard;
}

export function getRevenueSeries() {
  return revenueSeries;
}

export function getActivitySeries() {
  return activitySeries;
}

export function getTrustStats() {
  return trustStats;
}
