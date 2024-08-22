import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEye, faEdit, faCalendarAlt, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function JobListComp() {
  return (
    <div>
        <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Latest Job List:</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700">
            Create Job Post
          </button>
        </div>

        {/* Search Section */}
        <div className="flex space-x-4 mb-6">
          <div className="relative flex-1">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by job title"
              className="w-full border border-gray-300 rounded-md pl-10 py-2"
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              className="border border-gray-300 rounded-md pl-10 py-2"
            />
          </div>
          <div>
            <select className="border border-gray-300 rounded-md py-2 px-3">
              <option>Show per page 05</option>
              <option>Show per page 10</option>
              <option>Show per page 20</option>
            </select>
          </div>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-600">
            Search
          </button>
        </div>

        {/* Job Table */}
        <table className="min-w-full bg-white rounded-md overflow-hidden">
          <thead>
            <tr className="bg-teal-600 text-white text-left">
              <th className="py-3 px-6 font-semibold text-sm">Job Title</th>
              <th className="py-3 px-6 font-semibold text-sm">Applications</th>
              <th className="py-3 px-6 font-semibold text-sm">Matched</th>
              <th className="py-3 px-6 font-semibold text-sm">Shortlisted</th>
              <th className="py-3 px-6 font-semibold text-sm">Viewed</th>
              <th className="py-3 px-6 font-semibold text-sm">Not Viewed</th>
              <th className="py-3 px-6 font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {["Manager- Account & Finance", "Assistant Laboratorist", "Senior React Native", "WordPress Developer"].map((job, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6 flex items-center space-x-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{job}</h3>
                    <div className="text-gray-500 text-sm flex items-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                      Deadline: 02 April, 2023
                    </div>
                    {/* Toggle switch */}
                    <label className="relative inline-flex items-center cursor-pointer mt-2">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
                    </label>
                  </div>
                </td>
                <td className="py-4 px-6 text-blue-500 font-medium">1000</td>
                <td className="py-4 px-6 text-red-500 font-medium">400</td>
                <td className="py-4 px-6 text-yellow-500 font-medium">700</td>
                <td className="py-4 px-6 text-orange-500 font-medium">300</td>
                <td className="py-4 px-6 text-pink-500 font-medium">100</td>
                <td className="py-4 px-6 flex space-x-3">
                  <FontAwesomeIcon icon={faEye} className="text-teal-500 cursor-pointer hover:text-teal-600" />
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500 cursor-pointer hover:text-blue-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-500">06 Results Showing in 20 jobs</div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer text-gray-500 hover:text-gray-600" />
            {[1, 2, 3].map((page) => (
              <span key={page} className="cursor-pointer px-2 py-1 text-sm font-medium text-white bg-teal-600 rounded-md">
                {page < 2 ? `0${page}` : page}
              </span>
            ))}
            <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer text-gray-500 hover:text-gray-600" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default JobListComp
