import axios from 'axios';
import React, { useState } from 'react'
import { FaBriefcase, FaDollarSign, FaCalendarAlt, FaTag, FaFileAlt } from 'react-icons/fa';

function JobPostForm() {
   
  console



  const[value,setValue]=useState({})
  const postJobdata=()=>{
    axios.post("http://localhost:5000/api/jobdetails",value).then((res)=>alert("data posted"),
    (err)=>alert(err)
  )
  }
  // const postdata=()=>{
  //   axios.post("http://localhost:5000/api/jobdetails",value).then((res)=>alert("data posted")),
  //   (err)=>alert(err)
  // }

  // const remove=()=>{
  //   axios.delete("http://localhost:5000/api/jobdetails/" + "66c71aed3142384e2d4efbaf").then((res)=>alert("remove"))
  // }


  return (
    <div>
      {JSON.stringify(value)}
      <div className="bg-white p-8 border rounded-lg max-w-4xl mx-auto m-8">
      <h2 className="text-2xl font-bold mb-6">Job Information:</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Job Title*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaBriefcase className="text-gray-400 mr-3" />
              <input onChange={(e)=>setValue({...value,Title:e.target.value})}
                type="text" 
                placeholder="Job Title*" 
                className="w-full border-none focus:ring-0 outline-none" 
                defaultValue="Senior UI/UX Engineer" 
              />
            
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Job Category*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaBriefcase className="text-gray-400 mr-3" />
              <select onChange={(e)=>setValue({...value,Category:e.target.value})} className="w-full border-none focus:ring-0 outline-none">
                <option value="ui-ux-designer">UI/UX Designer</option>
                <option value="frontend-developer">Frontend Developer</option>
                <option value="backend-developer">Backend Developer</option>
                <option value="fullstack-developer">Fullstack Developer</option>
                <option value="product-manager">Product Manager</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Vacancies*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaTag className="text-gray-400 mr-3" />
              <input  onChange={(e)=>setValue({...value,Vacancies:e.target.value})}
                type="text" 
                placeholder="Vacancies*" 
                className="w-full border-none focus:ring-0 outline-none" 
                defaultValue="07 Person"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Budget/Salary*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaDollarSign className="text-gray-400 mr-3" />
              <div  onChange={(e)=>setValue({...value,Salary:e.target.value})} className="flex items-center space-x-4">
                <label>
                  <input type="radio" name="salary" value="fixed" className="mr-2 outline-none" />
                  Fixed Salary
                </label>
                <label>
                  <input type="radio" name="salary" value="range" className="mr-2 outline-none" />
                  Salary Range
                </label>
                <label>
                  <input type="radio" name="salary" value="negotiable" className="mr-2 outline-none" />
                  Negotiable
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Job Type*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaBriefcase className="text-gray-400 mr-3" />
              <select onChange={(e)=>setValue({...value,Jobtype:e.target.value})} className="w-full border-none focus:ring-0 outline-none">
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Experience Level*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaBriefcase className="text-gray-400 mr-3" />
              <input onChange={(e)=>setValue({...value,Experiencelevel:e.target.value})}
                type="text" 
                placeholder="Experience Level*" 
                className="w-full border-none focus:ring-0 outline-none" 
                defaultValue="Type Experiences"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Job Tags*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaTag className="text-gray-400 mr-3" />
              <input  onChange={(e)=>setValue({...value,Jobtag:e.target.value})}
                type="text" 
                placeholder="Job Tags*" 
                className="w-full border-none focus:ring-0 outline-none" 
                defaultValue="Type Tag and press enter..."
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Deadline*</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaCalendarAlt className="text-gray-400 mr-3" />
              <input  onChange={(e)=>setValue({...value,Lastdate:e.target.value})}
                type="date" 
                className="w-full border-none focus:ring-0 outline-none" 
                defaultValue="2024-08-01"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Job Description*</label>
          <div className="border border-gray-300 rounded-md px-3 py-2">
            <FaFileAlt className="text-gray-400 mr-3" />
            <textarea  onChange={(e)=>setValue({...value,Description:e.target.value})}
              placeholder="Job Description*" 
              className="w-full border-none focus:ring-0 h-32 outline-none" 
            ></textarea>
          </div>
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            className="mr-2" 
          />
          <label>
            Here, I accepted company terms & conditions.
          </label>
        </div>

        <button  onClick={()=>postJobdata()}
          type="submit" 
          className="bg-teal-500 text-white px-6 py-2 rounded-md outline-none"
        >
          Post Now
        </button>
      </form>
    </div>
    
    </div>
  )
}

export default JobPostForm
