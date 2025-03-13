import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Line, Doughnut } from "react-chartjs-2";
import { Eye, Users, TrendingUp, TrendingDown } from "lucide-react";
import { formatNumber, formatPercentage } from "@/utils/dashboardUtils";
import StatCard from "@/components/dashboard/StatCard";
import type {
  AggregatedMetrics,
  TopContent,
  TrafficSource,
  ChartData,
} from "@/types/analytics";

interface OverviewTabProps {
  metrics: AggregatedMetrics | null;
  topContent: TopContent[];
  trafficSources: TrafficSource[];
  dailyChartData: ChartData;
  chartOptions: any;
}

const OverviewTab = ({
  metrics,
  topContent,
  trafficSources,
  dailyChartData,
  chartOptions,
}: OverviewTabProps) => {
  const trafficSourcesChartData = {
    labels: trafficSources?.map((source) => source.source) || [],
    datasets: [
      {
        label: "Traffic Sources",
        data: trafficSources?.map((source) => source.percentage) || [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Page Views"
          value={formatNumber(metrics?.pageViews || 0)}
          icon={<Eye className="h-4 w-4" />}
          trend={7.2}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Unique Visitors"
          value={formatNumber(metrics?.uniqueVisitors || 0)}
          icon={<Users className="h-4 w-4" />}
          trend={3.1}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Avg. Time on Site"
          value={metrics?.averageTimeOnSite || "0m 0s"}
          icon={<TrendingUp className="h-4 w-4" />}
          trend={-1.4}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Bounce Rate"
          value={formatPercentage(metrics?.bounceRate || 0)}
          icon={<TrendingDown className="h-4 w-4" />}
          trend={-2.3}
          trendLabel="vs. previous period"
          trendReversed
        />
      </div>

      {/* Traffic Overview Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Traffic Overview</CardTitle>
          <CardDescription>
            Page views and unique visitors over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <Line data={dailyChartData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>

      {/* Traffic Sources and Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>
              Where your visitors are coming from
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <Doughnut
                data={trafficSourcesChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "right",
                    },
                  },
                }}
              />
            </div>
            <div className="mt-4 space-y-2">
              {trafficSources?.map((source, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{
                        backgroundColor:
                          trafficSourcesChartData.datasets[0].backgroundColor[
                            index % 5
                          ],
                      }}
                    ></div>
                    <span>{source.source}</span>
                  </div>
                  <span>{formatPercentage(source.percentage)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Your most viewed pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topContent?.map((content, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium truncate max-w-[70%]">
                      {content.title || content.path}
                    </span>
                    <span className="text-muted-foreground">
                      {formatNumber(content.views)} views
                    </span>
                  </div>
                  <Progress
                    value={(content.views / (topContent[0]?.views || 1)) * 100}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
