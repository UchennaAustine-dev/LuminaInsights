import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdBanner from "@/components/ads/AdBanner";

const AdShowcase = () => {
  const scriptId = "ac89736c5f18f38e6ab658042a0defa4";

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Standard Banner Ads</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 300x250 Banner */}
          <div>
            <h3 className="text-lg font-medium mb-2">
              300x250 Medium Rectangle
            </h3>
            <AdBanner
              scriptId={scriptId}
              adType="slot"
              adValue="6"
              sizesDesktop="300x250"
              sizesMobile="300x250"
            />
          </div>

          {/* 728x90 Banner */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-2">728x90 Leaderboard</h3>
            <AdBanner
              scriptId={scriptId}
              adType="slot"
              adValue="13"
              sizesDesktop="728x90"
              sizesMobile="300x50,320x50"
            />
          </div>

          {/* 160x600 Banner */}
          <div>
            <h3 className="text-lg font-medium mb-2">160x600 Skyscraper</h3>
            <AdBanner
              scriptId={scriptId}
              adType="slot"
              adValue="2"
              sizesDesktop="160x600"
              sizesMobile="160x600"
            />
          </div>

          {/* 300x600 Banner */}
          <div>
            <h3 className="text-lg font-medium mb-2">300x600 Half Page</h3>
            <AdBanner
              scriptId={scriptId}
              adType="slot"
              adValue="5"
              sizesDesktop="300x600"
              sizesMobile="300x600"
            />
          </div>

          {/* 970x90 Banner */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-2">
              970x90 Large Leaderboard
            </h3>
            <AdBanner
              scriptId={scriptId}
              adType="slot"
              adValue="11"
              sizesDesktop="970x90"
              sizesMobile="300x50,320x50"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fixed Position Ads</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fixed 300x250 */}
          <div>
            <h3 className="text-lg font-medium mb-2">Fixed 300x250</h3>
            <AdBanner
              scriptId={scriptId}
              adType="fixed"
              adValue="6"
              sizesDesktop="300x250"
              sizesMobile="300x250"
            />
          </div>

          {/* Fixed 728x90 */}
          <div>
            <h3 className="text-lg font-medium mb-2">Fixed 728x90</h3>
            <AdBanner
              scriptId={scriptId}
              adType="fixed"
              adValue="8"
              sizesDesktop="728x90"
              sizesMobile="320x50"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Ads</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h3 className="text-lg font-medium mb-2">Notification 300x250</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This ad will appear as a notification at the bottom of the screen.
            </p>
            <AdBanner
              scriptId={scriptId}
              adType="notification"
              adValue="1"
              sizesDesktop="300x250"
              sizesMobile="300x250"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdShowcase;
