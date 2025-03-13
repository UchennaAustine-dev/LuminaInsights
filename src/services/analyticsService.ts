class EventEmitter {
  private events: Record<string, Function[]> = {};

  on(event: string, listener: Function): this {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }

  off(event: string, listener: Function): this {
    if (!this.events[event]) return this;
    this.events[event] = this.events[event].filter((l) => l !== listener);
    return this;
  }

  emit(event: string, ...args: any[]): boolean {
    if (!this.events[event]) return false;
    this.events[event].forEach((listener) => listener(...args));
    return true;
  }

  once(event: string, listener: Function): this {
    const onceWrapper = (...args: any[]) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    return this.on(event, onceWrapper);
  }

  removeAllListeners(event?: string): this {
    if (event) {
      this.events[event] = [];
    } else {
      this.events = {};
    }
    return this;
  }
}

import type {
  PageView,
  AdImpression,
  AdClick,
  UserSession,
  AnalyticsData,
  AggregatedMetrics,
  RealTimeMetrics,
  TopContent,
  TrafficSource,
  AdPerformance,
  DailyStats,
} from "@/types/analytics";

// Analytics service with event emitter for real-time updates
class AnalyticsService extends EventEmitter {
  private static instance: AnalyticsService;
  private data: AnalyticsData = {
    pageViews: [],
    adImpressions: [],
    adClicks: [],
    sessions: [],
  };
  private sessionId: string;
  private isInitialized = false;
  private sessionCheckInterval: number | null = null;
  private sessionTimeout = 30 * 60 * 1000; // 30 minutes

  private constructor() {
    super();
    this.sessionId = this.generateSessionId();
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  public init(): void {
    if (this.isInitialized) return;

    // Initialize session
    this.startSession();

    // Track page views
    this.trackPageView();

    // Listen for navigation events
    window.addEventListener("popstate", () => this.trackPageView());

    // Set up session checking
    this.sessionCheckInterval = window.setInterval(() => {
      this.checkSession();
    }, 60000); // Check every minute

    // Track user activity
    ["click", "scroll", "mousemove", "keypress"].forEach((eventType) => {
      window.addEventListener(eventType, () => this.updateSessionActivity());
    });

    // Track ad impressions
    this.setupAdTracking();

    this.isInitialized = true;
  }

  public cleanup(): void {
    if (this.sessionCheckInterval) {
      window.clearInterval(this.sessionCheckInterval);
    }

    // End the current session
    this.endSession();

    // Remove event listeners
    window.removeEventListener("popstate", () => this.trackPageView());
    ["click", "scroll", "mousemove", "keypress"].forEach((eventType) => {
      window.removeEventListener(eventType, () => this.updateSessionActivity());
    });

    this.isInitialized = false;
  }

  // Track a page view
  private trackPageView(): void {
    const pageView: PageView = {
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer,
      timestamp: Date.now(),
      sessionId: this.sessionId,
    };

    this.data.pageViews.push(pageView);
    this.updateSessionPageCount();
    this.emit("pageView", pageView);
    this.emit("dataUpdate", this.data);

    // In a real implementation, you would send this to your analytics server
    console.log("Page view tracked:", pageView);
  }

  // Track ad impressions
  private trackAdImpression(adElement: Element): void {
    const adId = adElement.getAttribute("data-ad-id") || "unknown";
    const adType = adElement.getAttribute("data-ad-type") || "unknown";
    const adPosition = adElement.getAttribute("data-ad-position") || "unknown";

    // Check if the ad is viewable (in viewport)
    const rect = adElement.getBoundingClientRect();
    const viewable =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    const impression: AdImpression = {
      adId,
      adType,
      adPosition,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      viewable,
    };

    this.data.adImpressions.push(impression);
    this.emit("adImpression", impression);
    this.emit("dataUpdate", this.data);

    // In a real implementation, you would send this to your analytics server
    console.log("Ad impression tracked:", impression);
  }

  // Track ad clicks
  public trackAdClick(adId: string, adType: string, adPosition: string): void {
    const click: AdClick = {
      adId,
      adType,
      adPosition,
      timestamp: Date.now(),
      sessionId: this.sessionId,
    };

    this.data.adClicks.push(click);
    this.emit("adClick", click);
    this.emit("dataUpdate", this.data);

    // In a real implementation, you would send this to your analytics server
    console.log("Ad click tracked:", click);
  }

  // Set up tracking for ad impressions
  private setupAdTracking(): void {
    // Use Intersection Observer to track when ads come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.trackAdImpression(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); // Consider an ad viewed when 50% visible

    // Observe all ad elements
    setTimeout(() => {
      document.querySelectorAll(".ad-container ins").forEach((ad) => {
        // Add data attributes if they don't exist
        if (!ad.getAttribute("data-ad-id")) {
          const scriptId = ad.className.split("-")[1] || "unknown";
          const adType = ad.hasAttribute("data-fixed")
            ? "fixed"
            : ad.hasAttribute("data-notification")
            ? "notification"
            : "slot";
          const adValue = ad.getAttribute(`data-${adType}`) || "unknown";

          ad.setAttribute("data-ad-id", `${scriptId}-${adValue}`);
          ad.setAttribute("data-ad-type", adType);
          ad.setAttribute("data-ad-position", this.getAdPosition(ad));

          // Add click tracking
          ad.addEventListener("click", () => {
            this.trackAdClick(
              ad.getAttribute("data-ad-id") || "unknown",
              ad.getAttribute("data-ad-type") || "unknown",
              ad.getAttribute("data-ad-position") || "unknown"
            );
          });
        }

        observer.observe(ad);
      });
    }, 2000); // Wait for ads to load
  }

  // Get the position of an ad on the page
  private getAdPosition(element: Element): string {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight / 3) return "top";
    if (rect.top < (windowHeight * 2) / 3) return "middle";
    return "bottom";
  }

  // Start a new user session
  private startSession(): void {
    const session: UserSession = {
      sessionId: this.sessionId,
      startTime: Date.now(),
      deviceType: this.getDeviceType(),
      browser: this.getBrowser(),
      os: this.getOS(),
      country: "Unknown", // Would be determined server-side in a real implementation
      referrer: document.referrer,
      landingPage: window.location.pathname,
      pagesViewed: 1,
      duration: 0,
      isActive: true,
    };

    this.data.sessions.push(session);
    this.emit("sessionStart", session);
    this.emit("dataUpdate", this.data);

    // In a real implementation, you would send this to your analytics server
    console.log("Session started:", session);
  }

  // End the current session
  private endSession(): void {
    const session = this.data.sessions.find(
      (s) => s.sessionId === this.sessionId
    );
    if (session) {
      session.endTime = Date.now();
      session.duration = session.endTime - session.startTime;
      session.isActive = false;

      this.emit("sessionEnd", session);
      this.emit("dataUpdate", this.data);

      // In a real implementation, you would send this to your analytics server
      console.log("Session ended:", session);
    }
  }

  // Update session activity timestamp
  private updateSessionActivity(): void {
    const session = this.data.sessions.find(
      (s) => s.sessionId === this.sessionId
    );
    if (session) {
      session.isActive = true;
      // In a real implementation, you would update the last activity timestamp
    }
  }

  // Update the page count for the current session
  private updateSessionPageCount(): void {
    const session = this.data.sessions.find(
      (s) => s.sessionId === this.sessionId
    );
    if (session) {
      session.pagesViewed += 1;
    }
  }

  // Check if the session is still active
  private checkSession(): void {
    const session = this.data.sessions.find(
      (s) => s.sessionId === this.sessionId
    );
    if (session && !session.isActive) {
      const now = Date.now();
      const lastActivity = session.startTime + session.duration;

      if (now - lastActivity > this.sessionTimeout) {
        this.endSession();
        this.sessionId = this.generateSessionId();
        this.startSession();
      }
    }
  }

  // Generate a unique session ID
  private generateSessionId(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Get the user's device type
  private getDeviceType(): string {
    const userAgent = navigator.userAgent;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    ) {
      return "Mobile";
    }
    if (/iPad|Tablet|PlayBook/i.test(userAgent)) {
      return "Tablet";
    }
    return "Desktop";
  }

  // Get the user's browser
  private getBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) return "Chrome";
    if (userAgent.indexOf("Safari") > -1) return "Safari";
    if (userAgent.indexOf("Firefox") > -1) return "Firefox";
    if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1)
      return "Internet Explorer";
    if (userAgent.indexOf("Edge") > -1) return "Edge";
    return "Unknown";
  }

  // Get the user's operating system
  private getOS(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Windows") > -1) return "Windows";
    if (userAgent.indexOf("Mac") > -1) return "MacOS";
    if (userAgent.indexOf("Linux") > -1) return "Linux";
    if (userAgent.indexOf("Android") > -1) return "Android";
    if (userAgent.indexOf("iOS") > -1) return "iOS";
    return "Unknown";
  }

  // Get analytics data with optional date filtering
  public getData(startDate?: Date, endDate?: Date): AnalyticsData {
    if (!startDate && !endDate) return this.data;

    const start = startDate ? startDate.getTime() : 0;
    const end = endDate ? endDate.getTime() : Date.now();

    return {
      pageViews: this.data.pageViews.filter(
        (pv) => pv.timestamp >= start && pv.timestamp <= end
      ),
      adImpressions: this.data.adImpressions.filter(
        (ai) => ai.timestamp >= start && ai.timestamp <= end
      ),
      adClicks: this.data.adClicks.filter(
        (ac) => ac.timestamp >= start && ac.timestamp <= end
      ),
      sessions: this.data.sessions.filter(
        (s) => s.startTime >= start && (!s.endTime || s.endTime <= end)
      ),
    };
  }

  // Get real-time metrics
  public getRealTimeMetrics(): RealTimeMetrics {
    const now = Date.now();
    const last30Minutes = now - 30 * 60 * 1000;

    const recentPageViews = this.data.pageViews.filter(
      (pv) => pv.timestamp >= last30Minutes
    );
    const recentImpressions = this.data.adImpressions.filter(
      (ai) => ai.timestamp >= last30Minutes
    );
    const recentClicks = this.data.adClicks.filter(
      (ac) => ac.timestamp >= last30Minutes
    );
    const activeSessions = this.data.sessions.filter((s) => s.isActive);

    return {
      activeUsers: activeSessions.length,
      pageViewsLast30Min: recentPageViews.length,
      impressionsLast30Min: recentImpressions.length,
      clicksLast30Min: recentClicks.length,
      ctrLast30Min:
        recentImpressions.length > 0
          ? (recentClicks.length / recentImpressions.length) * 100
          : 0,
    };
  }

  // Get aggregated metrics for a specific time period
  public getAggregatedMetrics(
    startDate: Date,
    endDate: Date
  ): AggregatedMetrics {
    const filteredData = this.getData(startDate, endDate);

    // Calculate total page views
    const totalPageViews = filteredData.pageViews.length;

    // Calculate unique visitors (by session ID)
    const uniqueVisitors = new Set(
      filteredData.sessions.map((s) => s.sessionId)
    ).size;

    // Calculate average time on site
    const completedSessions = filteredData.sessions.filter((s) => s.endTime);
    const avgTimeOnSite =
      completedSessions.length > 0
        ? completedSessions.reduce(
            (sum, session) => sum + session.duration,
            0
          ) / completedSessions.length
        : 0;

    // Calculate bounce rate (sessions with only one page view)
    const bouncedSessions = filteredData.sessions.filter(
      (s) => s.pagesViewed === 1
    );
    const bounceRate =
      filteredData.sessions.length > 0
        ? bouncedSessions.length / filteredData.sessions.length
        : 0;

    // Calculate ad metrics
    const impressions = filteredData.adImpressions.length;
    const clicks = filteredData.adClicks.length;
    const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;

    // Assume a CPM of $2.50 and calculate revenue
    const cpm = 2.5;
    const revenue = (impressions / 1000) * cpm;

    return {
      pageViews: totalPageViews,
      uniqueVisitors,
      averageTimeOnSite: this.formatDuration(avgTimeOnSite),
      bounceRate,
      impressions,
      clicks,
      ctr,
      revenue,
      cpm,
      ecpm: clicks > 0 ? revenue / (clicks / 1000) : 0,
    };
  }

  // Format duration in milliseconds to a readable string
  private formatDuration(duration: number): string {
    const seconds = Math.floor(duration / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  }

  // Get top performing content
  public getTopContent(limit = 5): TopContent[] {
    const contentMap = new Map<string, { title: string; views: number }>();

    this.data.pageViews.forEach((pv) => {
      if (!contentMap.has(pv.path)) {
        contentMap.set(pv.path, { title: pv.title, views: 0 });
      }
      contentMap.get(pv.path)!.views += 1;
    });

    return Array.from(contentMap.entries())
      .map(([path, data]) => ({ path, title: data.title, views: data.views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }

  // Get traffic sources
  public getTrafficSources(): TrafficSource[] {
    const sourceMap = new Map<string, number>();

    this.data.sessions.forEach((session) => {
      const source = this.categorizeReferrer(session.referrer);
      if (!sourceMap.has(source)) {
        sourceMap.set(source, 0);
      }
      sourceMap.set(source, sourceMap.get(source)! + 1);
    });

    const total = this.data.sessions.length;

    return Array.from(sourceMap.entries())
      .map(([source, count]) => ({
        source,
        count,
        percentage: total > 0 ? (count / total) * 100 : 0,
      }))
      .sort((a, b) => b.count - a.count);
  }

  // Categorize a referrer into a traffic source
  private categorizeReferrer(referrer: string): string {
    if (!referrer) return "Direct";

    if (
      referrer.includes("google") ||
      referrer.includes("bing") ||
      referrer.includes("yahoo")
    ) {
      return "Organic Search";
    }

    if (
      referrer.includes("facebook") ||
      referrer.includes("twitter") ||
      referrer.includes("instagram") ||
      referrer.includes("linkedin")
    ) {
      return "Social Media";
    }

    if (
      referrer.includes("mail") ||
      referrer.includes("outlook") ||
      referrer.includes("gmail")
    ) {
      return "Email";
    }

    return "Referral";
  }

  // Get ad performance by position
  public getAdPerformanceByPosition(): AdPerformance[] {
    const positionMap = new Map<
      string,
      { impressions: number; clicks: number }
    >();

    // Initialize with common positions
    ["top", "middle", "bottom", "sidebar"].forEach((position) => {
      positionMap.set(position, { impressions: 0, clicks: 0 });
    });

    // Count impressions by position
    this.data.adImpressions.forEach((impression) => {
      if (!positionMap.has(impression.adPosition)) {
        positionMap.set(impression.adPosition, { impressions: 0, clicks: 0 });
      }
      positionMap.get(impression.adPosition)!.impressions += 1;
    });

    // Count clicks by position
    this.data.adClicks.forEach((click) => {
      if (!positionMap.has(click.adPosition)) {
        positionMap.set(click.adPosition, { impressions: 0, clicks: 0 });
      }
      positionMap.get(click.adPosition)!.clicks += 1;
    });

    return Array.from(positionMap.entries())
      .map(([position, data]) => ({
        position,
        impressions: data.impressions,
        clicks: data.clicks,
        ctr: data.impressions > 0 ? (data.clicks / data.impressions) * 100 : 0,
      }))
      .sort((a, b) => b.impressions - a.impressions);
  }

  // Get daily statistics for a date range
  public getDailyStats(days: number): DailyStats[] {
    const result = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);

      const dayData = this.getData(date, nextDate);

      result.push({
        date: date.toISOString().split("T")[0],
        pageViews: dayData.pageViews.length,
        uniqueVisitors: new Set(dayData.pageViews.map((pv) => pv.sessionId))
          .size,
        impressions: dayData.adImpressions.length,
        clicks: dayData.adClicks.length,
        revenue: (dayData.adImpressions.length / 1000) * 2.5, // Assuming $2.50 CPM
      });
    }

    return result;
  }
}

export const analyticsService = AnalyticsService.getInstance();
export default analyticsService;
