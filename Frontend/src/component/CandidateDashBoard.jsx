import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Image from "../assets/profile.jpg";

const CompanyDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-start width-[100%] p-24  bg-red-100 ">
      <div className="w-[70%] flex  justify-center bg-yellow-400">
        <div
          className={`flex flex-col w-[40%]  rounded-md shadow-md bg-purple-400  ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full bg-teal-500 py-3 rounded-t-md text-white text-center">
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
          <ul className="flex flex-col w-full px-4 py-2 text-gray-600">
            <li className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              <Link to="/myprofile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  />
                </svg>
                My Profile
              </Link>
            </li>
            <li className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              <Link to="/appliedjobs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 000-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h6a1 1 0 000-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                Applied Jobs
              </Link>
            </li>
            <li className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              <Link to="/bookmarkjobs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 11-2 0V4zm-2 0a4 4 0 00-4 4v12a1 1 0 11-2 0V8a4 4 0 00-4-4H5zm7 10a1 1 0 11-2 0v4a1 1 0 112 0v-4zm-3-1a1 1 0 11-2 0v4a1 1 0 112 0v-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Bookmark Jobs
              </Link>
            </li>
            <li onClick={()=>navigate("/editresumepage")} className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17 3a1 1 0 000 2h-1.586a1 1 0 01-.707.293l-2.121 2.121A1 1 0 019.414 9.146l-2.121 2.121a1 1 0 01-.707.293H3a1 1 0 000 2h1.586a1 1 0 01.707.293l2.121 2.121A1 1 0 019.414 15.854l2.121 2.121a1 1 0 01.707.293H17a1 1 0 000-2h-1.586a1 1 0 01-.707-.293l-2.121-2.121A1 1 0 0111.586 11.707l-2.121-2.121a1 1 0 01-.707-.293H3a1 1 0 000-2h14zm-1 10a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                Edit Resume
              
            </li>
            <li className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              <Link to="/viewresume">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 000-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h6a1 1 0 000-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                View Resume
              </Link>
            </li>
            <li className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              <Link to="/settings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                  <path d="M9 12H5v2h4v-2zM9 8H5v2h4v-2z" />
                </svg>
                Settings
              </Link>
            </li>
            <li className="hover:bg-gray-200 cursor-pointer py-2 rounded-md">
              <Link to="/logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={toggleMenu}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 shadow-md cursor-pointer fixed bottom-10 right-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2H10a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col w-[70%] bg-green-300">
          <div className="flex flex-col gap-10 ">
            <div className="flex items-center">
              <img
                src="https://jobes-nextjs.vercel.app/assets/images/bg/author1.png"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <h1 className="text-xl font-bold">
                Hello, I'm <span className="text-teal-500">JACOLINE</span>{" "}
                Frankly
              </h1>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center w-40 h-32 bg-white rounded-md shadow-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 000-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h6a1 1 0 000-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-xl font-semibold">Total Applied</h2>
                <h3 className="text-3xl font-bold text-teal-500">250+</h3>
              </div>
              <div className="flex flex-col items-center w-40 h-32 bg-white rounded-md shadow-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-xl font-semibold">Saved Jobs</h2>
                <h3 className="text-3xl font-bold text-teal-500">150+</h3>
              </div>
              <div className="flex flex-col items-center w-40 h-32 bg-white rounded-md shadow-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 12.95l7.997-7.066A1 1 0 0119 5v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 01.003-.116z" />
                </svg>
                <h2 className="text-xl font-semibold">Message</h2>
                <h3 className="text-3xl font-bold text-teal-500">120+</h3>
              </div>
              <div className="flex flex-col items-center w-40 h-32 bg-white rounded-md shadow-md p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 10a2 2 0 110-4 2 2 0 010 4zm-3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <h2 className="text-xl font-semibold">Review CV</h2>
                <h3 className="text-3xl font-bold text-teal-500">500+</h3>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Current Applied Jobs:</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">
                    Apply Date
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <img
                        src="https://jobes-nextjs.vercel.app/assets/company-logo-1.svg"
                        alt="Company Logo"
                        className="w-8 h-8 mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          Senior UI/UX Designer
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">New-York, USA</span>{" "}
                          <span className="font-medium ml-2">
                            Salary: $60-$90/Per Hour
                          </span>{" "}
                          <span className="font-medium ml-2">1 days ago</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    03/07/2022
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    Tech.Bath Com...
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-white font-medium bg-purple-500 rounded-md hover:bg-purple-600">
                      Viewed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <img
                        src="https://jobes-nextjs.vercel.app/assets/company-logo-2.svg"
                        alt="Company Logo"
                        className="w-8 h-8 mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          React JS Developer
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Dhaka, Bangladesh</span>{" "}
                          <span className="font-medium ml-2">
                            Salary: $80-$100/Per Hour
                          </span>{" "}
                          <span className="font-medium ml-2">1 days ago</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    07/07/2022
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    Gangster Group
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-white font-medium bg-yellow-500 rounded-md hover:bg-yellow-600">
                      Interview
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <img
                        src="https://jobes-nextjs.vercel.app/assets/company-logo-3.svg"
                        alt="Company Logo"
                        className="w-8 h-8 mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          WordPress Developer
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">West London, UK</span>{" "}
                          <span className="font-medium ml-2">
                            Salary: $30K-$40K/Monthly
                          </span>{" "}
                          <span className="font-medium ml-2">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    10/07/2022
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    Zoomly.Co Ltd
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-white font-medium bg-orange-500 rounded-md hover:bg-orange-600">
                      Canceled
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <img
                        src="https://jobes-nextjs.vercel.app/assets/company-logo-4.svg"
                        alt="Company Logo"
                        className="w-8 h-8 mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          Mern-Stack Developer
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">New-York, USA</span>{" "}
                          <span className="font-medium ml-2">
                            Salary: $20-$50/Per Hour
                          </span>{" "}
                          <span className="font-medium ml-2">1 week ago</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    13/07/2022
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    Marko-land Ltd
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-white font-medium bg-purple-500 rounded-md hover:bg-purple-600">
                      Viewed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <img
                        src="https://jobes-nextjs.vercel.app/assets/company-logo-5.svg"
                        alt="Company Logo"
                        className="w-8 h-8 mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          PHP Developer
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">New-York, USA</span>{" "}
                          <span className="font-medium ml-2">
                            Salary: $40K-$60K/Per Month
                          </span>{" "}
                          <span className="font-medium ml-2">2 week ago</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    18/08/2022
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    Bistro.Tech Group
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button className="px-4 py-2 text-white font-medium bg-green-500 rounded-md hover:bg-green-600">
                      Success
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Recent Activity:</h2>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center justify-between w-full bg-white rounded-md shadow-md p-4">
                <img
                  src="https://jobes-nextjs.vercel.app/assets/company-logo-6.svg"
                  alt="Company Logo"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-medium text-gray-800">
                    Your application has accepted in 2 vacancies.
                  </p>
                  <p className="text-gray-600">7 hour ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full bg-white rounded-md shadow-md p-4">
                <img
                  src="https://jobes-nextjs.vercel.app/assets/company-logo-7.svg"
                  alt="Company Logo"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-medium text-gray-800">
                    1 Day Left For Your Premium Package To Expire.
                  </p>
                  <p className="text-gray-600">5 hour ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full bg-white rounded-md shadow-md p-4">
                <img
                  src="https://jobes-nextjs.vercel.app/assets/company-logo-8.svg"
                  alt="Company Logo"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-medium text-gray-800">
                    Your Job Posted Published On Position WordPress.
                  </p>
                  <p className="text-gray-600">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full bg-white rounded-md shadow-md p-4">
                <img
                  src="https://jobes-nextjs.vercel.app/assets/company-logo-9.svg"
                  alt="Company Logo"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-medium text-gray-800">
                    Your Job Posted Published On
                  </p>
                  <p className="text-gray-600">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
