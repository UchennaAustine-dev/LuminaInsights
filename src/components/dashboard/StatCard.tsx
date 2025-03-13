import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { StatCardProps } from "@/types/analytics";

const StatCard = ({
  title,
  value,
  icon,
  trend,
  trendLabel,
  trendReversed = false,
}: StatCardProps) => {
  // Only calculate isTrendPositive if trend is defined
  const isTrendPositive =
    trend !== undefined ? (trendReversed ? trend < 0 : trend > 0) : false;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <h3 className="text-sm font-medium text-muted-foreground">
              {title}
            </h3>
          </div>
          {trend !== undefined && (
            <Badge
              variant={isTrendPositive ? "default" : "destructive"}
              className="text-xs"
            >
              {trend > 0 ? "+" : ""}
              {trend}%
            </Badge>
          )}
        </div>
        <div className="text-2xl font-bold">{value}</div>
        {trendLabel && (
          <p className="text-xs text-muted-foreground mt-1">{trendLabel}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
