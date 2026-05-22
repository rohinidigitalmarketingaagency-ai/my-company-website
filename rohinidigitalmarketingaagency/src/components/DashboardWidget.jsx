import React from 'react';

export default function DashboardWidget() {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-lg w-full font-sans border border-gray-100">
        
        {/* Top Header with Dots */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex space-x-2">
            <div className="w-3.5 h-3.5 bg-red-400 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-sm font-mono text-gray-500 tracking-tight">
            analytics.rohinidigital.com
          </div>
        </div>

        {/* Top Two Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-[#fcfcfc] p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-2">MONTHLY TRAFFIC</div>
            <div className="text-4xl font-extrabold text-gray-800 mb-2">428,940</div>
            <div className="text-sm font-bold text-emerald-500">+18.4% vs last month</div>
          </div>
          <div className="bg-[#fcfcfc] p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-2">CONVERSION RATE</div>
            <div className="text-4xl font-extrabold text-gray-800 mb-2">4.82%</div>
            <div className="text-sm font-bold text-emerald-500">+2.1% higher average</div>
          </div>
        </div>

        {/* Active Campaigns Row */}
        <div className="bg-[#fcfcfc] p-5 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center mb-8">
          <div>
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-2">ACTIVE CAMPAIGNS</div>
            <div className="flex items-center text-lg font-bold text-gray-800">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-3"></div>
              Google Ads - Search
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-1">Daily ROAS</div>
            <div className="text-2xl font-extrabold text-indigo-500">4.8x ROI</div>
          </div>
        </div>

        {/* Decorative Bar Chart */}
        <div className="flex items-end justify-between h-20 gap-2">
          <div className="bg-indigo-100 w-full h-[30%] rounded-t-lg"></div>
          <div className="bg-indigo-200 w-full h-[45%] rounded-t-lg"></div>
          <div className="bg-indigo-300 w-full h-[35%] rounded-t-lg"></div>
          <div className="bg-sky-400 w-full h-[80%] rounded-t-lg"></div>
          <div className="bg-purple-400 w-full h-[70%] rounded-t-lg"></div>
          <div className="bg-[#0ea5e9] w-full h-full rounded-t-lg"></div>
        </div>
        
      </div>
    </div>
  );
}