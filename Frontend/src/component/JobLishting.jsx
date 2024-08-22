import React from 'react'

function JobLishting() {
  return (
    <div className=' w-[100%] flex p-[50px] gap-4'>
     <div className='w-[25%] borde bg-gray-200  rounded-lg shadow flex justify-center p-[10px] ' >
     <div className='h-[40vh] w-[100%] bg-white'>
     
     </div>
     </div>
     <div className=' w-[75%] p-[10px] flex  flex-col gap-5'>
      <div className=' w-[100%] flex  justify-between'>
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
      <div className='h-[100vh] w-[100%] border'></div>
     </div>
    </div>
  )
}

export default JobLishting









