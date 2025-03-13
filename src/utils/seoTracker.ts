// Simple utility to help track basic SEO metrics client-side
// Note: This should be complemented with proper analytics tools

export interface PageView {
  path: string;
  referrer: string;
  timestamp: number;
}

export interface SearchTerms {
  term: string;
  count: number;
  lastSeen: number;
}

const SEO_STORAGE_KEY = "dwellvista_seo_data";

// Initialize or get existing SEO data
export function getSEOData() {
  if (typeof window === "undefined") return { pageViews: [], searchTerms: [] };

  const storedData = localStorage.getItem(SEO_STORAGE_KEY);
  if (!storedData) {
    return { pageViews: [], searchTerms: [] };
  }

  try {
    return JSON.parse(storedData);
  } catch (e) {
    console.error("Error parsing SEO data", e);
    return { pageViews: [], searchTerms: [] };
  }
}

// Track a page view
export function trackPageView() {
  if (typeof window === "undefined") return;

  const data = getSEOData();
  const newPageView: PageView = {
    path: window.location.pathname,
    referrer: document.referrer,
    timestamp: Date.now(),
  };

  data.pageViews = [...data.pageViews, newPageView].slice(-100); // Keep last 100 page views
  localStorage.setItem(SEO_STORAGE_KEY, JSON.stringify(data));

  // Check if coming from a search engine
  if (
    document.referrer.includes("google.com/search") ||
    document.referrer.includes("bing.com/search") ||
    document.referrer.includes("yahoo.com/search")
  ) {
    trackSearchReferral(document.referrer);
  }
}

// Track search terms (simplified - actual implementation would use URL parameters)
function trackSearchReferral(_referrer: string) {
  // This is a simplified example - in reality you'd parse the URL for search terms
  const data = getSEOData();
  const searchTerm = "organic search"; // Placeholder - would extract actual term

  const existingTerm = data.searchTerms.find(
    (t: { term: string }) => t.term === searchTerm
  );
  if (existingTerm) {
    existingTerm.count += 1;
    existingTerm.lastSeen = Date.now();
  } else {
    data.searchTerms.push({
      term: searchTerm,
      count: 1,
      lastSeen: Date.now(),
    });
  }

  localStorage.setItem(SEO_STORAGE_KEY, JSON.stringify(data));
}

// Get basic SEO stats
export function getSEOStats() {
  const data = getSEOData();

  // Total page views in last 30 days
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const recentPageViews = data.pageViews.filter(
    (pv: { timestamp: number }) => pv.timestamp > thirtyDaysAgo
  );

  // Count search engine referrals
  const searchReferrals = data.pageViews.filter(
    (pv: { referrer: string | string[] }) =>
      pv.referrer.includes("google.com/search") ||
      pv.referrer.includes("bing.com/search") ||
      pv.referrer.includes("yahoo.com/search")
  );

  return {
    totalPageViews: data.pageViews.length,
    recentPageViews: recentPageViews.length,
    searchReferrals: searchReferrals.length,
    topSearchTerms: data.searchTerms
      .sort((a: { count: number }, b: { count: number }) => b.count - a.count)
      .slice(0, 5),
  };
}
