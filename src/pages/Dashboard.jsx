import {
  AlertTriangle,
  CalendarRangeIcon,
  FolderOpen,
  Check,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Folder,
  TicketIcon,
  MessageCircle,
} from "lucide-react";

import EarningsChart from "../components/EarningsChart";
import StatusCard from "../components/StatusCard";
import CircleChart from "../components/CircleChart";
import RecentActivity from "../components/RecentActivity";
import { useState } from "react";

function Dashboard() {
  const activities = [
    {
      id: 1,
      type: "project",
      title: "Completed E-commerce Website Redesign",
      description: "Delivered final designs and assets to client",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      description: "$2,500 for Mobile App Development project",
      time: "4 hours ago",
      icon: DollarSign,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: 3,
      type: "message",
      title: "New Message from TechStart Inc.",
      description: "Client approved the latest design mockups",
      time: "6 hours ago",
      icon: MessageCircle,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: 4,
      type: "project",
      title: "Started New Project",
      description: "Brand Identity Design for Local Restaurant",
      time: "1 day ago",
      icon: FolderOpen,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: 5,
      type: "deadline",
      title: "Deadline Reminder",
      description: "Logo designs due tomorrow for RetailCorp",
      time: "1 day ago",
      icon: Clock,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: 6,
      type: "project",
      title: "Started New Project",
      description: "Brand Identity Design for Local Restaurant",
      time: "1 day ago",
      icon: FolderOpen,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: 7,
      type: "project",
      title: "Started New Project",
      description: "Brand Identity Design for Local Restaurant",
      time: "1 day ago",
      icon: FolderOpen,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];
  const stats = [
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "green",
      text: "green",
    },
    {
      title: "Active Projects",
      value: "8",
      change: "+2 this week",
      changeType: "positive",
      icon: FolderOpen,
      color: "indigo",
      text: "indigo",
    },
    {
      title: "Tasks Due",
      value: "14",
      change: "5 overdue",
      changeType: "negative",
      icon: Clock,
      color: "amber",
      text: "amber",
    },
    {
      title: "This Month",
      value: "$4,250",
      change: "+8.2%",
      changeType: "positive",
      icon: TrendingUp,
      color: "purple",
      text: "purple",
    },
  ];
  const [viewAll, setViewAll] = useState(false);

  const slicedActivities = viewAll ? activities : activities.slice(0, 3);

  return (
    <div className="px-3 py-5 flex flex-col gap-5 items-center justify-center w-full">
      {/* Status Cards */}
      <div className="flex gap-5 flex-wrap items-center justify-center">
        {stats.map((stat, index) => (
          <StatusCard key={index} {...stat} />
        ))}
      </div>

      {/* Bar Chart */}
      <div className="h-96 w-full bg-white rounded-xl mt-6 px-5 py-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] ">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold text-gray-700">
            Monthly Earnings
          </h1>
          <CalendarRangeIcon className="text-gray-500" />
        </div>
        <EarningsChart />
      </div>

      {/* Pie Chart */}
      <div className="h-90 w-full  bg-white rounded-xl mt-6 px-5 py-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold text-gray-700">
            Project Status
          </h1>
          <CheckCircle className="text-gray-500" />
        </div>
        <CircleChart />
      </div>

      {/* Recent Activity */}
      <div className="h-full w-full  bg-white rounded-xl mt-6 px-5 py-3 shadow-md flex flex-col gap-5 ">
        <h1 className="text-lg font-semibold text-gray-700">Recent Activity</h1>
        {slicedActivities.map((activity, index) => (
          <RecentActivity key={index} activities={activity} />
        ))}
        <button
          className="text-[#4367d8] font-semibold transition-all duration-300 hover:bg-[#eef2ff] py-2 rounded-lg cursor-pointer"
          onClick={() => setViewAll((a) => !a)}
        >
          {viewAll ? "View Less" : "View All Activity"}
        </button>
      </div>

      {/* Quick Actions */}
      <div className="h-full w-full  bg-white rounded-xl mt-6 px-8 py-3 shadow-md">
        <h1 className="text-lg font-semibold text-gray-700 mb-3">
          Quick Actions
        </h1>
        <div className="flex flex-col gap-4 ">
          {/* Create New Project */}
          <div className="flex gap-4 px-3 py-5 rounded-lg transition-all duration-300 hover:bg-[#e0e7ff] bg-[#e5ebfc] cursor-pointer ">
            <div className="text-white bg-[#4f46e5] w-13 h-13 flex items-center justify-center rounded-xl">
              <Folder className="w-7 h-7" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-lg">Create New Project</h1>
              <p className="text-gray-600 text-md">
                Start a new client project
              </p>
            </div>
          </div>
          {/* Send Invoice */}
          <div className="flex gap-4 px-3 py-5 rounded-lg transition-all cursor-pointer duration-300 hover:bg-[#d1fae5] bg-[#e2fbee]">
            <div className="text-white bg-[#059669] w-13 h-13 flex items-center justify-center rounded-xl">
              <DollarSign className="w-7 h-7" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-lg">Send Invoice</h1>
              <p className="text-gray-600 text-md">Create and send Invoice</p>
            </div>
          </div>
          {/* Review Deadlines  */}
          <div className="flex gap-4 px-3 py-5 rounded-lg transition-all cursor-pointer duration-300 hover:bg-[#fef3c7] bg-[#f9f5c9]">
            <div className="text-white bg-[#d97706] w-13 h-13 flex items-center justify-center rounded-xl">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-lg">Review Deadlines</h1>
              <p className="text-gray-600 text-md">Check upcoming tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
