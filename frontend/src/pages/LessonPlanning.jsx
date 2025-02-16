import React, { useState } from 'react';
import axios from 'axios';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function LessonPlanning() {
  const [lesson, setLesson] = useState({
    title: '',
    date: '',
    duration: 60,
    type: 'Individual',
    objectives: '',
    materials: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/lessons', lesson);
      if (response.status === 201) {
        setLesson({
          title: '',
          date: '',
          duration: 60,
          type: 'Individual',
          objectives: '',
          materials: '',
        });
      }
    } catch (error) {
      console.error('Error creating lesson:', error);
    }
  };

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Lesson Planning
            </h2>
          </div>
          <div className="mt-4 flex md:ml-4 md:mt-0">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              New Lesson
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Lesson Details</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Create a new lesson plan with learning objectives and required materials.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={lesson.title}
                      onChange={(e) => setLesson({ ...lesson, title: e.target.value })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={lesson.date}
                      onChange={(e) => setLesson({ ...lesson, date: e.target.value })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                    Lesson Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="type"
                      name="type"
                      value={lesson.type}
                      onChange={(e) => setLesson({ ...lesson, type: e.target.value })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Individual</option>
                      <option>Group</option>
                      <option>Workshop</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="objectives" className="block text-sm font-medium leading-6 text-gray-900">
                    Learning Objectives
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="objectives"
                      name="objectives"
                      rows={3}
                      value={lesson.objectives}
                      onChange={(e) => setLesson({ ...lesson, objectives: e.target.value })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="materials" className="block text-sm font-medium leading-6 text-gray-900">
                    Required Materials
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="materials"
                      name="materials"
                      rows={3}
                      value={lesson.materials}
                      onChange={(e) => setLesson({ ...lesson, materials: e.target.value })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end gap-x-3">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Save Lesson
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
