import React, { useState } from 'react';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import '../styles/fonts.css';

// Sample student data
const students = [
  {
    id: 1,
    name: 'Sarah Johnson',
    grade: 1,
    status: 'On Track',
    progress: 85,
    avatar: 'https://picsum.photos/200/300',
    recentAchievement: 'Completed all weekly assignments'
  },
  {
    id: 2,
    name: 'Michael Chen',
    grade: 2,
    status: 'Needs Support',
    progress: 65,
    avatar: 'https://picsum.photos/200/301',
    recentAchievement: 'Improved math test scores by 15%'
  },
  {
    id: 3,
    name: 'Emma Davis',
    grade: 1,
    status: 'Exceeding',
    progress: 95,
    avatar: 'https://picsum.photos/200/302',
    recentAchievement: 'Achieved perfect attendance this month'
  }
];

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Status badge styles
const getStatusStyles = (status) => {
  switch (status) {
    case 'On Track':
      return 'bg-green-500/20 text-green-400 border border-green-500/30';
    case 'Needs Support':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    case 'Exceeding':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
};

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-earth-black text-earth-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent" />
          <h1 className="relative text-5xl md:text-6xl font-semibold text-earth-white mb-6 tracking-tight">
            Student Progress
          </h1>
          <p className="relative text-xl text-earth-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Track and manage student development milestones
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
                  placeholder="Search students..."
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
                  Add Student
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
                      Grade Level
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Grades</option>
                      <option>Grade 1</option>
                      <option>Grade 2</option>
                      <option>Grade 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Progress Status
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Status</option>
                      <option>On Track</option>
                      <option>Needs Support</option>
                      <option>Exceeding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Learning Path
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Paths</option>
                      <option>Standard</option>
                      <option>Advanced</option>
                      <option>Specialized</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Sort By
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>Name (A-Z)</option>
                      <option>Name (Z-A)</option>
                      <option>Grade Level</option>
                      <option>Progress Status</option>
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
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Total Students</h3>
                <UserGroupIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">248</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Active enrollment</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Meeting Goals</h3>
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">186</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">75% of total</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Needs Support</h3>
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">62</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">25% of total</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Recent Milestones</h3>
                <ChartBarIcon className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">28</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Last 7 days</div>
            </div>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="group bg-earth-gray-800/50 backdrop-blur-sm rounded-xl border border-earth-gray-700
                         hover:bg-earth-gray-700/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-12 w-12 rounded-full border-2 border-earth-gray-600"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-earth-white group-hover:text-accent-blue 
                                   transition-colors tracking-tight">
                          {student.name}
                        </h3>
                        <p className="text-earth-gray-400 tracking-wide">Grade {student.grade}</p>
                      </div>
                    </div>
                    <span className={cn(
                      'px-2.5 py-1 text-xs font-medium rounded-lg tracking-wide',
                      getStatusStyles(student.status)
                    )}>
                      {student.status}
                    </span>
                  </div>

                  {/* Progress Overview */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-earth-gray-300 text-sm tracking-wide">Overall Progress</span>
                      <span className="text-earth-white font-medium tracking-wide">{student.progress}%</span>
                    </div>
                    <div className="h-2 bg-earth-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-blue rounded-full transition-all duration-300"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Recent Achievement */}
                  <div className="mt-6 p-4 bg-earth-gray-700/50 rounded-lg border border-earth-gray-600">
                    <div className="flex items-start">
                      <AcademicCapIcon className="h-5 w-5 text-accent-blue mt-0.5" />
                      <div className="ml-3">
                        <h4 className="text-earth-white font-medium tracking-wide">Recent Achievement</h4>
                        <p className="text-earth-gray-300 text-sm mt-1 tracking-wide">
                          {student.recentAchievement}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-6">
                    <button className="flex-1 flex items-center justify-center px-4 py-3 
                                   bg-earth-gray-700/50 text-earth-white rounded-xl
                                   hover:bg-earth-gray-600 transition-colors border border-earth-gray-600
                                   hover:border-earth-gray-500 font-medium tracking-wide">
                      View Progress
                    </button>
                    <button className="flex-1 flex items-center justify-center px-4 py-3 
                                   bg-accent-blue text-earth-white rounded-xl hover:bg-blue-600 
                                   transition-colors shadow-lg shadow-accent-blue/20 font-medium tracking-wide">
                      Edit Profile
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

export default Students;
