import analyticsService from "@/services/analyticsService";

// Generate random data within a range
function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random date within a range
function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Generate random page views
function generatePageViews(count: number, sessionIds: string[]): void {
  const paths = [
    "/",
    "/about",
    "/contact",
    "/article/sustainable-living-eco-friendly-practices",
    "/category/lifestyle",
    "/search",
    "/dashboard",
  ];

  const titles = [
    "Lumina Insights - Home",
    "About Us - Lumina Insights",
    "Contact Us - Lumina Insights",
    "Sustainable Living: Eco-Friendly Practices - Lumina Insights",
    "Lifestyle Articles - Lumina Insights",
    "Search Results - Lumina Insights",
    "Dashboard - Lumina Insights",
  ];

  const referrers = [
    "",
    "https://google.com",
    "https://facebook.com",
    "https://twitter.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://bing.com",
  ];

  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  for (let i = 0; i < count; i++) {
    const pathIndex = randomInRange(0, paths.length - 1);
    const sessionIndex = randomInRange(0, sessionIds.length - 1);

    const pageView = {
      path: paths[pathIndex],
      title: titles[pathIndex],
      referrer: referrers[randomInRange(0, referrers.length - 1)],
      timestamp: randomDate(thirtyDaysAgo, now).getTime(),
      sessionId: sessionIds[sessionIndex],
    };

    analyticsService["data"].pageViews.push(pageView);
  }
}

// Generate random ad impressions
function generateAdImpressions(count: number, sessionIds: string[]): void {
  const adIds = [
    "ac89736c5f18f38e6ab658042a0defa4-3",
    "ac89736c5f18f38e6ab658042a0defa4-5",
    "ac89736c5f18f38e6ab658042a0defa4-6",
  ];
  const adTypes = ["slot", "fixed", "notification"];
  const adPositions = ["top", "middle", "bottom", "sidebar"];

  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  for (let i = 0; i < count; i++) {
    const sessionIndex = randomInRange(0, sessionIds.length - 1);

    const impression = {
      adId: adIds[randomInRange(0, adIds.length - 1)],
      adType: adTypes[randomInRange(0, adTypes.length - 1)],
      adPosition: adPositions[randomInRange(0, adPositions.length - 1)],
      timestamp: randomDate(thirtyDaysAgo, now).getTime(),
      sessionId: sessionIds[sessionIndex],
      viewable: Math.random() > 0.2, // 80% of impressions are viewable
    };

    analyticsService["data"].adImpressions.push(impression);
  }
}

// Generate random ad clicks
function generateAdClicks(count: number, sessionIds: string[]): void {
  // const adIds = [
  //   "ac89736c5f18f38e6ab658042a0defa4-3",
  //   "ac89736c5f18f38e6ab658042a0defa4-5",
  //   "ac89736c5f18f38e6ab658042a0defa4-6",
  // ];
  // const adTypes = ["slot", "fixed", "notification"];
  // const adPositions = ["top", "middle", "bottom", "sidebar"];

  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  for (let i = 0; i < count; i++) {
    const sessionIndex = randomInRange(0, sessionIds.length - 1);
    const impressionIndex = randomInRange(
      0,
      analyticsService["data"].adImpressions.length - 1
    );
    const impression = analyticsService["data"].adImpressions[impressionIndex];

    // Only about 2% of impressions result in clicks
    if (Math.random() > 0.98) {
      const click = {
        adId: impression.adId,
        adType: impression.adType,
        adPosition: impression.adPosition,
        timestamp: impression.timestamp + randomInRange(1000, 10000), // Click happens 1-10 seconds after impression
        sessionId: sessionIds[sessionIndex],
      };

      analyticsService["data"].adClicks.push(click);
    }
  }
}

// Generate random user sessions
function generateSessions(count: number): string[] {
  const deviceTypes = ["Desktop", "Mobile", "Tablet"];
  const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
  const operatingSystems = ["Windows", "MacOS", "iOS", "Android", "Linux"];
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Germany",
    "France",
    "Japan",
    "Australia",
  ];
  const cities = [
    "New York",
    "London",
    "Toronto",
    "Berlin",
    "Paris",
    "Tokyo",
    "Sydney",
  ];
  const referrers = [
    "",
    "https://google.com",
    "https://facebook.com",
    "https://twitter.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://bing.com",
  ];
  const landingPages = [
    "/",
    "/about",
    "/contact",
    "/article/sustainable-living-eco-friendly-practices",
    "/category/lifestyle",
  ];

  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const sessionIds: string[] = [];

  for (let i = 0; i < count; i++) {
    const sessionId = `mock-session-${i}`;
    sessionIds.push(sessionId);

    const startTime = randomDate(thirtyDaysAgo, now).getTime();
    const duration = randomInRange(10000, 1800000); // 10 seconds to 30 minutes
    const endTime = startTime + duration;

    const session = {
      sessionId,
      startTime,
      endTime: Math.random() > 0.2 ? endTime : undefined, // 80% of sessions have ended
      deviceType: deviceTypes[randomInRange(0, deviceTypes.length - 1)],
      browser: browsers[randomInRange(0, browsers.length - 1)],
      os: operatingSystems[randomInRange(0, operatingSystems.length - 1)],
      country: countries[randomInRange(0, countries.length - 1)],
      city: cities[randomInRange(0, cities.length - 1)],
      referrer: referrers[randomInRange(0, referrers.length - 1)],
      landingPage: landingPages[randomInRange(0, landingPages.length - 1)],
      pagesViewed: randomInRange(1, 10),
      duration,
      isActive: Math.random() > 0.8, // 20% of sessions are still active
    };

    analyticsService["data"].sessions.push(session);
  }

  return sessionIds;
}

// Generate all mock data
export function generateMockAnalyticsData(): void {
  // Generate 500 sessions
  const sessionIds = generateSessions(500);

  // Generate 2000 page views
  generatePageViews(2000, sessionIds);

  // Generate 5000 ad impressions
  generateAdImpressions(5000, sessionIds);

  // Generate ad clicks (based on impressions)
  generateAdClicks(5000, sessionIds);

  console.log("Mock analytics data generated successfully");
}
