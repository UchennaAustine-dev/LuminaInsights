import { subDays, format } from "date-fns";

export interface DashboardData {
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

export interface DailyStats {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  impressions: number;
  clicks: number;
  revenue: number;
}

const generateRandomStats = (): DashboardData => ({
  pageViews: Math.floor(Math.random() * 100000) + 50000,
  uniqueVisitors: Math.floor(Math.random() * 50000) + 25000,
  averageTimeOnSite: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(
    Math.random() * 60
  )}s`,
  bounceRate: Math.random() * 0.5 + 0.2,
  impressions: Math.floor(Math.random() * 200000) + 100000,
  clicks: Math.floor(Math.random() * 10000) + 5000,
  ctr: Math.random() * 0.05 + 0.01,
  revenue: Math.random() * 1000 + 500,
  cpm: Math.random() * 2 + 1,
  ecpm: Math.random() * 3 + 1.5,
});

const generateDailyStats = (days: number): DailyStats[] => {
  return Array.from({ length: days }, (_, i) => ({
    date: format(subDays(new Date(), i), "yyyy-MM-dd"),
    pageViews: Math.floor(Math.random() * 10000) + 5000,
    uniqueVisitors: Math.floor(Math.random() * 5000) + 2500,
    impressions: Math.floor(Math.random() * 20000) + 10000,
    clicks: Math.floor(Math.random() * 1000) + 500,
    revenue: Math.random() * 100 + 50,
  }));
};

export const fetchDashboardData = async (): Promise<DashboardData> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return generateRandomStats();
};

export const fetchDailyStats = async (days: number): Promise<DailyStats[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return generateDailyStats(days);
};
