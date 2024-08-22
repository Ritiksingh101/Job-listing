import React from "react";

const activities = [
  {
    icon: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/recent-activity-01.png",
    description: "Your application has accepted in 2 vacancies.",
    time: "7 hour ago",
  },
  {
    icon: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/recent-activity-02.png",
    description: "1 Day Left For Your Premium Package To Expire.",
    time: "5 hour ago",
  },
  {
    icon: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/recent-activity-02.png",
    description: "Your Job Posted Published On Position WordPress.",
    time: "1 hour ago",
  },
  {
    icon: "https://jobes-nextjs.vercel.app/assets/images/bg/company-logo/recent-activity-04.png",
    description: "Your Job Posted Published On Position Frontend Developer.",
    time: "1 hour ago",
  },
];

const RecentActivity = () => {
  return (
    <div className=" bg-white shadow-lg rounded-lg p-4 w-[70%] mt-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activity:</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center mb-4">
            <img src={activity.icon} alt="icon" className="w-10 h-10 mr-4" />
            <div>
              <p className="text-sm">{activity.description}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
