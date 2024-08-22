import React from 'react'
function Hero() {
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center'>
    <img className='h-full w-full object-cover object-center' src='https://jobes-nextjs.vercel.app/_next/static/media/h1-hero-bg.b5f38767.png'></img> 
    <div className='h-full w-full bg-black absolute left-0 top-[17vh] opacity-55 flex justify-center items-center'></div>  
    <div className=' w-[100%] absolute flex flex-col  justify-center items-center gap-2 '>
    <h1 className='text-white  text-[70px]  font-bold'>Your Career’s <span className='text-[#00A7AC]'>Opportunity</span> .</h1>
    <p className='text-white text-[19px]'>2400 Peoples are daily search in this portal, 100 user added job portal!</p>
    <div className=' w-[65%] flex  gap-5'>
    <div className=' w-[25%] gap-8 p-[10px]  flex justify-center items-center'>
    <div className='border border-[#00A7AC] h-[60px] w-[60px] flex rotate-45  justify-center items-center' >
    <img className=' rotate-[-45deg]' src='https://jobes-nextjs.vercel.app/assets/images/icon/job2.svg'></img>
     </div>
      <div className='flex flex-col'>
     <label className='text-white text-[18px] font-semibold'>Live job</label>
     <label className='text-[#00A7AC] text-[20px] font-semibold'>20223</label>
      </div>
    </div>
    <div className=' w-[25%] gap-8 p-[10px]  flex justify-center items-center'>
    <div className='border border-[#00A7AC] h-[60px] w-[60px] flex rotate-45 justify-center items-center' >
    <img  className=' rotate-[-45deg]'    src='https://jobes-nextjs.vercel.app/assets/images/icon/companies.svg'></img>
     </div>
      <div className='flex flex-col'>
     <label className='text-white text-[18px] font-semibold'>Companies</label>
     <label className='text-[#00A7AC] text-[20px] font-semibold'>804+</label>
      </div>
    </div><div className=' w-[25%] gap-8 p-[10px] flex justify-center items-center'>
    <div className='border border-[#00A7AC] h-[60px] w-[60px] flex rotate-45 justify-center items-center' >
    <img  className=' rotate-[-45deg]'   src='https://jobes-nextjs.vercel.app/assets/images/icon/candidates.svg'></img>
     </div>
      <div className='flex flex-col'>
     <label className='text-white text-[18px] font-semibold'>Candidates</label>
     <label className='text-[#00A7AC] text-[20px] font-semibold'>500+</label>
      </div>
    </div><div className=' w-[25%] gap-8 p-[10px]   flex justify-center items-center'>
    <div className='border border-[#00A7AC] h-[60px] w-[60px] flex rotate-45 justify-center items-center' >
    <img  className=' rotate-[-45deg]'   src='	https://jobes-nextjs.vercel.app/assets/images/icon/new-jobs.svg'></img>
     </div>
      <div className='flex flex-col'>
     <label className='text-white text-[18px] font-semibold'>New Jobs</label>
     <label className='text-[#00A7AC] text-[20px] font-semibold '>102+</label>
      </div>
    </div>

    </div>.
  
    <div className="flex items-center w-[60%] space-x-4 p-4 bg-gray-100 rounded-md border hover:border-teal-500">
      <div className="flex items-center w-[40%] h-[7vh] bg-gray-200 border rounded-md shadow-sm">
        <span className="flex items-center px-3 pt-[8px]">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a1 1 0 011-1h10a1 1 0 011 1v1H4V3zm0 3h12v11a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm3 2v1H5v1h2v1H5v1h2v1H5v1h2v1H5v1h2v1h8v-1h-2v-1h2v-1h-2v-1h2v-1h-2v-1h2v-1h-2V9h2V8h-8v1z" />
          </svg> */}
          <i class="fa fa-briefcase h-5 w-5  text-gray-400" aria-hidden="true"></i>

        </span>
        <input
          type="text"
          placeholder="Job Title"
          className="px-3 py-2 w-full  bg-gray-200 outline-none border-none "
        />
      </div>
      <div className="flex items-center h-[7vh] w-[40%] bg-gray-200 border rounded-md shadow-sm">
        <span className="flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4a3 3 0 016 0h4a1 1 0 011 1v2a1 1 0 01-1 1H5a3 3 0 110-4zm0 6h10a1 1 0 011 1v5a1 1 0 01-1 1H5a3 3 0 110-6zM6 12a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
        </span>
        <select className="px-3 py-2 w-full border-none  bg-gray-200 ">
          <option value="">Select Category</option>
          <option value="IT">UI & UX</option>
          <option value="Finance">Marketing Coordinator</option>
          <option value="Healthcare">Medical Assistant</option>
          <option value="Education">Project manager</option>
          <option value="Marketing">Librarian</option>
          <option value="Marketing">Account Executive</option>
        </select>
      </div>
      <div className='h-[7vh] w-[15%]  bg-teal-500 flex pl-[10px] rounded-lg  gap-3 items-center  hover:bg-black text-white transition-all delay-100 cursor-pointer focus:outline-none focus:ring'>
      <i class="fa fa-search" aria-hidden="true"></i>
      <button >
        Search
      </button>
      </div>
    
    </div>




    {/* <div className='h-[12vh] w-[65%] bg-red-300 flex gap-2 items-center pl-[10px] '>
    <div className='h-[10vh] w-[49%] bg-gray-200  flex  pl-[10px] gap-3 items-center'>
    <i class="fa fa-briefcase fa-xl" aria-hidden="true"></i>
    <input className='h-[7vh] w-[90%] pl-[10px]  bg-gray-200 outline-none ' placeholder='jobTitle'></input>
    </div>
    <div className='h-[10vh] w-[49%] bg-white'></div>


    </div> */}
    </div> 
    </div>
  )
}

export default Hero


