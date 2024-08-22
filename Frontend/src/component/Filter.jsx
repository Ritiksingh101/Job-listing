import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaClock, FaBookmark, FaBriefcase } from 'react-icons/fa';
const Filter = () => {
  return (
    <div className="flex p-6  min-h-screen">
      {/* Filters Section */}
      <div  className='w-[30%] bg-gray-100 p-[20px]'>
      <div className="w-[100%]   rounded-lg ">
        <div className="mb-8">
          <div  className=' bg-white p-[10px] shadow'>
          <h3 className="text-xl font-bold mb-4">Job Category</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Health Care (80)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Account & Finance (80)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Transportation (100)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Medical & Finance (120)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Development (30)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Engineering (10)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Receptionist (70)
            </li>
            <li className="flex items-center">
              <input type="radio" name="category" className="mr-2" />
              Non-Profit Org. (100)
            </li>
          </ul>
          </div>
        </div>
        <div  className='bg-white p-[10px] shadow'>
        <h3 className="text-xl font-bold mb-4">Type of Employments</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Full Time (30)
            </li>
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Freelance (10)
            </li>
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Part Time (100)
            </li>
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Remote (60)
            </li>
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Temporary (40)
            </li>
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Permanent (30)
            </li>
            <li className="flex items-center">
              <input type="radio" name="employment" className="mr-2" />
              Internship (80)
            </li>
          </ul>
        </div>
      </div>
      </div>
      

      {/* Job Card Section */}
      <div className=' w-[75%] p-[10px] flex  flex-col gap-5'>
      <div className=' w-[100%] flex  justify-between pl-[10px]'>
      <label className='text-gray-500 '>Showing results 10 in 200 jobs list</label>
        <div className="flex items-center h-[2vh]  mt-[8px]  gap-5 ">
        <select className="px-3 py-2 w-[100%] text-[14px] font-thin text-gray-600 outline-none shadow bg-white f">
          <option value="">Shot by (Default)</option>
          <option value="IT">full time </option>
          <option value="Finance">part time</option>
          <option value="Healthcare">Remote</option>
          <option value="Education">internship</option>
          <option value="Marketing">Freelance</option>
       </select>
       <i class="fa fa-qrcode fa-lg text-[#00A7AC]" aria-hidden="true"></i>
       <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
   </div>
  </div>
      <div className='h-[100vh] w-[100%] border'>
      <div className="w-[38%] p-6">
        <div className="bg-white p-3  rounded-lg shadow-lg">
          <div className="flex justify-between items-start relative ">
            <div>
              <img  src="https://jobes-nextjs.vercel.app/assets/images/bg/job-list-1.png" alt="Job" className="h-full w-full mb-4" />
              <FaBookmark className="text-white text-xl absolute right-2 top-2" />
              <h2 className="text-xl font-bold mb-2">WordPress Developer</h2>
              <p className="text-gray-600 mb-1">Bistro Tech Ltd</p>
              <p className="text-gray-600">Deadline: 2 April, 2023</p>
            </div>
          
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <FaDollarSign className="text-gray-400 mr-2" />
              <p className="text-gray-600">Salary: <span className="font-bold">$60-$90</span> / Per Hour</p>
            </div>
            <div className="flex items-center mb-2">
              <FaBriefcase className="text-gray-400 mr-2" />
              <p className="text-gray-600">Experience: <span className="font-bold">3-3.5 Years</span></p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <p className="text-gray-600">Location: <span className="font-bold">Dhaka, Bangladesh</span></p>
            </div>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md">Apply Now</button>
          </div>
        </div>
      </div>
      </div>
     </div>
      
    </div>
  );
};

export default Filter;
