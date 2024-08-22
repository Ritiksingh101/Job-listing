import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [dropDownFindJobs, setDropDownFindJobs] = useState(false);
  const [dropDownPages, setDropDownPages] = useState(false);
  const [dropDownEmployers, setDropDownEmployers] = useState(false);
  const navigate = useNavigate();

  // const toggleDropdown = (dropdownSetter) => {
  //   dropdownSetter(prevState => !prevState);
  // };

  return (
    <header className="bg-white shadow-md py-4">
      <div
        
        className="mx-auto flex justify-between items-center px-10 "
      >
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img
            src="https://jobes-nextjs.vercel.app/assets/images/header1-logo.svg"
            alt="Logo"
          />
        </div>
        {/* User Actions */}
        <div className="flex flex-col w-[80%] gap-6">
          <div className="">
            <p className="text-gray-700 text-[1.5rem]">
              Welcome to Our Job Portal!{" "}
              <a href="#save-jobs" className="text-teal-500">
                Save Jobs
              </a>
            </p>
            <div className="relative"></div>
          </div>
          <div className="flex justify-between items-center">
            <nav className="flex items-center gap-20 text-[1.2rem]">
              <a
                onClick={() => navigate("/")}
                href="#home"
                className="text-teal-700 font-semibold hover:text-gray-500  px-6 cursor-pointer pb-3"
              >
                Home
              </a>
              <div className="relative">
                <button
                  onMouseOver={() => setDropDownFindJobs(true)}
                  onMouseLeave={() => setDropDownFindJobs(false)}
                  className="text-gray-700 hover:text-teal-500 cursor-pointer pb-3"
                >
                  Find Jobs
                  {dropDownFindJobs && (
                    <div className="absolute left-0  mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                      <button
                        onClick={() => navigate("/jobcategory")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                      >
                        Job Category
                      </button>
                      <button
                        onClick={() => navigate("/joblisting")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                      >
                        Job Listing
                      </button>
                      <button
                        onClick={() => navigate("/jobdetail")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                      >
                        Job Details
                      </button>
                    </div>
                  )}
                </button>
              </div>
              <div className="relative">
                <button
                  onMouseOver={() => setDropDownPages(true)}
                  onMouseLeave={() => setDropDownPages(false)}
                  className="text-gray-700 hover:text-teal-500 cursor-pointer pb-3"
                >
                  Pages
                  {dropDownPages && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <button
                      onClick={() => navigate("/candidatedashboard")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                    >
                      Dashboard{" "}
                    </button>
                    <button
                      onClick={() => navigate("/postjob")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                    >
                      Post A Jobs{" "}
                    </button>
                    <button
                      onClick={() => navigate("/faqpages")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                    >
                      FAQ{" "}
                    </button>
                    <button
                      onClick={() => navigate("/signuppage")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                    >
                      Register{" "}
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-[100%] text-left hover:text-[#00A7AC]"
                    >
                      LogIn{" "}
                    </button>
                  </div>
                )}
                </button>
              
              </div>
              <div className="relative">
                <button
                  onMouseOver={() => setDropDownEmployers(true)}
                  onMouseLeave={() => setDropDownEmployers(false)}
                  className="text-gray-700 hover:text-teal-500 cursor-pointer pb-3"
                >
                  Employers
                  {dropDownEmployers && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <button
                      onClick={() => navigate("/companylisting")}
                      className="block w-[100%] text-left
                       px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#00A7AC]"
                    >
                      Company Listing{" "}
                    </button>
                    <button
                      onClick={() => navigate("/companydetailpage")}
                      className="block w-[100%] text-left
                       px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#00A7AC]"
                    >
                      Company Details
                    </button>
                    <button
                      onClick={() => navigate("/companydashboardpage")}
                      className="block w-[100%] text-left
                       px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#00A7AC] transition-all"
                    >
                      Company DashBoard
                    </button>
                  </div>
                )}
                </button>
               
              </div>
              <button
                onClick={() => {
                  navigate("/contactus");
                }}
                className="text-gray-700 hover:text-teal-500 cursor-pointer pb-3"
              >
                Contact
              </button>
            </nav>
            <div className="flex items-center justify-between gap-8">
              <button className="relative">
                <i className="fa fa-bell text-gray-700"></i>
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  5
                </span>
              </button>
              <button
                onClick={() => navigate("/login")}
                className="text-gray-700 border px-4 py-2 rounded hover:bg-teal-500"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/postjob")}
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 flex items-center justify-center gap-2"
              >
                Post Job <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          {/* Navigation Links */}
        </div>
      </div>
    </header>
  );
};

export default Header;
