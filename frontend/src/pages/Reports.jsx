import React, { useState } from 'react';
import {
  DocumentChartBarIcon,
  ChartBarIcon,
  DocumentIcon,
  CalendarIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  PlusIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import '../styles/fonts.css';

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-earth-black text-earth-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent"></div>
          <h1 className="relative text-5xl md:text-6xl font-semibold text-earth-white mb-6 tracking-tight">
            Progress Reports
          </h1>
          <p className="relative text-xl text-earth-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Generate comprehensive insights and track development milestones
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Quick Actions Bar - Sticky */}
          <div className="sticky top-0 z-50 bg-earth-black/95 backdrop-blur-xl border-b border-earth-gray-800 py-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 min-w-[300px]">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-earth-gray-400" />
                <input
                  type="text"
                  placeholder="Search reports by student, type, or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-earth-gray-800/50 backdrop-blur-sm rounded-xl
                           border border-earth-gray-700 text-base text-earth-white placeholder-earth-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue
                           transition-all duration-200 tracking-wide"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-5 py-3.5 bg-earth-gray-800/50 backdrop-blur-sm rounded-xl
                           text-earth-white border border-earth-gray-700 hover:bg-earth-gray-700/50 
                           transition-all duration-200 text-base font-medium tracking-wide"
                >
                  <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                  Filters
                </button>
                <button
                  className="flex items-center px-5 py-3.5 bg-accent-blue rounded-xl text-earth-white
                           hover:bg-blue-600 transition-all duration-200 text-base font-medium tracking-wide
                           shadow-lg shadow-accent-blue/20"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Generate Report
                </button>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="mt-4 p-6 bg-earth-gray-800/50 backdrop-blur-sm rounded-xl 
                           border border-earth-gray-700 animate-slide-down">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Report Type
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Types</option>
                      <option>Progress Report</option>
                      <option>Assessment Report</option>
                      <option>Milestone Report</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Time Period
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Time</option>
                      <option>Last Week</option>
                      <option>Last Month</option>
                      <option>Last Quarter</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Status
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Status</option>
                      <option>Draft</option>
                      <option>Published</option>
                      <option>Archived</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Sort By
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>Date (Newest)</option>
                      <option>Date (Oldest)</option>
                      <option>Student Name</option>
                      <option>Report Type</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Total Reports</h3>
                <DocumentChartBarIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">156</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">All time</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Published</h3>
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">142</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Ready to share</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Pending</h3>
                <ClockIcon className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">14</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Awaiting review</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Generated Today</h3>
                <DocumentIcon className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">8</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Last 24 hours</div>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-16">
            {reports.map((report, index) => (
              <div
                key={index}
                className="group bg-earth-gray-800/50 backdrop-blur-sm rounded-xl border border-earth-gray-700
                         hover:bg-earth-gray-700/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 border-b border-earth-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-xl font-semibold text-earth-white group-hover:text-accent-blue 
                                   transition-colors tracking-tight">
                          {report.title}
                        </h3>
                        <span className={classNames(
                          'ml-3 px-2.5 py-1 text-xs font-medium rounded-lg tracking-wide',
                          report.status === 'published' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          report.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        )}>
                          {report.status}
                        </span>
                      </div>
                      <p className="mt-2 text-earth-gray-300 tracking-wide">{report.description}</p>
                    </div>
                  </div>

                  {/* Report Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div>
                      <div className="text-earth-gray-400 text-sm tracking-wide">Student</div>
                      <div className="text-earth-white mt-1 tracking-wide">{report.student}</div>
                    </div>
                    <div>
                      <div className="text-earth-gray-400 text-sm tracking-wide">Type</div>
                      <div className="text-earth-white mt-1 tracking-wide">{report.type}</div>
                    </div>
                    <div>
                      <div className="text-earth-gray-400 text-sm tracking-wide">Generated</div>
                      <div className="text-earth-white mt-1 tracking-wide">{report.date}</div>
                    </div>
                    <div>
                      <div className="text-earth-gray-400 text-sm tracking-wide">Author</div>
                      <div className="text-earth-white mt-1 tracking-wide">{report.author}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Key Findings */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-earth-gray-300 mb-3 tracking-wide">
                      Key Findings
                    </h4>
                    <ul className="space-y-2">
                      {report.findings.map((finding, i) => (
                        <li key={i} className="flex items-start">
                          <ChartBarIcon className="h-5 w-5 text-accent-blue mr-2 mt-0.5" />
                          <span className="text-earth-gray-300 tracking-wide">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-8">
                    <button className="flex-1 flex items-center justify-center px-4 py-3.5 
                                   bg-earth-gray-700/50 text-earth-white rounded-xl
                                   hover:bg-earth-gray-600 transition-colors border border-earth-gray-600
                                   hover:border-earth-gray-500 font-medium tracking-wide">
                      <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                      Download PDF
                    </button>
                    <button className="flex-1 flex items-center justify-center px-4 py-3.5 
                                   bg-accent-blue text-earth-white rounded-xl hover:bg-blue-600 
                                   transition-colors shadow-lg shadow-accent-blue/20 font-medium tracking-wide">
                      <DocumentIcon className="h-5 w-5 mr-2" />
                      View Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
