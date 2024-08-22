import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faList, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
function CandidateDashboardAppliedList() {
  return (
    <div className='p-[5%]'>
   
       <div className="p-8">
      <h2 className="text-xl font-bold mb-6">New Applied List:</h2>
      <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-4">
        <div className="flex items-center">
          <img src="profile-image-url-1" alt="Mr. Willium Jacson" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Mr. Willium Jacson</h3>
            <p className="text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Internation Colliegate University</p>
            <p className="text-gray-500">Applied On: 02 April, 2023</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <h4 className="text-md font-bold">Colliegate Ltd <span className="text-gray-500">(Teaching Assistant)</span></h4>
          <p className="text-gray-500">Experience: 2+ Years</p>
          <p className="text-gray-500">Salary: $800/ Per Month</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Shortlist
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
            Rejected
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-4">
        <div className="flex items-center">
          <img src="profile-image-url-2" alt="Robert Williamson" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Robert Williamson</h3>
            <p className="text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />London University</p>
            <p className="text-gray-500">Applied On: 02 April, 2023</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <h4 className="text-md font-bold">UI/UX Company Ltd <span className="text-gray-500">(UI/UX Designer)</span></h4>
          <p className="text-gray-500">Experience: 2+ Years</p>
          <p className="text-gray-500">Salary: $800/ Per Month</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Shortlist
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
            Rejected
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-4">
        <div className="flex items-center">
          <img src="profile-image-url-3" alt="Robertson Harry" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Robertson Harry</h3>
            <p className="text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Royals Republic University</p>
            <p className="text-gray-500">Applied On: 02 April, 2023</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <h4 className="text-md font-bold">Bistro.Tech Ltd <span className="text-gray-500">(Teaching Assistant)</span></h4>
          <p className="text-gray-500">Experience: 2+ Years</p>
          <p className="text-gray-500">Salary: $800/ Per Month</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Shortlist
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
            Rejected
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-4">
        <div className="flex items-center">
          <img src="profile-image-url-4" alt="Hari Jonson" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Hari Jonson</h3>
            <p className="text-gray-500"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Bistro Mycol University</p>
            <p className="text-gray-500">Applied On: 02 April, 2023</p>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <h4 className="text-md font-bold">Elite Author <span className="text-gray-500">(Teaching Assistant)</span></h4>
          <p className="text-gray-500">Experience: 2+ Years</p>
          <p className="text-gray-500">Salary: $800/ Per Month</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Shortlist
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
            Rejected
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CandidateDashboardAppliedList
