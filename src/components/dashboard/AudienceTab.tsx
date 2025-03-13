import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Pie } from "react-chartjs-2";
import { Users, TrendingUp } from "lucide-react";
import { formatNumber } from "@/utils/dashboardUtils";
import StatCard from "@/components/dashboard/StatCard";
import type { AggregatedMetrics } from "@/types/analytics";

interface AudienceTabProps {
  metrics: AggregatedMetrics | null;
}

const AudienceTab = ({ metrics }: AudienceTabProps) => {
  // Calculate values safely with null checks
  const newVisitors = metrics?.uniqueVisitors
    ? Math.floor(metrics.uniqueVisitors * 0.65)
    : 0;
  const returningVisitors = metrics?.uniqueVisitors
    ? Math.floor(metrics.uniqueVisitors * 0.35)
    : 0;
  const pagesPerSession =
    metrics?.pageViews && metrics?.uniqueVisitors
      ? (metrics.pageViews / metrics.uniqueVisitors).toFixed(2)
      : "0.00";
  const sessions = metrics?.uniqueVisitors ? metrics.uniqueVisitors * 1.2 : 0;

  return (
    <div className="space-y-8">
      {/* Audience Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="New Visitors"
          value={formatNumber(newVisitors)}
          icon={<Users className="h-4 w-4" />}
          trend={5.8}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Returning Visitors"
          value={formatNumber(returningVisitors)}
          icon={<Users className="h-4 w-4" />}
          trend={2.3}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Pages / Session"
          value={pagesPerSession}
          icon={<TrendingUp className="h-4 w-4" />}
          trend={1.7}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Sessions"
          value={formatNumber(sessions)}
          icon={<TrendingUp className="h-4 w-4" />}
          trend={4.2}
          trendLabel="vs. previous period"
        />
      </div>

      {/* Rest of the component remains the same */}
      {/* Device Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>Visitors by device type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <Pie
                data={{
                  labels: ["Desktop", "Mobile", "Tablet"],
                  datasets: [
                    {
                      data: [58, 35, 7],
                      backgroundColor: [
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                      ],
                      borderColor: [
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 99, 132, 1)",
                        "rgba(255, 206, 86, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Top countries by visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { country: "United States", percentage: 42 },
                { country: "United Kingdom", percentage: 18 },
                { country: "Canada", percentage: 12 },
                { country: "Germany", percentage: 8 },
                { country: "France", percentage: 6 },
                { country: "Other", percentage: 14 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.country}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Browser & OS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Browser Usage</CardTitle>
            <CardDescription>Visitors by browser</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { browser: "Chrome", percentage: 64 },
                { browser: "Safari", percentage: 18 },
                { browser: "Firefox", percentage: 10 },
                { browser: "Edge", percentage: 6 },
                { browser: "Other", percentage: 2 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.browser}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operating System</CardTitle>
            <CardDescription>Visitors by OS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { os: "Windows", percentage: 48 },
                { os: "MacOS", percentage: 24 },
                { os: "iOS", percentage: 16 },
                { os: "Android", percentage: 10 },
                { os: "Other", percentage: 2 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.os}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AudienceTab;
