import React, { useState } from 'react';
import {
  BookOpenIcon,
  ClockIcon,
  UsersIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

// Sample lesson data
const lessons = [
  {
    id: 1,
    title: 'Introduction to Colors',
    subject: 'Art & Creativity',
    duration: '45 minutes',
    status: 'Active',
    students: 24,
    completionRate: 85,
    description: 'Learn about primary and secondary colors through interactive activities.',
    nextSession: '2025-02-17T10:00:00Z'
  },
  {
    id: 2,
    title: 'Numbers 1-10',
    subject: 'Mathematics',
    duration: '30 minutes',
    status: 'Draft',
    students: 18,
    completionRate: 0,
    description: 'Basic number recognition and counting practice for beginners.',
    nextSession: '2025-02-18T11:30:00Z'
  },
  {
    id: 3,
    title: 'Story Time: The Little Red Hen',
    subject: 'Language & Literacy',
    duration: '40 minutes',
    status: 'Active',
    students: 22,
    completionRate: 65,
    description: 'Interactive storytelling session with comprehension activities.',
    nextSession: '2025-02-17T14:00:00Z'
  }
];

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Status badge styles
const getStatusStyles = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-green-500/20 text-green-400 border border-green-500/30';
    case 'Draft':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    case 'Completed':
      return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
};

const Lessons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter lessons based on search term
  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-earth-black text-earth-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent" />
          <h1 className="relative text-5xl md:text-6xl font-semibold text-earth-white mb-6 tracking-tight">
            Lesson Planning
          </h1>
          <p className="relative text-xl text-earth-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Create and manage engaging learning experiences
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
                  placeholder="Search lessons..."
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
                  Create Lesson
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
                      Subject Area
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Language & Literacy</option>
                      <option>Art & Creativity</option>
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
                      <option>Active</option>
                      <option>Draft</option>
                      <option>Completed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Duration
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>Any Duration</option>
                      <option>15-30 minutes</option>
                      <option>30-45 minutes</option>
                      <option>45+ minutes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-earth-gray-300 text-sm font-medium mb-2 tracking-wide">
                      Sort By
                    </label>
                    <select className="w-full px-4 py-3 bg-earth-gray-700/50 backdrop-blur-sm rounded-lg
                                   text-base text-earth-white border border-earth-gray-600 
                                   focus:outline-none focus:ring-2 focus:ring-accent-blue/50 tracking-wide">
                      <option>Recently Updated</option>
                      <option>Title (A-Z)</option>
                      <option>Duration</option>
                      <option>Completion Rate</option>
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
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Total Lessons</h3>
                <BookOpenIcon className="h-5 w-5 text-accent-blue" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">156</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Active curriculum</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Active Sessions</h3>
                <ClockIcon className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">42</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Currently running</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Student Engagement</h3>
                <UsersIcon className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">89%</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Average participation</div>
            </div>
            <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-earth-gray-300 font-medium tracking-wide">Completion Rate</h3>
                <ChartBarIcon className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-3xl font-semibold text-earth-white tracking-tight">78%</div>
              <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Last 30 days</div>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {filteredLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="group bg-earth-gray-800/50 backdrop-blur-sm rounded-xl border border-earth-gray-700
                         hover:bg-earth-gray-700/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-earth-white group-hover:text-accent-blue 
                                 transition-colors tracking-tight">
                        {lesson.title}
                      </h3>
                      <p className="text-earth-gray-400 tracking-wide">{lesson.subject}</p>
                    </div>
                    <span className={cn(
                      'px-2.5 py-1 text-xs font-medium rounded-lg tracking-wide',
                      getStatusStyles(lesson.status)
                    )}>
                      {lesson.status}
                    </span>
                  </div>

                  {/* Lesson Details */}
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center text-earth-gray-300">
                      <ClockIcon className="h-5 w-5 text-earth-gray-400 mr-2" />
                      <span className="tracking-wide">{lesson.duration}</span>
                    </div>
                    <div className="flex items-center text-earth-gray-300">
                      <UsersIcon className="h-5 w-5 text-earth-gray-400 mr-2" />
                      <span className="tracking-wide">{lesson.students} students enrolled</span>
                    </div>
                    <p className="text-earth-gray-300 tracking-wide">
                      {lesson.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  {lesson.status === 'Active' && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-earth-gray-300 text-sm tracking-wide">Completion Rate</span>
                        <span className="text-earth-white font-medium tracking-wide">
                          {lesson.completionRate}%
                        </span>
                      </div>
                      <div className="h-2 bg-earth-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-blue rounded-full transition-all duration-300"
                          style={{ width: `${lesson.completionRate}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-6">
                    <button className="flex-1 flex items-center justify-center px-4 py-3 
                                   bg-earth-gray-700/50 text-earth-white rounded-xl
                                   hover:bg-earth-gray-600 transition-colors border border-earth-gray-600
                                   hover:border-earth-gray-500 font-medium tracking-wide">
                      View Details
                    </button>
                    <button className="flex-1 flex items-center justify-center px-4 py-3 
                                   bg-accent-blue text-earth-white rounded-xl hover:bg-blue-600 
                                   transition-colors shadow-lg shadow-accent-blue/20 font-medium tracking-wide">
                      Start Session
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

export default Lessons;
