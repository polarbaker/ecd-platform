import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function StudentProgress() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
        if (response.data.length > 0) {
          setSelectedStudent(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Student Progress
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Student List */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {students.map((student) => (
                  <li key={student.id}>
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className={classNames(
                        'block w-full hover:bg-gray-50',
                        selectedStudent?.id === student.id ? 'bg-gray-50' : ''
                      )}
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm font-medium text-gray-900">{student.name}</p>
                          {selectedStudent?.id === student.id && (
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progress Details */}
          <div className="lg:col-span-2">
            {selectedStudent && (
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{selectedStudent.name}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Development Progress</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.entries(selectedStudent.progress).map(([area, value]) => (
                      <div key={area} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          {area.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-gray-900 h-2.5 rounded-full"
                                style={{ width: `${value}%` }}
                              ></div>
                            </div>
                            <span className="ml-2">{value}%</span>
                          </div>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <h4 className="text-sm font-medium text-gray-500">Recent Activities</h4>
                  <ul role="list" className="mt-4 space-y-4">
                    {selectedStudent.recent_activities.map((activity, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-gray-900">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
