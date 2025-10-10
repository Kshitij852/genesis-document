import {
  RiDashboardLine,
  RiUserLine,
  RiShoppingBagLine,
  RiBarChartLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiEyeLine,
  RiDownloadLine,
  RiCalendarLine,
  RiNotificationLine,
  RiSearchLine,
  RiSettingsLine,
  RiTeamLine,
} from "@remixicon/react";
import React from "react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12%",
      trend: "up",
      description: "vs last month",
      icon: RiBarChartLine,
      color: "blue",
    },
    {
      title: "New Users",
      value: "2,845",
      change: "+18%",
      trend: "up",
      description: "vs last week",
      icon: RiUserLine,
      color: "green",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "-2%",
      trend: "down",
      description: "vs yesterday",
      icon: RiShoppingBagLine,
      color: "orange",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+5%",
      trend: "up",
      description: "vs last quarter",
      icon: RiEyeLine,
      color: "indigo",
    },
  ];

  const activities = [
    {
      id: 1,
      user: "Sarah Johnson",
      action: "placed a new order",
      target: "Premium Plan",
      time: "2m ago",
      icon: RiShoppingBagLine,
    },
    {
      id: 2,
      user: "Alex Chen",
      action: "upgraded to",
      target: "Enterprise Plan",
      time: "1h ago",
      icon: RiUserLine,
    },
    {
      id: 3,
      user: "Maria Rodriguez",
      action: "submitted a support ticket",
      target: "",
      time: "3h ago",
      icon: RiDashboardLine,
    },
  ];

  const projects = [
    {
      name: "Mobile App Redesign",
      progress: 85,
      status: "In Progress",
      deadline: "Dec 15, 2024",
    },
    {
      name: "Website Launch",
      progress: 100,
      status: "Completed",
      deadline: "Nov 30, 2024",
    },
    {
      name: "API Integration",
      progress: 45,
      status: "In Progress",
      deadline: "Jan 20, 2025",
    },
  ];

  const quickActions = [
    { name: "Add User", icon: RiUserLine },
    { name: "Generate Report", icon: RiBarChartLine },
    { name: "Export Data", icon: RiDownloadLine },
    { name: "Settings", icon: RiSettingsLine },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <RiDashboardLine size={20} className="text-blue-600" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <RiSearchLine
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <RiNotificationLine size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">{s.title}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    {s.value}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    {s.trend === "up" ? (
                      <RiArrowUpLine size={16} className="text-green-500" />
                    ) : (
                      <RiArrowDownLine size={16} className="text-red-500" />
                    )}
                    <span
                      className={`text-sm ${
                        s.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {s.change}
                    </span>
                    <span className="text-sm text-gray-400">
                      {s.description}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-2 bg-${s.color}-100 rounded-lg text-${s.color}-600`}
                >
                  <s.icon size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity + Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {activities.map((a) => (
                <div
                  key={a.id}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="p-2 bg-blue-100 rounded-full">
                    <a.icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{a.user}</span> {a.action}{" "}
                      {a.target && (
                        <span className="text-blue-600 font-medium">
                          {a.target}
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                View all
              </button>
            </div>
            <div className="space-y-6">
              {projects.map((p, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      {p.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        p.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${p.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <RiCalendarLine size={14} />
                    {p.deadline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition"
              >
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <action.icon size={22} />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {action.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
