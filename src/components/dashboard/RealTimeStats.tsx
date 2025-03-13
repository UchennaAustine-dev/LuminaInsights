import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { RealTimeMetrics } from "@/types/analytics";

interface RealTimeStatsProps {
  metrics: RealTimeMetrics;
}

const RealTimeStats = ({ metrics }: RealTimeStatsProps) => {
  return (
    <Card className="bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Real-time Analytics
        </CardTitle>
        <CardDescription>Live data from the last 30 minutes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Active Users</span>
            <span className="text-2xl font-bold">{metrics.activeUsers}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Page Views</span>
            <span className="text-2xl font-bold">
              {metrics.pageViewsLast30Min}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              Ad Impressions
            </span>
            <span className="text-2xl font-bold">
              {metrics.impressionsLast30Min}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Ad Clicks</span>
            <span className="text-2xl font-bold">
              {metrics.clicksLast30Min}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeStats;
