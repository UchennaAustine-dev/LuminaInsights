import { useState, useEffect } from "react";
import analyticsService from "@/services/analyticsService";
import type {
  AnalyticsData,
  UseAnalyticsOptions,
  UseAnalyticsResult,
  AggregatedMetrics,
  RealTimeMetrics,
  TopContent,
  TrafficSource,
  AdPerformance,
  DailyStats,
} from "@/types/analytics";

export function useAnalytics(
  options: UseAnalyticsOptions = {}
): UseAnalyticsResult {
  const {
    startDate,
    endDate,
    realTime = false,
    refreshInterval = 10000,
  } = options;

  const [data, setData] = useState<AnalyticsData | null>(null);
  const [metrics, setMetrics] = useState<AggregatedMetrics | null>(null);
  const [realTimeMetrics, setRealTimeMetrics] =
    useState<RealTimeMetrics | null>(null);
  const [topContent, setTopContent] = useState<TopContent[]>([]);
  const [trafficSources, setTrafficSources] = useState<TrafficSource[]>([]);
  const [adPerformance, setAdPerformance] = useState<AdPerformance[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Initialize analytics service
    try {
      analyticsService.init();
    } catch (err) {
      console.error("Failed to initialize analytics service:", err);
      setError(
        err instanceof Error
          ? err
          : new Error("Failed to initialize analytics service")
      );
    }

    // Cleanup function
    return () => {
      analyticsService.cleanup();
    };
  }, []);

  useEffect(() => {
    // Function to fetch and update analytics data
    const fetchData = () => {
      try {
        // Get filtered data
        const analyticsData = analyticsService.getData(startDate, endDate);
        setData(analyticsData);

        // Get aggregated metrics
        const start = startDate || new Date(0);
        const end = endDate || new Date();
        const aggregatedMetrics = analyticsService.getAggregatedMetrics(
          start,
          end
        );
        setMetrics(aggregatedMetrics);

        // Get real-time metrics if enabled
        if (realTime) {
          const rtMetrics = analyticsService.getRealTimeMetrics();
          setRealTimeMetrics(rtMetrics);
        }

        // Get top content
        const topContentData = analyticsService.getTopContent(5);
        setTopContent(topContentData);

        // Get traffic sources
        const trafficSourcesData = analyticsService.getTrafficSources();
        setTrafficSources(trafficSourcesData);

        // Get ad performance by position
        const adPerformanceData = analyticsService.getAdPerformanceByPosition();
        setAdPerformance(adPerformanceData);

        // Get daily stats for the last 30 days
        const dailyStatsData = analyticsService.getDailyStats(30);
        setDailyStats(dailyStatsData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching analytics data:", err);
        setError(
          err instanceof Error
            ? err
            : new Error("Error fetching analytics data")
        );
        setLoading(false);
      }
    };

    // Fetch data immediately
    fetchData();

    // Set up interval for real-time updates if enabled
    let intervalId: number | null = null;
    if (realTime) {
      intervalId = window.setInterval(fetchData, refreshInterval);
    }

    // Set up event listener for data updates
    analyticsService.on("dataUpdate", fetchData);

    // Cleanup function
    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
      analyticsService.off("dataUpdate", fetchData);
    };
  }, [startDate, endDate, realTime, refreshInterval]);

  return {
    data,
    metrics,
    realTimeMetrics,
    topContent,
    trafficSources,
    adPerformance,
    dailyStats,
    loading,
    error,
  };
}
