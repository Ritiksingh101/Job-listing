import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function JobCategoryAll() {

    
  return (
    <div>
       <div className=' w-[100%]  py-16 px-28 flex  flex-col gap-7 justify-center items-center'>
        <div className='flex justify-between w-[100%] items-center '>
        <label className='text-gray-500 font-medium'>Showing results 10 in 200 jobs list</label>
        <div className="flex items-center bg-gray-100 rounded-md p-2 w-[25%]">
      <input
        type="text"
        placeholder="Search.."
        className="bg-transparent focus:outline-none flex-grow px-2 text-gray-700"
      />
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-600 text-white rounded-md p-2  w-[15%] focus:outline-none">
      <i class="fa fa-search" aria-hidden="true"></i>

      </button>
    </div>
        
        </div>
        <div className=' w-[100%]  grid grid-cols-5 gap-4'>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-gray-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/account-finance.svg'></img>
                <h3 className='font-semibold'>Account & Finance</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>44</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-gray-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/technology.svg'></img>
                <h3 className='font-semibold text-[16px]'>Technology</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-gray-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/medical.svg'></img>
                <h3 className='font-semibold text-[16px]'>Medical & Nurse</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>13</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-gray-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/marketing.svg'></img>
                <h3 className='font-semibold text-[16px]'>Marketing & Sales</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/design-job.svg'></img>
                <h3 className='font-semibold text-[16px]'>Design Jobs</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>10</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/transportation.svg'></img>
                <h3 className='font-semibold text-[16px]'>Transportation</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>124</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/devlopment.svg'></img>
                <h3 className='font-semibold text-[16px]'>Devlopment</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>158</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/receotionist.svg'></img>
                <h3 className='font-semibold text-[16px]'>Receptionist Job</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/non-profit-org.svg'></img>
                <h3 className='font-semibold text-[16px]'>Non-Profit Organization</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/architect.svg'></img>
                <h3 className='font-semibold text-[16px]'>Technology</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/civil.svg'></img>
                <h3 className='font-semibold text-[16px]'>Civil Engineering</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>19</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/medical.svg'></img>
                <h3 className='font-semibold text-[16px]'>Electrian/Repair</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>89</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/mechanical.svg'></img>
                <h3 className='font-semibold text-[16px]'>Mechanical Engg.</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>185</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/insurance.svg'></img>
                <h3 className='font-semibold text-[16px]'>Insurance Jobs</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>10</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/design-job.svg'></img>
                <h3 className='font-semibold text-[16px]'>Web Applications</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>894</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/education.svg'></img>
                <h3 className='font-semibold text-[16px]'>Education</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>51</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/education.svg'></img>
                <h3 className='font-semibold text-[16px]'>Administration</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>51</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/pharmaceutucals.svg'></img>
                <h3 className='font-semibold text-[16px]'>Pharmaceuticals</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>51</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/education.svg'></img>
                <h3 className='font-semibold text-[16px]'>Diploma Jobs</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>51</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-gray-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/car-driving.svg'></img>
                <h3 className='font-semibold text-[16px]'>Car Driving</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>51</span></label>
            </div>

        </div>
        <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      
    </Stack>
      </div>
    </div>
  )
}

export default JobCategoryAll
