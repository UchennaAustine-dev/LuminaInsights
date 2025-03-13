"use client";

import { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { format, subDays } from "date-fns";
import { useAnalytics } from "@/hooks/useAnalyitics";
import { generateMockAnalyticsData } from "@/utils/mockAnalyticsData";
import { Loader2, RefreshCw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { toast } from "sonner";
import type {
  DashboardTimeframe,
  TimeframeOption,
  ChartData,
} from "@/types/analytics";
import RealTimeStats from "@/components/dashboard/RealTimeStats";
import OverviewTab from "@/components/dashboard/OverviewTab";
import AudienceTab from "@/components/dashboard/AudienceTab";
import ContentTab from "@/components/dashboard/ContentTab";
import AdvertisingTab from "@/components/dashboard/AdvertisingTab";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [dateRange, setDateRange] = useState<DashboardTimeframe>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const [timeframe, setTimeframe] = useState<TimeframeOption>("month");
  const [refreshing, setRefreshing] = useState(false);
  const dataInitialized = useRef(false);

  // Initialize mock data if needed
  useEffect(() => {
    if (!dataInitialized.current) {
      generateMockAnalyticsData();
      dataInitialized.current = true;
    }
  }, []);

  // Update date range based on timeframe
  useEffect(() => {
    const now = new Date();

    switch (timeframe) {
      case "realtime":
        // Last 30 minutes
        setDateRange({
          from: new Date(now.getTime() - 30 * 60 * 1000),
          to: now,
        });
        break;
      case "today":
        // Start of today
        const startOfToday = new Date(now);
        startOfToday.setHours(0, 0, 0, 0);
        setDateRange({
          from: startOfToday,
          to: now,
        });
        break;
      case "week":
        // Last 7 days
        setDateRange({
          from: subDays(now, 7),
          to: now,
        });
        break;
      case "month":
        // Last 30 days
        setDateRange({
          from: subDays(now, 30),
          to: now,
        });
        break;
      // For custom, we don't change the date range
    }
  }, [timeframe]);

  // Use our analytics hook with real-time updates for the realtime view
  const {
    metrics,
    realTimeMetrics,
    topContent,
    trafficSources,
    adPerformance,
    dailyStats,
    loading,
    error,
  } = useAnalytics({
    startDate: dateRange.from,
    endDate: dateRange.to,
    realTime: timeframe === "realtime",
    refreshInterval: 5000, // Refresh every 5 seconds in realtime mode
  });

  // Handle manual refresh
  const handleRefresh = () => {
    setRefreshing(true);
    // Simulate a refresh delay
    setTimeout(() => {
      setRefreshing(false);
      toast.success("Dashboard data refreshed");
    }, 1000);
  };

  if (loading && !metrics) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg font-medium">Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-destructive">
        <AlertTriangle className="h-12 w-12 mb-4" />
        <p className="text-lg font-medium">Error loading dashboard data</p>
        <p className="text-sm">{error.message}</p>
        <Button onClick={handleRefresh} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  // Prepare chart data
  const dailyChartData: ChartData = {
    labels:
      dailyStats?.map((stat) => format(new Date(stat.date), "MMM d")) || [],
    datasets: [
      {
        label: "Page Views",
        data: dailyStats?.map((stat) => stat.pageViews) || [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.3,
      },
      {
        label: "Unique Visitors",
        data: dailyStats?.map((stat) => stat.uniqueVisitors) || [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.3,
      },
    ],
  };

  const adChartData: ChartData = {
    labels:
      dailyStats?.map((stat) => format(new Date(stat.date), "MMM d")) || [],
    datasets: [
      {
        label: "Impressions",
        data: dailyStats?.map((stat) => stat.impressions) || [],
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "Clicks",
        data: dailyStats?.map((stat) => stat.clicks) || [],
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        tension: 0.3,
        yAxisID: "y1",
      },
      {
        label: "Revenue ($)",
        data: dailyStats?.map((stat) => stat.revenue) || [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.3,
        yAxisID: "y2",
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  const adChartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Impressions",
        },
        beginAtZero: true,
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Clicks",
        },
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Revenue ($)",
        },
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            {timeframe === "realtime"
              ? "Real-time analytics for your website"
              : `Analytics data from ${format(
                  dateRange.from,
                  "MMM d, yyyy"
                )} to ${format(dateRange.to, "MMM d, yyyy")}`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select
            value={timeframe}
            onValueChange={(value) => setTimeframe(value as TimeframeOption)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realtime">Real-time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Last 7 days</SelectItem>
              <SelectItem value="month">Last 30 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>

          {timeframe === "custom" && (
            <DatePickerWithRange
              date={dateRange}
              setDate={(date: any) => {
                if (date) {
                  setDateRange(date);
                }
              }}
            />
          )}

          <Button
            variant="outline"
            size="icon"
            onClick={handleRefresh}
            disabled={refreshing || timeframe === "realtime"}
          >
            <RefreshCw
              className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
            />
          </Button>
        </div>
      </div>

      {timeframe === "realtime" && realTimeMetrics && (
        <div className="mb-8">
          <RealTimeStats metrics={realTimeMetrics} />
        </div>
      )}

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab
            metrics={metrics}
            topContent={topContent}
            trafficSources={trafficSources}
            dailyChartData={dailyChartData}
            chartOptions={chartOptions}
          />
        </TabsContent>

        <TabsContent value="audience">
          <AudienceTab metrics={metrics} />
        </TabsContent>

        <TabsContent value="content">
          <ContentTab topContent={topContent} />
        </TabsContent>

        <TabsContent value="advertising">
          <AdvertisingTab
            metrics={metrics}
            adPerformance={adPerformance}
            adChartData={adChartData}
            adChartOptions={adChartOptions}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
