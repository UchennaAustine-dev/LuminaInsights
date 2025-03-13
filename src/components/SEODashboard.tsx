"use client";

import { useState, useEffect } from "react";
import { getSEOStats } from "../utils/seoTracker";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function SEODashboard() {
  const [stats, setStats] = useState({
    totalPageViews: 0,
    recentPageViews: 0,
    searchReferrals: 0,
    topSearchTerms: [],
  });

  useEffect(() => {
    // Get initial stats
    setStats(getSEOStats());

    // Update stats every minute
    const interval = setInterval(() => {
      setStats(getSEOStats());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">SEO Performance</h2>
      <p className="text-muted-foreground">
        This is a basic dashboard showing client-side SEO metrics. For
        comprehensive analytics, connect Google Analytics and Search Console.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Page Views (30 days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.recentPageViews}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Search Engine Referrals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.searchReferrals}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.recentPageViews
                ? (
                    (stats.searchReferrals / stats.recentPageViews) *
                    100
                  ).toFixed(1)
                : 0}
              %
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">
          Connect Professional Tools
        </h3>
        <p className="mb-4">
          For accurate SEO tracking, connect these professional tools:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Google Analytics 4
            </a>{" "}
            - Track user behavior, traffic sources, and conversions
          </li>
          <li>
            <a
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Google Search Console
            </a>{" "}
            - Monitor search performance, indexing status, and keyword rankings
          </li>
          <li>
            <a
              href="https://ahrefs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Ahrefs
            </a>{" "}
            or{" "}
            <a
              href="https://moz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Moz
            </a>{" "}
            - Track backlinks, keyword rankings, and competitor analysis
          </li>
        </ul>
      </div>
    </div>
  );
}
