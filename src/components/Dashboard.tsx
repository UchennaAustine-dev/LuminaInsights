// "use client";

// import { useState, useEffect } from "react";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { articleData } from "@/data/articleData";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const [pageViews, setPageViews] = useState<number>(0);
//   const [uniqueVisitors, setUniqueVisitors] = useState<number>(0);
//   const [averageTimeOnSite, setAverageTimeOnSite] = useState<string>("");

//   useEffect(() => {
//     // Simulating API calls to fetch analytics data
//     setPageViews(Math.floor(Math.random() * 10000));
//     setUniqueVisitors(Math.floor(Math.random() * 5000));
//     setAverageTimeOnSite(
//       `${Math.floor(Math.random() * 5)}m ${Math.floor(Math.random() * 60)}s`
//     );
//   }, []);

//   const categoryData = {
//     labels: articleData.map((article) => article.category),
//     datasets: [
//       {
//         label: "Articles per Category",
//         data: articleData.reduce((acc, article) => {
//           acc[article.category] = (acc[article.category] || 0) + 1;
//           return acc;
//         }, {} as Record<string, number>),
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   };

//   const pageViewsData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Page Views",
//         data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Page Views</h2>
//           <p className="text-3xl font-bold">{pageViews.toLocaleString()}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Unique Visitors</h2>
//           <p className="text-3xl font-bold">
//             {uniqueVisitors.toLocaleString()}
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Avg. Time on Site</h2>
//           <p className="text-3xl font-bold">{averageTimeOnSite}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-4">Articles per Category</h2>
//           <Bar data={categoryData} />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             Page Views (Last 7 Days)
//           </h2>
//           <Line data={pageViewsData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";

import { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { format } from "date-fns";
import {
  fetchDashboardData,
  fetchDailyStats,
  type DashboardData,
  type DailyStats,
} from "@/api/dashboardApi";

import { Loader2 } from "lucide-react";
import {
  getRandomColor,
  formatNumber,
  formatPercentage,
  formatCurrency,
} from "@/utils/dashboardUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [data, stats] = await Promise.all([
          fetchDashboardData(),
          fetchDailyStats(30),
        ]);
        setDashboardData(data);
        setDailyStats(stats);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (!dashboardData) {
    return <div>Error loading dashboard data.</div>;
  }

  const chartOptions: ChartOptions<"bar" | "line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Daily Statistics",
      },
    },
  };

  const dailyChartData = {
    labels: dailyStats.map((stat) => format(new Date(stat.date), "MMM d")),
    datasets: [
      {
        label: "Page Views",
        data: dailyStats.map((stat) => stat.pageViews),
        borderColor: getRandomColor(),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Unique Visitors",
        data: dailyStats.map((stat) => stat.uniqueVisitors),
        borderColor: getRandomColor(),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
      {
        label: "Revenue",
        data: dailyStats.map((stat) => stat.revenue),
        borderColor: getRandomColor(),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          title="Page Views"
          value={formatNumber(dashboardData.pageViews)}
        />
        <StatCard
          title="Unique Visitors"
          value={formatNumber(dashboardData.uniqueVisitors)}
        />
        <StatCard
          title="Avg. Time on Site"
          value={dashboardData.averageTimeOnSite}
        />
        <StatCard
          title="Bounce Rate"
          value={formatPercentage(dashboardData.bounceRate)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          title="Impressions"
          value={formatNumber(dashboardData.impressions)}
        />
        <StatCard title="Clicks" value={formatNumber(dashboardData.clicks)} />
        <StatCard title="CTR" value={formatPercentage(dashboardData.ctr)} />
        <StatCard
          title="Revenue"
          value={formatCurrency(dashboardData.revenue)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <StatCard title="CPM" value={formatCurrency(dashboardData.cpm)} />
        <StatCard title="eCPM" value={formatCurrency(dashboardData.ecpm)} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Daily Statistics (Last 30 Days)
        </h2>
        <Line options={chartOptions} data={dailyChartData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Performing Content</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Article</th>
                <th className="text-right">Views</th>
              </tr>
            </thead>
            <tbody>
              {/* Mock data for top performing content */}
              {[
                { title: "10 Tips for Sustainable Living", views: 15234 },
                { title: "The Future of AI in Healthcare", views: 12567 },
                { title: "How to Start a Successful Blog", views: 10982 },
                {
                  title: "The Impact of Climate Change on Agriculture",
                  views: 9876,
                },
                { title: "A Beginner's Guide to Cryptocurrency", views: 8765 },
              ].map((article, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{article.title}</td>
                  <td className="py-2 text-right">
                    {formatNumber(article.views)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
          <Bar
            options={{
              ...chartOptions,
              indexAxis: "y" as const,
            }}
            data={{
              labels: [
                "Direct",
                "Organic Search",
                "Social Media",
                "Referral",
                "Email",
              ],
              datasets: [
                {
                  label: "Traffic Source",
                  data: [35, 25, 20, 15, 5],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
