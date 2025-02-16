import React from 'react';
import {
  UserGroupIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  StarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Sample data
const recentActivities = [
  {
    id: 1,
    type: 'lesson',
    title: 'Colors and Shapes',
    time: '10:00 AM',
    students: 12,
    completion: 85
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Weekly Progress Goals Met',
    time: '9:30 AM',
    students: 8,
    completion: 100
  },
  {
    id: 3,
    type: 'milestone',
    title: 'Reading Fundamentals',
    time: 'Yesterday',
    students: 15,
    completion: 92
  }
];

const upcomingLessons = [
  {
    id: 1,
    title: 'Numbers Fun',
    time: '2:00 PM',
    enrolled: 18,
    subject: 'Mathematics'
  },
  {
    id: 2,
    title: 'Story Time',
    time: '3:30 PM',
    enrolled: 22,
    subject: 'Language & Literacy'
  },
  {
    id: 3,
    title: 'Art Expression',
    time: 'Tomorrow, 10:00 AM',
    enrolled: 16,
    subject: 'Art & Creativity'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-earth-black text-earth-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent" />
          <h1 className="relative text-5xl md:text-6xl font-semibold text-earth-white mb-6 tracking-tight">
            Welcome Back
          </h1>
          <p className="relative text-xl text-earth-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your daily overview of student progress and upcoming activities
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-earth-gray-300 font-medium tracking-wide">Active Students</h3>
              <UserGroupIcon className="h-5 w-5 text-accent-blue" />
            </div>
            <div className="text-3xl font-semibold text-earth-white tracking-tight">248</div>
            <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">12 new this week</div>
          </div>
          <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-earth-gray-300 font-medium tracking-wide">Lessons Today</h3>
              <BookOpenIcon className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-3xl font-semibold text-earth-white tracking-tight">8</div>
            <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">3 completed</div>
          </div>
          <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-earth-gray-300 font-medium tracking-wide">Average Progress</h3>
              <ChartBarIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="text-3xl font-semibold text-earth-white tracking-tight">85%</div>
            <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">+5% from last week</div>
          </div>
          <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-earth-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-earth-gray-300 font-medium tracking-wide">Time Engaged</h3>
              <ClockIcon className="h-5 w-5 text-purple-400" />
            </div>
            <div className="text-3xl font-semibold text-earth-white tracking-tight">4.2h</div>
            <div className="text-sm text-earth-gray-400 mt-1 tracking-wide">Average per student</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Recent Activities */}
          <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl border border-earth-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-earth-white tracking-tight">Recent Activities</h2>
              <Link 
                to="/activities" 
                className="text-earth-gray-400 hover:text-earth-white text-sm tracking-wide transition-colors"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div 
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 bg-earth-gray-700/50 rounded-lg border border-earth-gray-600"
                >
                  <div className="flex-shrink-0">
                    {activity.type === 'lesson' ? (
                      <BookOpenIcon className="h-6 w-6 text-accent-blue" />
                    ) : activity.type === 'achievement' ? (
                      <StarIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                      <ArrowTrendingUpIcon className="h-6 w-6 text-green-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-earth-white font-medium tracking-wide">{activity.title}</p>
                    <div className="flex items-center mt-1 space-x-4">
                      <span className="text-earth-gray-400 text-sm tracking-wide">
                        {activity.time}
                      </span>
                      <span className="text-earth-gray-400 text-sm tracking-wide">
                        {activity.students} students
                      </span>
                      <span className="text-earth-gray-400 text-sm tracking-wide">
                        {activity.completion}% completion
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Lessons */}
          <div className="bg-earth-gray-800/50 backdrop-blur-sm rounded-xl border border-earth-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-earth-white tracking-tight">Upcoming Lessons</h2>
              <Link 
                to="/lessons" 
                className="text-earth-gray-400 hover:text-earth-white text-sm tracking-wide transition-colors"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className="flex items-start space-x-4 p-4 bg-earth-gray-700/50 rounded-lg border border-earth-gray-600"
                >
                  <div className="flex-shrink-0">
                    <AcademicCapIcon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-earth-white font-medium tracking-wide">{lesson.title}</p>
                    <div className="flex items-center mt-1 space-x-4">
                      <span className="text-earth-gray-400 text-sm tracking-wide">
                        {lesson.time}
                      </span>
                      <span className="text-earth-gray-400 text-sm tracking-wide">
                        {lesson.enrolled} enrolled
                      </span>
                      <span className="text-earth-gray-400 text-sm tracking-wide">
                        {lesson.subject}
                      </span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 px-3 py-1 bg-accent-blue rounded-lg text-sm font-medium text-earth-white
                                 hover:bg-blue-600 transition-colors shadow-lg shadow-accent-blue/20 tracking-wide">
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
