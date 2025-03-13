import type React from "react";
export interface PageView {
  path: string;
  title: string;
  referrer: string;
  timestamp: number;
  sessionId: string;
  userId?: string;
}

export interface AdImpression {
  adId: string;
  adType: string;
  adPosition: string;
  timestamp: number;
  sessionId: string;
  viewable: boolean;
}

export interface AdClick {
  adId: string;
  adType: string;
  adPosition: string;
  timestamp: number;
  sessionId: string;
}

export interface UserSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  deviceType: string;
  browser: string;
  os: string;
  country: string;
  city?: string;
  referrer: string;
  landingPage: string;
  pagesViewed: number;
  duration: number;
  isActive: boolean;
}

export interface AnalyticsData {
  pageViews: PageView[];
  adImpressions: AdImpression[];
  adClicks: AdClick[];
  sessions: UserSession[];
}

export interface AggregatedMetrics {
  pageViews: number;
  uniqueVisitors: number;
  averageTimeOnSite: string;
  bounceRate: number;
  impressions: number;
  clicks: number;
  ctr: number;
  revenue: number;
  cpm: number;
  ecpm: number;
}

export interface RealTimeMetrics {
  activeUsers: number;
  pageViewsLast30Min: number;
  impressionsLast30Min: number;
  clicksLast30Min: number;
  ctrLast30Min: number;
}

export interface TopContent {
  path: string;
  title: string;
  views: number;
}

export interface TrafficSource {
  source: string;
  count: number;
  percentage: number;
}

export interface AdPerformance {
  position: string;
  impressions: number;
  clicks: number;
  ctr: number;
}

export interface DailyStats {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  impressions: number;
  clicks: number;
  revenue: number;
}

export interface UseAnalyticsOptions {
  startDate?: Date;
  endDate?: Date;
  realTime?: boolean;
  refreshInterval?: number;
}

export interface UseAnalyticsResult {
  data: AnalyticsData | null;
  metrics: AggregatedMetrics | null;
  realTimeMetrics: RealTimeMetrics | null;
  topContent: TopContent[];
  trafficSources: TrafficSource[];
  adPerformance: AdPerformance[];
  dailyStats: DailyStats[];
  loading: boolean;
  error: Error | null;
}

// Update the StatCardProps interface to make trend optional
export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  trendReversed?: boolean;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string | string[];
    tension?: number;
    yAxisID?: string;
    fill?: boolean;
  }[];
}

export interface DashboardTimeframe {
  from: Date;
  to: Date;
}

export type TimeframeOption =
  | "realtime"
  | "today"
  | "week"
  | "month"
  | "custom";
