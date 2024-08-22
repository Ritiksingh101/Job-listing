import React from 'react'
import { useNavigate } from "react-router";

function CompanyDashboard() {
 const navigate = useNavigate()
  return (
    <div >
  <div className='p-[5%]'>
       <div className="flex justify-between items-center  p-4 border h-[12vh] rounded-lg">
      <button onClick={()=>navigate('/companydashboardpage')} className="text-black  bg-[#E0EDED] hover:text-white px-4 py-2 font-semibold hover:bg-[#00A7AC] rounded-l-lg border h-full w-full">Dashboard</button>
      <button onClick={()=>navigate("/companyprofilepage")} className="text-black bg-[#E0EDED] hover:text-white px-4 py-2 font-semibold hover:bg-[#00A7AC]  border h-full w-full">My Profile</button>
      <button onClick={()=>navigate('/companyjoblist')} className="text-black bg-[#E0EDED] hover:text-white px-4 py-2 font-semibold hover:bg-[#00A7AC]  border h-full w-full">Job List</button>
      <button onClick={()=>navigate('/plansubcriptionpage')} className="text-black bg-[#E0EDED] hover:text-white px-4 py-2 font-semibold hover:bg-[#00A7AC]  border h-full w-full">Plan & Subscription</button>
      <button className="text-black bg-[#E0EDED] hover:text-white px-4 py-2 font-semibold hover:bg-[#00A7AC]  border h-full w-full">Settings</button>
      <button className="text-black bg-[#E0EDED] hover:text-white px-4 py-2 font-semibold hover:bg-[#00A7AC] rounded-r-lg border h-full w-full">Log Out</button>
    </div>
    </div>
    </div>
  )
}

export default CompanyDashboard
