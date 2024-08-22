import React, { useState } from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Footer from '../component/Footer'

function EditResumePage() {
    const [basicInfo,setBasicInfo] = useState(true)
    const [profile,setProfile] = useState(false)
    const [education,setEducation] = useState(false)
    const [professionalInfo,setProfessionalInfo] = useState(false)
  return (
    <div>
        <Header/>
        <div className='flex p-[40px] gap-5'>
        <Sidebar/>
        <div className='w-[100%] p-[20px] flex flex-col gap-3'>
        <div className='w-[94%] flex gap-4'>
            <button onClick={()=>{ setProfile(false);setEducation(false);setProfessionalInfo(false);setBasicInfo(true)}} className='h-[7vh] w-[14.5%] border  rounded-md hover:bg-[#00A7AC]'>Basic Information</button>
            <button onClick={()=>{ setEducation(false);setBasicInfo(false);setProfessionalInfo(false);setProfile(true)}} className='h-[7vh] w-[14.5%] border  rounded-md hover:bg-[#00A7AC]'>Profile</button>
            <button onClick={()=>{ setBasicInfo(false);setProfessionalInfo(false);setProfile(false);setEducation(true)}} className='h-[7vh] w-[14.5%] border rounded-md  hover:bg-[#00A7AC]'>Education</button>
            <button onClick={()=>{ setBasicInfo(false);setEducation(false);setProfile(false);setProfessionalInfo(true)}}className='h-[7vh] w-[14.5%] border rounded-md  hover:bg-[#00A7AC]'>Professional Info</button>
        </div>
        <div className=' w-[60%] relative  bg-yellow-300'>
        {profile == true &&
        <div className=" mx-auto  p-6 bg-white shadow border-t-2 border-black rounded-md">
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Father's Name*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Mr. Norman Frankly" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Mother's Name*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Mrs. Marcoline Frankly" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Date of Birth*</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded-md" />
                    </div>

                    <div>
                        <label className="block text-gray-700">National Id*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="0988 **** **** **" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Present Address*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Your Address Here..." />
                        <label className="block mt-2">
                            <input type="checkbox" className="mr-2" />
                            Same as permanent Address
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-700">Permanent Address*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Your Address Here..." />
                    </div>

                    <div>
                        <label className="block text-gray-700">Marital Status*</label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                            <option>Widowed</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Gender*</label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Religion*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Christianity" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Blood Group*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="A+" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Height*</label>
                            <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="5.6'" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Weight*</label>
                            <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="56" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">Special Skills*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Type Tag and press enter..." />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md">
                            Update Change
                        </button>
                    </div>
                </div>
            </form>
        </div>}
        {basicInfo == true &&
        <div className="max-w-4xl mx-auto p-6 bg-white shadow border-t-2 border-black rounded-md">
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">First Name*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Mrs. Jacoline" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Frankly" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Current Job Place*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Company Name" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Designation*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="UI/UX Engineer" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Year of Experiences*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="3.5 Years" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Qualification*</label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                            <option>Bachelor Degree in CSE</option>
                            <option>Master Degree in CSE</option>
                            <option>PhD in CSE</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Email*</label>
                        <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="info@example.com" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone Number*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="+880-17 **** ****" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Website Link*</label>
                        <input type="url" className="w-full mt-1 p-2 border rounded-md" placeholder="https://example.com" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Language*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Bangla, English, Hindi" />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Career Objective*</label>
                        <textarea className="w-full mt-1 p-2 border rounded-md" placeholder="Something Write Yourself...." rows="4"></textarea>
                    </div>
                    <div className="col-span-2 flex justify-between items-center">
                        <div className="text-center">
                            <button type="submit" className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md">
                                Update Resume
                            </button>
                        </div>
                        <div>
                            <label className="block text-gray-700">Upload Image</label>
                            <div className="mt-1">
                                <button className="w-40 h-40 border-2 border-dashed rounded-md text-center flex items-center justify-center">
                                    <span className="text-gray-500">Upload Image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>}
        {education == true &&
        <div className="max-w-4xl mx-auto p-6  bg-white shadow border-t-2 border-black rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Educational Qualification:</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Academic Information:</h3>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Education Level*</label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                            <option>Bachelor Degree in CSE</option>
                            <option>Master Degree in CSE</option>
                            <option>PhD in CSE</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">My Major*</label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                            <option>Science</option>
                            <option>Engineering</option>
                            <option>Arts</option>
                            <option>Business</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Institute/University*</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Type Your Institute Name..." />
                    </div>
                    <div>
                        <label className="block text-gray-700">Result/GPA**</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="4.75/5" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Starting Period*</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Ending Period*</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded-md" />
                    </div>
                </div>
                <div className="mt-4">
                    <a href="#" className="text-teal-600">Add Education+</a>
                </div>
                <div className="text-center mt-6">
                    <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md">
                        Update Change
                    </button>
                </div>
            </form>
        </div>}
        {professionalInfo == true&&
        <div className="max-w-4xl flex  flex-col gap-4 mx-auto p-6 bg-white shadow border-t-2  border-black hadow-md rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Employment Information</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Add Your Experiences</h3>
            <div className='h-[2px] w-[90%] bg-blue-300'></div>
            <form>
                <div className="grid grid-cols-2 gap-5">
                    <div className='pt-[3px]'>
                        <label className="block text-gray-700">Company Name</label>
                        <input className='h-[6vh] w-[100%] rounded-lg border outline-none pl-[10px] text-black' type='text' placeholder='Enter your name'></input>
                    </div>
                    <div>
                        <label className="block text-gray-700">Designation</label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                            <option>Back-end-Developer</option>
                            <option>Front-end-Developer</option>
                            <option>full-stack-Developer</option>
                            
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Starting Period</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded-md" placeholder="" />
                    </div>
                   
                    <div>
                        <label className="block text-gray-700">Ending Period*</label>
                        <input type="date" className="w-full mt-1 p-2 border rounded-md" />
                    </div>
                </div>
                <div className="mt-4">
                <input type='checkbox'></input>
                    <label href="#" className="text-teal-600">continuting working here</label>
                </div>
                <div className="text-center mt-6 flex gap-3 flex-col ">
                    <h1 className='pr-[90%]'>Responsibility</h1>
                    <textarea className='border'></textarea>
                </div>
            </form>
        </div>}
        
        </div>
        </div>
         </div>

       <Footer/> 
    </div>
  )
}

export default EditResumePage