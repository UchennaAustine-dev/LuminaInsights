import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Line, Bar } from "react-chartjs-2";
import { Eye, MousePointer, TrendingUp, DollarSign } from "lucide-react";
import {
  formatNumber,
  formatCurrency,
  formatPercentage,
} from "@/utils/dashboardUtils";
import StatCard from "@/components/dashboard/StatCard";
import type {
  AggregatedMetrics,
  AdPerformance,
  ChartData,
} from "@/types/analytics";

interface AdvertisingTabProps {
  metrics: AggregatedMetrics | null;
  adPerformance: AdPerformance[];
  adChartData: ChartData;
  adChartOptions: any;
}

const AdvertisingTab = ({
  metrics,
  adPerformance,
  adChartData,
  adChartOptions,
}: AdvertisingTabProps) => {
  const adPerformanceChartData = {
    labels: adPerformance?.map((item) => item.position) || [],
    datasets: [
      {
        label: "Impressions",
        data: adPerformance?.map((item) => item.impressions) || [],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Clicks",
        data: adPerformance?.map((item) => item.clicks) || [],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Ad Performance Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Impressions"
          value={formatNumber(metrics?.impressions || 0)}
          icon={<Eye className="h-4 w-4" />}
          trend={5.3}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Clicks"
          value={formatNumber(metrics?.clicks || 0)}
          icon={<MousePointer className="h-4 w-4" />}
          trend={2.8}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="CTR"
          value={formatPercentage(metrics?.ctr || 0)}
          icon={<TrendingUp className="h-4 w-4" />}
          trend={-0.5}
          trendLabel="vs. previous period"
        />
        <StatCard
          title="Revenue"
          value={formatCurrency(metrics?.revenue || 0)}
          icon={<DollarSign className="h-4 w-4" />}
          trend={4.2}
          trendLabel="vs. previous period"
        />
      </div>

      {/* Ad Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Ad Performance</CardTitle>
          <CardDescription>
            Impressions, clicks, and revenue over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <Line data={adChartData} options={adChartOptions} />
          </div>
        </CardContent>
      </Card>

      {/* Ad Units Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Ad Units Performance</CardTitle>
          <CardDescription>Performance metrics by ad unit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Ad Unit</th>
                  <th className="text-right py-3 px-2">Impressions</th>
                  <th className="text-right py-3 px-2">Clicks</th>
                  <th className="text-right py-3 px-2">CTR</th>
                  <th className="text-right py-3 px-2">Revenue</th>
                  <th className="text-right py-3 px-2">eCPM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "ac89736c5f18f38e6ab658042a0defa4-3",
                    name: "Sidebar 300x250",
                    impressions: 2150,
                    clicks: 43,
                    revenue: 5.38,
                  },
                  {
                    id: "ac89736c5f18f38e6ab658042a0defa4-5",
                    name: "Sidebar 120x600",
                    impressions: 1850,
                    clicks: 28,
                    revenue: 4.63,
                  },
                  {
                    id: "ac89736c5f18f38e6ab658042a0defa4-6",
                    name: "Content 300x250",
                    impressions: 1650,
                    clicks: 38,
                    revenue: 4.13,
                  },
                  {
                    id: "ac89736c5f18f38e6ab658042a0defa4-8",
                    name: "Top Banner 728x90",
                    impressions: 1450,
                    clicks: 22,
                    revenue: 3.63,
                  },
                  {
                    id: "ac89736c5f18f38e6ab658042a0defa4-10",
                    name: "In-Article 468x60",
                    impressions: 1250,
                    clicks: 19,
                    revenue: 3.13,
                  },
                ].map((ad, index) => {
                  const ctr = (ad.clicks / ad.impressions) * 100;
                  const ecpm = (ad.revenue / ad.impressions) * 1000;

                  return (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-2">{ad.name}</td>
                      <td className="py-3 px-2 text-right">
                        {formatNumber(ad.impressions)}
                      </td>
                      <td className="py-3 px-2 text-right">
                        {formatNumber(ad.clicks)}
                      </td>
                      <td className="py-3 px-2 text-right">
                        {formatPercentage(ctr / 100)}
                      </td>
                      <td className="py-3 px-2 text-right">
                        {formatCurrency(ad.revenue)}
                      </td>
                      <td className="py-3 px-2 text-right">
                        {formatCurrency(ecpm)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Ad Position Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ad Performance by Position</CardTitle>
            <CardDescription>
              Impressions and clicks by ad position
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Bar
                data={adPerformanceChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "top",
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
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ad Viewability</CardTitle>
            <CardDescription>
              Percentage of ads that were viewable
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { position: "Top", viewability: 92 },
                { position: "Middle", viewability: 78 },
                { position: "Bottom", viewability: 45 },
                { position: "Sidebar", viewability: 85 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.position}</span>
                    <span>{item.viewability}%</span>
                  </div>
                  <Progress
                    value={item.viewability}
                    className={
                      item.viewability > 80
                        ? "bg-green-100"
                        : item.viewability > 60
                        ? "bg-yellow-100"
                        : "bg-red-100"
                    }
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

export default AdvertisingTab;
