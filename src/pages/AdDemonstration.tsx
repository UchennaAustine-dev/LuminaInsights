import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdShowcase from "@/components/ads/AdShowcase";
import SEO from "@/components/SEO";

const AdDemonstration = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Ad Demonstration"
        description="Demonstration of various ad formats and placements for Lumina Insights"
        url="/ad-demonstration"
      />

      <h1 className="text-3xl font-bold mb-8">Ad Formats Demonstration</h1>

      <Tabs defaultValue="showcase">
        <TabsList className="mb-8">
          <TabsTrigger value="showcase">Ad Showcase</TabsTrigger>
          <TabsTrigger value="implementation">Implementation Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="showcase">
          <AdShowcase />
        </TabsContent>

        <TabsContent value="implementation">
          <Card>
            <CardHeader>
              <CardTitle>Ad Implementation Guide</CardTitle>
              <CardDescription>
                How to implement Netpub ads in your website using our AdBanner
                component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Basic Implementation
                </h3>
                <p className="mb-4">
                  Use the AdBanner component to easily add ads to your pages.
                  Here's a basic example:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  {`<AdBanner
  scriptId="ac89736c5f18f38e6ab658042a0defa4"
  adType="slot"
  adValue="6"
  sizesDesktop="300x250"
  sizesMobile="300x250"
/>`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Available Ad Types</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>slot</strong>: Standard ad slots with various sizes
                  </li>
                  <li>
                    <strong>fixed</strong>: Fixed position ads that stay in
                    place
                  </li>
                  <li>
                    <strong>notification</strong>: Notification-style ads that
                    appear at the bottom of the screen
                  </li>
                  <li>
                    <strong>sticky</strong>: Sticky ads that follow as the user
                    scrolls
                  </li>
                  <li>
                    <strong>interstitial</strong>: Full-screen interstitial ads
                  </li>
                  <li>
                    <strong>parallax</strong>: Parallax effect ads that respond
                    to scrolling
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Analytics Integration
                </h3>
                <p>
                  All ads are automatically tracked with our analytics service.
                  You can view performance metrics in the Dashboard under the
                  Advertising tab.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdDemonstration;
