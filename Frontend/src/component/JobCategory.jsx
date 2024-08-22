import React from 'react'


function JobCategory() {
  return (
    <div>
      <div className=' w-[100%]  p-24 flex  flex-col gap-7'>
        <h1 className='text-[35px] font-bold'>Trending Jobs <span className='text-[#00A7AC]'>Category</span></h1>
        <div className='flex justify-between w-[100%] '>
        <label className='text-gray-500'>To choose your trending job dream & to make future bright.</label>
        <label className='font-semibold cursor-pointer'>Explore More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></label>
        
        </div>
        <div className=' w-[100%]  grid grid-cols-5 gap-4'>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-teal-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/account-finance.svg'></img>
                <h3 className='font-semibold'>Account & Finance</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>44</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-teal-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/technology.svg'></img>
                <h3 className='font-semibold text-[16px]'>Technology</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-teal-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/medical.svg'></img>
                <h3 className='font-semibold text-[16px]'>Medical & Nurse</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>13</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border  rounded-md p-5 hover:border-teal-500'>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/marketing.svg'></img>
                <h3 className='font-semibold text-[16px]'>Marketing & Sales</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-teal-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/design-job.svg'></img>
                <h3 className='font-semibold text-[16px]'>Design Jobs</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>10</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-teal-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/transportation.svg'></img>
                <h3 className='font-semibold text-[16px]'>Transportation</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>124</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-teal-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/devlopment.svg'></img>
                <h3 className='font-semibold text-[16px]'>Devlopment</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>158</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-teal-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/receotionist.svg'></img>
                <h3 className='font-semibold text-[16px]'>Receptionist Job</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-teal-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/non-profit-org.svg'></img>
                <h3 className='font-semibold text-[16px]'>Non-Profit Organization</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
            <div className='h-[20vh] w-[100%] border rounded-md p-5 hover:border-teal-500 '>
                <img src='https://jobes-nextjs.vercel.app/assets/images/icon/architect.svg'></img>
                <h3 className='font-semibold text-[16px]'>Technology</h3>
                <label>Job Available : <span className='text-[#84A7AC] font-semibold'>12</span></label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JobCategory
