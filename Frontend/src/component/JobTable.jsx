import React from 'react';

const JobTable = () => {
  const jobs = [
    {
      title: 'Senior UI/UX Designer',
      location: 'New-York, USA',
      salary: '$60-$90 / Per Hour',
      date: '03/07/2022',
      company: 'Tech.Bath Com...',
      status: 'Viewed',
      statusColor: 'bg-purple-500',
      icon: 'https://via.placeholder.com/40',
      daysAgo: '1 days ago',
    },
    {
      title: 'React JS Developer',
      location: 'Dhaka, Bangladesh',
      salary: '$80-$100 / Per Hour',
      date: '07/07/2022',
      company: 'Gangster Group',
      status: 'Interview',
      statusColor: 'bg-yellow-500',
      icon: 'https://via.placeholder.com/40',
      daysAgo: '1 days ago',
    },
    {
      title: 'WordPress Developer',
      location: 'West London, UK',
      salary: '$30K-$40K / Monthly',
      date: '10/07/2022',
      company: 'Zoomly.Co Ltd',
      status: 'Canceled',
      statusColor: 'bg-red-500',
      icon: 'https://via.placeholder.com/40',
      daysAgo: '2 days ago',
    },
    {
      title: 'Mern-Stack Developer',
      location: 'New-York, USA',
      salary: '$20-$50 / Per Hour',
      date: '13/07/2022',
      company: 'Marko-land Ltd',
      status: 'Viewed',
      statusColor: 'bg-purple-500',
      icon: 'https://via.placeholder.com/40',
      daysAgo: '1 week ago',
    },
    {
      title: 'PHP Developer',
      location: 'New-York, USA',
      salary: '$40K-$60K / Per Month',
      date: '18/08/2022',
      company: 'Bistro.Tech Group',
      status: 'Success',
      statusColor: 'bg-teal-500',
      icon: 'https://via.placeholder.com/40',
      daysAgo: '2 weeks ago',
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Applied Jobs:</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-teal-500 text-white">
              <th className="text-left py-3 px-4 font-semibold">Job Title</th>
              <th className="text-left py-3 px-4 font-semibold">Apply Date</th>
              <th className="text-left py-3 px-4 font-semibold">Company</th>
              <th className="text-left py-3 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={job.icon}
                    alt={job.title}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">
                      <p>📍 {job.location}</p>
                      <p>💰 Salary: {job.salary}</p>
                      <p>📅 {job.daysAgo}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700">{job.date}</td>
                <td className="py-4 px-4 text-teal-500">{job.company}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${job.statusColor}`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;
