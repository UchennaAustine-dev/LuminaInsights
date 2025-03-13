import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatNumber } from "@/utils/dashboardUtils";
import type { TopContent } from "@/types/analytics";

interface ContentTabProps {
  topContent: TopContent[];
}

const ContentTab = ({ topContent }: ContentTabProps) => {
  return (
    <div className="space-y-8">
      {/* Content Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Content Performance</CardTitle>
          <CardDescription>
            Detailed metrics for your top content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Page</th>
                  <th className="text-right py-3 px-2">Views</th>
                  <th className="text-right py-3 px-2">Avg. Time</th>
                  <th className="text-right py-3 px-2">Bounce Rate</th>
                  <th className="text-right py-3 px-2">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {topContent?.map((content, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-2 truncate max-w-[300px]">
                      {content.title || content.path}
                    </td>
                    <td className="py-3 px-2 text-right">
                      {formatNumber(content.views)}
                    </td>
                    <td className="py-3 px-2 text-right">{`${Math.floor(
                      Math.random() * 3
                    )}m ${Math.floor(Math.random() * 60)}s`}</td>
                    <td className="py-3 px-2 text-right">{`${(
                      Math.random() * 70
                    ).toFixed(1)}%`}</td>
                    <td className="py-3 px-2 text-right">{`${(
                      Math.random() * 10
                    ).toFixed(1)}%`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Content Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Most Engaging Content</CardTitle>
            <CardDescription>Content with highest time on page</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Sustainable Living: Eco-Friendly Practices",
                  time: "4m 32s",
                },
                { title: "The Future of AI in Healthcare", time: "3m 47s" },
                { title: "How to Start a Successful Blog", time: "3m 15s" },
                { title: "The Impact of Climate Change", time: "2m 58s" },
                {
                  title: "A Beginner's Guide to Cryptocurrency",
                  time: "2m 43s",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <span className="truncate max-w-[70%]">{item.title}</span>
                  <Badge variant="outline">{item.time}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exit Pages</CardTitle>
            <CardDescription>
              Pages where users most commonly leave your site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Contact Us", percentage: 24 },
                { title: "About Us", percentage: 18 },
                { title: "Article: Sustainable Living", percentage: 15 },
                { title: "Category: Lifestyle", percentage: 12 },
                { title: "Home Page", percentage: 10 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="truncate max-w-[70%]">{item.title}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Category Performance</CardTitle>
          <CardDescription>
            Performance metrics by content category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Category</th>
                  <th className="text-right py-3 px-2">Articles</th>
                  <th className="text-right py-3 px-2">Total Views</th>
                  <th className="text-right py-3 px-2">Avg. Views</th>
                  <th className="text-right py-3 px-2">Engagement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Lifestyle",
                    articles: 25,
                    views: 12500,
                    avgViews: 500,
                    engagement: "High",
                  },
                  {
                    name: "Technology",
                    articles: 18,
                    views: 9800,
                    avgViews: 544,
                    engagement: "Medium",
                  },
                  {
                    name: "Health",
                    articles: 15,
                    views: 7200,
                    avgViews: 480,
                    engagement: "High",
                  },
                  {
                    name: "Travel",
                    articles: 12,
                    views: 5400,
                    avgViews: 450,
                    engagement: "Medium",
                  },
                  {
                    name: "Finance",
                    articles: 10,
                    views: 4200,
                    avgViews: 420,
                    engagement: "Low",
                  },
                ].map((category, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-2">{category.name}</td>
                    <td className="py-3 px-2 text-right">
                      {category.articles}
                    </td>
                    <td className="py-3 px-2 text-right">
                      {formatNumber(category.views)}
                    </td>
                    <td className="py-3 px-2 text-right">
                      {formatNumber(category.avgViews)}
                    </td>
                    <td className="py-3 px-2 text-right">
                      <Badge
                        variant={
                          category.engagement === "High"
                            ? "default"
                            : category.engagement === "Medium"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {category.engagement}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentTab;
