
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEye, faUserFriends, faStar, faClock, faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

const CompanyCandidateStats = () => {
  return (
    <div className='px-[5%]'>
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src="profile-image-url" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Hello,</h2>
            <h1 className="text-2xl font-bold text-teal-600">Elite Hangstroman</h1>
          </div>
        </div>
        <button className="flex items-center px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
          <FontAwesomeIcon icon={faEdit} className="h-6 w-6 mr-2" />
          Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<FontAwesomeIcon icon={faBriefcase} className="h-10 w-10 text-teal-500" />} label="Total Applied" value="30+" />
        <StatCard icon={<FontAwesomeIcon icon={faEye} className="h-10 w-10 text-blue-500" />} label="Total View" value="2500+" />
        <StatCard icon={<FontAwesomeIcon icon={faUserFriends} className="h-10 w-10 text-purple-500" />} label="Our Followers" value="250+" />
        <StatCard icon={<FontAwesomeIcon icon={faStar} className="h-10 w-10 text-yellow-500" />} label="Highlighted Jobs" value="154+" />
        <StatCard icon={<FontAwesomeIcon icon={faClock} className="h-10 w-10 text-yellow-500" />} label="Pending Job" value="120+" />
        <StatCard icon={<FontAwesomeIcon icon={faCheckCircle} className="h-10 w-10 text-green-500" />} label="Closed Jobs" value="900+" />
        <StatCard icon={<FontAwesomeIcon icon={faCheckCircle} className="h-10 w-10 text-green-500" />} label="Highlighted Jobs" value="154+" />
        <StatCard icon={<FontAwesomeIcon icon={faCheckCircle} className="h-10 w-10 text-green-500" />} label="Our Followers" value="500+" />
      </div>
    </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="flex items-center p-4 bg-white shadow rounded">
    <div className="mr-4">{icon}</div>
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-700">{value}</p>
    </div>
  </div>
);

export default CompanyCandidateStats;
